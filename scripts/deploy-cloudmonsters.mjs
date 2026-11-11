import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const ENV_PATH = path.join(ROOT_DIR, '.env');

function loadEnv() {
  const env = { ...process.env };
  if (fs.existsSync(ENV_PATH)) {
    const content = fs.readFileSync(ENV_PATH, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match) {
        env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
      }
    }
  }
  return env;
}

function copyDirRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function triggerDirectAdminWebhook(webhookUrl) {
  return new Promise((resolve, reject) => {
    const url = new URL(webhookUrl);
    const req = https.request(
      {
        hostname: url.hostname,
        port: url.port || 2222,
        path: url.pathname + url.search,
        method: 'POST',
        rejectUnauthorized: false,
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => resolve({ statusCode: res.statusCode, body }));
      }
    );
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const env = loadEnv();
  const webhookUrl = process.argv[2] || env.CLOUDMONSTERS_WEBHOOK_URL;

  console.log('1. Building Astro production output...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('2. Syncing dist/* to repository root for DirectAdmin public_html...');
  copyDirRecursive(DIST_DIR, ROOT_DIR);

  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (status) {
    console.log('3. Committing and pushing static build to GitHub...');
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "build(gent): sync static dist output for Cloudmonsters DirectAdmin"', { stdio: 'inherit' });
    execSync('git push origin HEAD:main', { stdio: 'inherit' });
  } else {
    console.log('3. Root static files already up to date in Git.');
  }

  if (webhookUrl) {
    console.log(`4. Triggering Cloudmonsters DirectAdmin Webhook: ${webhookUrl}`);
    const res = await triggerDirectAdminWebhook(webhookUrl);
    console.log(`   DirectAdmin response: HTTP ${res.statusCode} (204 = Fetch + Deploy succeeded)`);
  } else {
    console.log('4. No CLOUDMONSTERS_WEBHOOK_URL set in .env yet.');
    console.log('   Add CLOUDMONSTERS_WEBHOOK_URL=https://spui.cloudmonsters.nl:2222/api/git/user/cm33376/uuid/<uuid>/webhook to .env');
  }
}

main().catch((err) => {
  console.error('Deploy failed:', err);
  process.exit(1);
});
