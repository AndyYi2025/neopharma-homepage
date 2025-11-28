# NeoPharma Ultra-Cheap Deployment Guide

**Strategy:** Cloudflare Pages + Google Cloud Run + Cloud SQL
**Total Cost:** $7-10/month
**Setup Time:** 2-3 hours
**Last Updated:** 2025-11-28

---

## 📋 Overview

This guide deploys NeoPharma using the most cost-effective production setup:

- **Homepage**: Cloudflare Pages (FREE) - Static Next.js site
- **Blog**: Google Cloud Run (Serverless Ghost) - $0-3/month
- **Database**: Cloud SQL PostgreSQL - $7/month OR share with existing app
- **Total**: **$7-10/month** with unlimited bandwidth and global CDN

---

## 🎯 Architecture

```
┌──────────────────────────────────────────────┐
│  www.neopharma.io                           │
│  Cloudflare Pages (FREE)                    │
│  - Next.js static homepage                  │
│  - Global CDN (200+ locations)              │
│  - Unlimited bandwidth                      │
│  - Auto SSL                                 │
└──────────────────────────────────────────────┘
              │
              │ /blog → Reverse proxy
              ↓
┌──────────────────────────────────────────────┐
│  blog.neopharma.io (or /blog)               │
│  Google Cloud Run (Serverless)              │
│  - Ghost CMS                                │
│  - Auto-scales 0-N                          │
│  - Pay per request                          │
│  - $0 when idle                             │
└──────────────────────────────────────────────┘
              │
              ↓
┌──────────────────────────────────────────────┐
│  Cloud SQL PostgreSQL                       │
│  - Shared micro instance (db-f1-micro)      │
│  - 0.6GB RAM / 10GB storage                 │
│  - $7.67/month                              │
│  - Can share with main app database         │
└──────────────────────────────────────────────┘
```

---

## 📦 Prerequisites

### Required:
- [ ] Domain: `neopharma.io` (you own this)
- [ ] GitHub account
- [ ] Cloudflare account (free)
- [ ] Google Cloud account with billing enabled
- [ ] Google Cloud project (can use existing)
- [ ] `gcloud` CLI installed
- [ ] Node.js 18+ installed
- [ ] Git installed

### Verify Prerequisites:

```bash
# Check Node.js
node --version  # Should be 18+

# Check gcloud CLI
gcloud --version

# Login to gcloud (if not already)
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Check current project
gcloud config get-value project
```

---

## 🚀 PART 1: Deploy Homepage to Cloudflare Pages

**Time:** 20-30 minutes
**Cost:** $0/month

---

### Step 1.1: Prepare Your Repository

```bash
# Navigate to your project
cd /path/to/NeoPharma_Homepage

# Verify build works locally
npm run build

# Should output to /out directory
ls out/

# Initialize git (if not already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: NeoPharma homepage with AI-SEO optimization"
```

---

### Step 1.2: Push to GitHub

**Option A: Create new repo via GitHub CLI**

```bash
# Install GitHub CLI (if not installed)
# Windows: winget install GitHub.cli
# Mac: brew install gh

# Login
gh auth login

# Create and push
gh repo create neopharma-homepage --public --source=. --remote=origin --push
```

**Option B: Create manually on GitHub**

1. Go to https://github.com/new
2. Repository name: `neopharma-homepage`
3. Public or Private (your choice)
4. Click "Create repository"
5. Follow instructions to push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/neopharma-homepage.git
git branch -M main
git push -u origin main
```

**Verification:**
- [ ] Repository visible at `https://github.com/YOUR_USERNAME/neopharma-homepage`
- [ ] All files pushed successfully

---

### Step 1.3: Create Cloudflare Account & Add Domain

1. **Sign up for Cloudflare** (if new):
   - Go to: https://dash.cloudflare.com/sign-up
   - Use email + password or GitHub login
   - Free plan is perfect

2. **Add your domain to Cloudflare:**
   - Click "Add a Site"
   - Enter: `neopharma.io`
   - Select **Free Plan**
   - Click "Continue"

3. **Update nameservers** at your domain registrar:
   - Cloudflare will show 2 nameservers like:
     ```
     dana.ns.cloudflare.com
     walt.ns.cloudflare.com
     ```
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update nameservers to Cloudflare's
   - Wait 5-60 minutes for propagation

4. **Verify domain active:**
   - Cloudflare will email you when ready
   - Status should show "Active"

---

### Step 1.4: Deploy to Cloudflare Pages

1. **Navigate to Cloudflare Pages:**
   - Go to: https://dash.cloudflare.com/
   - Select your account
   - Click "Workers & Pages" (left sidebar)
   - Click "Create application" → "Pages" → "Connect to Git"

2. **Connect GitHub:**
   - Click "Connect GitHub"
   - Authorize Cloudflare
   - Select repository: `neopharma-homepage`

3. **Configure Build Settings:**

   | Setting | Value |
   |---------|-------|
   | **Framework preset** | Next.js (Static HTML Export) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `out` |
   | **Root directory** | `/` |
   | **Environment variables** | (none needed yet) |

4. **Advanced settings (optional):**
   - Node version: `18` or `20`
   - Build timeout: Default (15 min is enough)

5. **Click "Save and Deploy"**

   - First build takes 2-3 minutes
   - Watch build logs
   - Should see: ✅ "Success! Your site is now live"

6. **Get your deployment URL:**
   - Will be: `neopharma-homepage.pages.dev`
   - Visit to verify homepage works

---

### Step 1.5: Add Custom Domain to Pages

1. **In Cloudflare Pages dashboard:**
   - Select your Pages project
   - Click "Custom domains"
   - Click "Set up a custom domain"

2. **Add domains:**
   - Primary: `www.neopharma.io`
   - (Optional) Also add: `neopharma.io` → redirects to www

3. **DNS Configuration (automatic):**
   - Cloudflare automatically creates CNAME records
   - Should see:
     ```
     www.neopharma.io → CNAME → neopharma-homepage.pages.dev
     ```

4. **Enable HTTPS (automatic):**
   - SSL/TLS certificate auto-provisioned
   - Takes 1-5 minutes

5. **Verify:**
   - Visit: https://www.neopharma.io
   - Should see your homepage with:
     - ✅ Animated Liquid Ether background
     - ✅ Definitional sentence
     - ✅ All sections working
     - ✅ Green padlock (HTTPS)

---

### Step 1.6: Configure Auto-Deployments

**Already enabled!** Every push to `main` branch auto-deploys.

**Test it:**
```bash
# Make a small change
echo "<!-- Updated -->" >> src/app/page.tsx

# Commit and push
git add .
git commit -m "Test auto-deploy"
git push

# Watch Cloudflare Pages dashboard
# Should see new deployment in ~2 minutes
```

**Deploy branches (optional):**
- Preview deployments for PRs
- Settings → Builds & deployments → Branch deployments

---

## 🗄️ PART 2: Set Up Cloud SQL Database

**Time:** 15-20 minutes
**Cost:** $7.67/month (or share existing database)

---

### Step 2.1: Create Cloud SQL Instance

**Option A: Create NEW dedicated Ghost database**

```bash
# Set project (if multiple projects)
gcloud config set project neopharma

# Create PostgreSQL instance (shared micro = cheapest)
gcloud sql instances create ghost-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1 \
  --backup-start-time=03:00 \
  --maintenance-window-day=SUN \
  --maintenance-window-hour=04 \
  --storage-type=HDD \
  --storage-size=10GB \
  --storage-auto-increase

# This takes 5-10 minutes
# Cost: $7.67/month
```

**Option B: Use EXISTING Cloud SQL instance** (RECOMMENDED - you already have one!)

```bash
# List existing instances
gcloud sql instances list

# You already have a PostgreSQL instance from NeoPharma_Dataworker
# Just create a separate 'ghost' database on the existing instance
# Cost: $0 additional (shared resources)

# Skip to Step 2.2 to create the Ghost database
```

---

### Step 2.2: Configure Database for Ghost

```bash
# Replace INSTANCE_NAME with your instance name
# If using existing instance, find it with: gcloud sql instances list
INSTANCE_NAME="your-instance-name"  # e.g., "neopharma-db" from NeoPharma_Dataworker

# Create Ghost database
gcloud sql databases create ghost \
  --instance=$INSTANCE_NAME

# Create Ghost user with secure password
# Generate a strong password first
PASSWORD=$(openssl rand -base64 32)
echo "Ghost DB Password: $PASSWORD"  # SAVE THIS!

gcloud sql users create ghost \
  --instance=$INSTANCE_NAME \
  --password=$PASSWORD

# Or set your own password:
gcloud sql users create ghost \
  --instance=$INSTANCE_NAME \
  --password=YOUR_SECURE_PASSWORD
```

**Save these credentials:**
```
Instance: [your-instance-name]
Database: ghost
User: ghost
Password: [YOUR_PASSWORD]
Connection: neopharma:us-central1:[your-instance-name]
```

---

### Step 2.3: Enable Cloud SQL Admin API

```bash
# Enable required API
gcloud services enable sqladmin.googleapis.com
```

---

### Step 2.4: Test Connection (Optional)

```bash
# Install Cloud SQL Proxy (if not already installed)
# Windows: Download from https://dl.google.com/cloudsql/cloud_sql_proxy.x64.exe
# Mac/Linux:
wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
chmod +x cloud_sql_proxy

# Start proxy (in separate terminal)
# Replace INSTANCE_NAME with your instance
./cloud_sql_proxy -instances=neopharma:us-central1:INSTANCE_NAME=tcp:5432

# Test connection (in new terminal) - requires psql client
psql -h 127.0.0.1 -U ghost -d ghost
# Enter password when prompted
# Type: \dt (should show empty - no tables yet)
# Type: \q to quit
```

---

## 👻 PART 3: Deploy Ghost on Cloud Run

**Time:** 30-40 minutes
**Cost:** $0-3/month (serverless)

---

### Step 3.1: Create Ghost Configuration

**Create a deployment directory:**

```bash
# Create new directory for Ghost deployment
mkdir ~/ghost-cloudrun
cd ~/ghost-cloudrun
```

**Create `Dockerfile`:**

```dockerfile
FROM ghost:5-alpine

# Install Cloud SQL Proxy
RUN apk add --no-cache wget ca-certificates
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O /usr/local/bin/cloud_sql_proxy && \
    chmod +x /usr/local/bin/cloud_sql_proxy

# Set working directory
WORKDIR /var/lib/ghost

# Copy config
COPY config.production.json /var/lib/ghost/config.production.json

# Expose Ghost port
EXPOSE 2368

# Start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
```

**Create `config.production.json`:**

```json
{
  "url": "https://blog.neopharma.io",
  "server": {
    "port": 2368,
    "host": "0.0.0.0"
  },
  "database": {
    "client": "pg",
    "connection": {
      "socketPath": "/cloudsql/neopharma:us-central1:YOUR_INSTANCE_NAME",
      "user": "ghost",
      "password": "YOUR_DB_PASSWORD",
      "database": "ghost"
    }
  },
  "mail": {
    "transport": "Direct"
  },
  "logging": {
    "transports": ["stdout"]
  },
  "process": "systemd",
  "paths": {
    "contentPath": "/var/lib/ghost/content"
  }
}
```

**⚠️ IMPORTANT:** Replace in config:
- `YOUR_INSTANCE_NAME` → Your Cloud SQL instance name (e.g., "neopharma-db")
- `YOUR_DB_PASSWORD` → Password from Step 2.2
- URL can be `https://blog.neopharma.io` OR `https://www.neopharma.io` (if using subdirectory)
- Note: Using `"client": "pg"` for PostgreSQL (not "mysql")

**Create `start.sh`:**

```bash
#!/bin/sh

# Start Cloud SQL Proxy in background
/usr/local/bin/cloud_sql_proxy -instances=neopharma:us-central1:YOUR_INSTANCE_NAME=unix:/cloudsql/neopharma:us-central1:YOUR_INSTANCE_NAME &

# Wait for proxy to be ready
sleep 5

# Start Ghost
node current/index.js
```

**⚠️ Replace:** `YOUR_INSTANCE_NAME` in start.sh with your actual instance name

---

### Step 3.2: Build and Push Docker Image

```bash
# Enable Container Registry API
gcloud services enable containerregistry.googleapis.com
gcloud services enable run.googleapis.com

# Set region
REGION=us-central1

# Build image
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/ghost:latest .

# This takes 3-5 minutes
# Image will be ~200MB
```

---

### Step 3.3: Deploy to Cloud Run

```bash
# Deploy Ghost to Cloud Run
gcloud run deploy ghost \
  --image gcr.io/YOUR_PROJECT_ID/ghost:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --timeout 300 \
  --max-instances 2 \
  --min-instances 0 \
  --concurrency 80 \
  --port 2368 \
  --add-cloudsql-instances YOUR_PROJECT_ID:us-central1:ghost-db \
  --set-env-vars NODE_ENV=production

# Takes 2-3 minutes
```

**Expected output:**
```
Service [ghost] revision [ghost-00001-xxx] has been deployed and is serving 100% of traffic.
Service URL: https://ghost-xxxxx-uc.a.run.app
```

**Save this URL!** Example: `https://ghost-xxxxx-uc.a.run.app`

---

### Step 3.4: Verify Ghost is Running

```bash
# Get Cloud Run URL
GHOST_URL=$(gcloud run services describe ghost --region=$REGION --format='value(status.url)')

# Test Ghost
curl -I $GHOST_URL

# Should see: HTTP/2 200
# Or visit in browser - should see Ghost default page
```

---

### Step 3.5: Complete Ghost Setup

1. **Visit your Cloud Run URL:** `https://ghost-xxxxx-uc.a.run.app/ghost`

2. **Create admin account:**
   - Site title: `NeoPharma Blog`
   - Full name: Your name
   - Email: your email
   - Password: Strong password

3. **Ghost setup wizard:**
   - Skip email configuration (use "I'll do this later")
   - Skip staff invites

4. **Verify Ghost works:**
   - Visit: `https://ghost-xxxxx-uc.a.run.app`
   - Should see default Ghost theme

---

## 🌐 PART 4: Configure Custom Domain for Blog

**Time:** 15-20 minutes
**Options:** Subdomain (blog.neopharma.io) OR Subdirectory (/blog)

---

### Option A: Subdomain (blog.neopharma.io) - RECOMMENDED

#### Step 4A.1: Map Domain in Cloud Run

```bash
# Create domain mapping
gcloud run domain-mappings create \
  --service ghost \
  --domain blog.neopharma.io \
  --region $REGION

# Will show DNS records to add
```

#### Step 4A.2: Add DNS Records in Cloudflare

1. Go to Cloudflare Dashboard → DNS
2. Add CNAME record:
   - **Type:** CNAME
   - **Name:** `blog`
   - **Target:** `ghs.googlehosted.com` (or value from Cloud Run)
   - **Proxy status:** DNS only (grey cloud)
   - Click Save

3. Wait 5-10 minutes for DNS propagation

#### Step 4A.3: Verify Domain Mapping

```bash
# Check mapping status
gcloud run domain-mappings describe \
  --domain blog.neopharma.io \
  --region $REGION

# Status should show: Ready
```

4. **Visit:** https://blog.neopharma.io
   - Should see Ghost blog
   - Green padlock (HTTPS auto-configured)

#### Step 4A.4: Update Ghost Config for Custom Domain

```bash
# Update config.production.json URL
cd ~/ghost-cloudrun

# Edit config
nano config.production.json

# Change URL to:
"url": "https://blog.neopharma.io",

# Rebuild and redeploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/ghost:latest .

gcloud run deploy ghost \
  --image gcr.io/YOUR_PROJECT_ID/ghost:latest \
  --region $REGION
```

5. **Visit Ghost admin:**
   - https://blog.neopharma.io/ghost
   - Login with your credentials
   - Settings → General → Publication info
   - Verify Site URL is: `https://blog.neopharma.io`

---

### Option B: Subdirectory (/blog) - Advanced

**Use Cloudflare Workers for reverse proxy**

#### Step 4B.1: Create Cloudflare Worker

1. Go to Cloudflare Dashboard → Workers & Pages
2. Click "Create application" → "Create Worker"
3. Name: `blog-proxy`
4. Click "Deploy"
5. Click "Edit Code"

**Paste this code:**

```javascript
// Cloudflare Worker for /blog reverse proxy
const GHOST_URL = 'https://ghost-xxxxx-uc.a.run.app'; // YOUR Cloud Run URL

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);

  // Only proxy /blog/* paths
  if (!url.pathname.startsWith('/blog')) {
    return fetch(request);
  }

  // Remove /blog prefix for Ghost
  const ghostPath = url.pathname.replace(/^\/blog/, '') || '/';

  // Construct Ghost URL
  const ghostUrl = GHOST_URL + ghostPath + url.search;

  // Create new request
  const ghostRequest = new Request(ghostUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });

  // Fetch from Ghost
  let response = await fetch(ghostRequest);

  // Rewrite response
  response = new Response(response.body, response);

  // Fix links in HTML
  if (response.headers.get('content-type')?.includes('text/html')) {
    let html = await response.text();
    html = html.replace(/href="\//g, 'href="/blog/');
    html = html.replace(/src="\//g, 'src="/blog/');
    response = new Response(html, {
      status: response.status,
      headers: response.headers
    });
  }

  return response;
}
```

6. Click "Save and Deploy"

#### Step 4B.2: Add Worker Route

1. Go to Workers & Pages → Overview
2. Select `blog-proxy` worker
3. Click "Triggers" → "Add route"
4. Route: `www.neopharma.io/blog*`
5. Zone: `neopharma.io`
6. Click Save

**Now /blog routes to Ghost via Cloud Run!**

---

## 🔗 PART 5: Integrate Blog with Homepage

**Time:** 10 minutes

---

### Step 5.1: Add Blog Link to Navigation

**Edit `src/components/layout/Header.tsx`:**

```bash
cd /path/to/NeoPharma_Homepage
```

```typescript
// Find the navigation array (around line 10)
const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Blog', href: 'https://blog.neopharma.io' }, // ADD THIS
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]
```

**If using subdirectory (/blog):**
```typescript
{ name: 'Blog', href: '/blog' },
```

---

### Step 5.2: Update Footer Links

**Edit `src/components/layout/Footer.tsx`:**

```typescript
// Find companyLinks array
const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: 'https://blog.neopharma.io' }, // ADD THIS
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]
```

---

### Step 5.3: Deploy Updated Homepage

```bash
# Commit changes
git add .
git commit -m "Add blog navigation link"
git push

# Cloudflare Pages auto-deploys in 2-3 minutes
# Watch: https://dash.cloudflare.com/
```

---

### Step 5.4: Verify Integration

**Test navigation:**
- [ ] Visit: https://www.neopharma.io
- [ ] Click "Blog" in header
- [ ] Should navigate to: https://blog.neopharma.io (or /blog)
- [ ] Ghost blog loads
- [ ] Click logo → returns to homepage

---

## 🤖 PART 6: Set Up AIGC Workflow for Ghost

**Time:** 20-30 minutes
**Goal:** Automate blog post creation with AI

---

### Step 6.1: Install Ghost Admin API Dependencies

**On your local machine:**

```bash
# Create AIGC automation directory
mkdir ~/neopharma-aigc
cd ~/neopharma-aigc

# Initialize Node project
npm init -y

# Install dependencies
npm install @tryghost/admin-api dotenv openai
```

---

### Step 6.2: Get Ghost API Credentials

1. **Login to Ghost Admin:**
   - https://blog.neopharma.io/ghost

2. **Create Integration:**
   - Settings → Integrations
   - Click "Add custom integration"
   - Name: `AIGC Automation`
   - Description: `AI content generation`
   - Click "Create"

3. **Copy credentials:**
   - **Admin API Key:** (long string)
   - **API URL:** `https://blog.neopharma.io`

4. **Create `.env` file:**

```bash
# Create .env
cat > .env << EOF
GHOST_API_URL=https://blog.neopharma.io
GHOST_ADMIN_API_KEY=your_admin_api_key_here
OPENAI_API_KEY=your_openai_key_here
EOF
```

---

### Step 6.3: Create AI Blog Generator Script

**Create `generate-post.js`:**

```javascript
const GhostAdminAPI = require('@tryghost/admin-api');
const OpenAI = require('openai');
require('dotenv').config();

// Initialize Ghost API
const api = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.0'
});

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateBlogPost(topic) {
  console.log(`Generating blog post about: ${topic}`);

  // Generate content with ChatGPT
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert pharmaceutical sales and healthcare AI writer. Write engaging, informative blog posts for pharmaceutical sales professionals. Use a professional but accessible tone. Include practical insights and actionable advice."
      },
      {
        role: "user",
        content: `Write a comprehensive blog post about: ${topic}

        Requirements:
        - 800-1200 words
        - Include an engaging title
        - Write in Markdown format
        - Include 3-5 key takeaways
        - Add relevant examples for pharma sales reps
        - End with a call-to-action to try NeoPharma
        - SEO-optimized for pharmaceutical sales keywords

        Format:
        Title: [Title Here]

        [Content in Markdown]`
      }
    ],
    temperature: 0.7,
    max_tokens: 2000
  });

  const content = completion.choices[0].message.content;

  // Extract title and content
  const titleMatch = content.match(/Title:\s*(.+)/);
  const title = titleMatch ? titleMatch[1].trim() : topic;

  // Remove title line from content
  const markdown = content.replace(/Title:\s*.+\n\n?/, '').trim();

  // Convert Markdown to HTML (simple conversion)
  let html = markdown
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>');

  // Create post in Ghost
  try {
    const post = await api.posts.add({
      title: title,
      html: html,
      status: 'draft', // or 'published'
      tags: ['AI', 'Pharma Sales', 'Lead Discovery'],
      meta_title: title,
      meta_description: content.substring(0, 160)
    }, {source: 'html'});

    console.log(`✅ Post created: ${post.title}`);
    console.log(`   URL: ${post.url}`);
    console.log(`   Status: ${post.status}`);

    return post;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// CLI usage
const topic = process.argv[2] || 'How AI is transforming pharmaceutical sales';
generateBlogPost(topic)
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch(error => {
    console.error('Failed:', error);
    process.exit(1);
  });
```

---

### Step 6.4: Test AIGC Script

```bash
# Generate your first AI blog post
node generate-post.js "Top 5 strategies for targeting physicians in 2025"

# Should output:
# ✅ Post created: Top 5 strategies for targeting physicians in 2025
#    URL: https://blog.neopharma.io/top-5-strategies-physicians-2025/
#    Status: draft
```

**Verify in Ghost:**
- Login to https://blog.neopharma.io/ghost
- Go to Posts
- See your AI-generated draft
- Edit, publish when ready

---

### Step 6.5: Create Batch Generator

**Create `batch-generate.js`:**

```javascript
const { generateBlogPost } = require('./generate-post');

const topics = [
  "How to identify high-value physician targets with AI",
  "Medicare prescription data: A goldmine for pharma sales",
  "Building relationships with key opinion leaders in healthcare",
  "The future of pharmaceutical sales: AI-powered lead discovery",
  "5 ways to improve your territory planning with data analytics"
];

async function batchGenerate() {
  for (const topic of topics) {
    console.log(`\n--- Generating: ${topic} ---`);
    try {
      await generateBlogPost(topic);
      // Wait 30 seconds between posts to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 30000));
    } catch (error) {
      console.error(`Failed for topic: ${topic}`, error);
    }
  }
}

batchGenerate();
```

**Run batch generation:**
```bash
node batch-generate.js
# Generates 5 blog posts over ~3 minutes
```

---

## 📊 PART 7: Cost Breakdown & Optimization

---

### Monthly Cost Analysis

| Service | Tier | Cost | Notes |
|---------|------|------|-------|
| **Cloudflare Pages** | Free | **$0** | Unlimited bandwidth, builds |
| **Cloud Run (Ghost)** | Serverless | **$0-3** | Scales to zero, pay per request |
| **Cloud SQL** | db-f1-micro | **$7.67** | Shared instance |
| **Cloud Storage** | Standard | **~$0.20** | Ghost images/media |
| **Egress** | First 1GB free | **~$0** | Cloudflare CDN handles most |
| **TOTAL** | | **$7.87-$10.87** | |

---

### Cost Optimization Tips

#### 1. **Share Cloud SQL with Main App** (Save $7.67)

If you already have a Cloud SQL instance for your main app:

```bash
# Just create Ghost database on existing instance
gcloud sql databases create ghost --instance=YOUR_EXISTING_INSTANCE

# Update Ghost config to use shared instance
# Total savings: $7.67/month
# New total: $0-3/month! 🎉
```

#### 2. **Use Cloud Run Min Instances = 0** (Included in guide)

- Ghost scales to zero when idle
- Pay only when blog accessed
- Typical cost with low traffic: $0-1/month

#### 3. **Enable Cloud SQL Auto-Scaling Storage**

```bash
gcloud sql instances patch ghost-db \
  --storage-auto-increase \
  --storage-auto-increase-limit=15
```

Only pays for storage used.

#### 4. **Use Cloudflare Image Optimization** (Free)

- Enable in Cloudflare → Speed → Optimization
- Auto-compresses images
- Serves WebP when supported
- Reduces Ghost storage costs

#### 5. **Schedule Cloud SQL Maintenance**

Already configured in setup:
- Backups: 3 AM
- Maintenance: Sunday 4 AM
- Minimizes disruption, no extra cost

---

### Expected Costs by Traffic Level

| Monthly Visitors | Cloud Run | Cloud SQL | Storage | Total |
|-----------------|-----------|-----------|---------|-------|
| **0-1K** | $0-1 | $7.67 | $0.20 | **~$8** |
| **1K-10K** | $1-2 | $7.67 | $0.50 | **~$10** |
| **10K-50K** | $2-5 | $9-12* | $1 | **~$15** |
| **50K+** | $5-15 | $12-20* | $2 | **~$30** |

*Would need to upgrade Cloud SQL tier at higher traffic

---

## 🧪 PART 8: Testing & Validation

---

### Homepage Tests

```bash
# Test homepage
curl -I https://www.neopharma.io

# Should see:
# HTTP/2 200
# server: cloudflare
# x-powered-by: Next.js

# Test robots.txt
curl https://www.neopharma.io/robots.txt

# Should see AI crawler allowances

# Test schema
curl -s https://www.neopharma.io | grep -o '@type.*Organization'

# Should find Organization schema
```

---

### Blog Tests

```bash
# Test blog
curl -I https://blog.neopharma.io

# Should see:
# HTTP/2 200
# x-powered-by: Express (Ghost)

# Test Ghost admin
curl -I https://blog.neopharma.io/ghost

# Should redirect to login: HTTP/2 302
```

---

### Integration Tests

**Manual verification checklist:**

- [ ] Homepage loads: https://www.neopharma.io
- [ ] HTTPS works (green padlock)
- [ ] Blog link in header works
- [ ] Blog loads: https://blog.neopharma.io
- [ ] Ghost admin accessible: https://blog.neopharma.io/ghost
- [ ] Can create/publish posts
- [ ] Images upload successfully
- [ ] Posts appear on blog homepage
- [ ] Clicking blog logo returns to main homepage
- [ ] Mobile responsive (test on phone)

---

### Performance Tests

**Test with GTmetrix:**
- Homepage: https://gtmetrix.com/?url=https://www.neopharma.io
- Expected: A grade, <2s load time

**Test with Google PageSpeed:**
- https://pagespeed.web.dev/
- Expected: 90+ score

---

## 🔧 PART 9: Troubleshooting

---

### Issue: Cloudflare Pages build fails

**Symptoms:** Build shows errors in Cloudflare dashboard

**Solutions:**

```bash
# 1. Verify build works locally
npm run build

# 2. Check Node version in Cloudflare
# Settings → Environment variables → Add:
NODE_VERSION = 18

# 3. Check build command
# Should be: npm run build
# Output: out

# 4. Clear cache and rebuild
# Cloudflare Pages → Deployments → Retry deployment
```

---

### Issue: Cloud Run deployment fails

**Symptoms:** `gcloud run deploy` errors

**Solutions:**

```bash
# 1. Check service account permissions
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member=serviceAccount:YOUR_PROJECT_NUMBER-compute@developer.gserviceaccount.com \
  --role=roles/cloudsql.client

# 2. Verify Cloud SQL connection string
# Should be: PROJECT_ID:REGION:INSTANCE_NAME
gcloud sql instances describe ghost-db --format="value(connectionName)"

# 3. Check Docker build
docker build -t ghost-test .
docker run -p 2368:2368 ghost-test

# 4. View Cloud Run logs
gcloud run services logs read ghost --region=us-central1 --limit=50
```

---

### Issue: Ghost shows database connection error

**Symptoms:** "Database connection error" in Cloud Run logs

**Solutions:**

1. **Verify Cloud SQL instance is running:**
```bash
gcloud sql instances describe ghost-db
# State should be: RUNNABLE
```

2. **Check database credentials:**
```bash
# Test connection (requires psql client installed)
gcloud sql connect YOUR_INSTANCE_NAME --user=ghost --database=ghost
# Enter password
\dt  # List tables
\q   # Quit
```

3. **Verify Cloud SQL Proxy in Dockerfile:**
```dockerfile
# Make sure this line exists:
--add-cloudsql-instances YOUR_PROJECT_ID:us-central1:ghost-db
```

4. **Check config.production.json:**
- socketPath should match Cloud Run cloudsql mount
- Password should match database user

---

### Issue: Custom domain not working

**Symptoms:** blog.neopharma.io shows 404 or certificate error

**Solutions:**

1. **Verify DNS propagation:**
```bash
dig blog.neopharma.io
# Should show CNAME to ghs.googlehosted.com
```

2. **Check domain mapping status:**
```bash
gcloud run domain-mappings describe \
  --domain blog.neopharma.io \
  --region us-central1

# Status should be: Ready
# If Pending, wait 10-15 minutes
```

3. **Verify Cloudflare DNS:**
- Should be "DNS only" (grey cloud), NOT proxied (orange cloud)
- Type: CNAME
- Name: blog
- Target: ghs.googlehosted.com

4. **Force HTTPS in Cloudflare:**
- SSL/TLS → Overview → Full (strict)
- Edge Certificates → Always Use HTTPS: ON

---

### Issue: AI blog generation fails

**Symptoms:** `generate-post.js` throws errors

**Solutions:**

1. **Check API keys:**
```bash
# Verify .env file exists
cat .env

# Test OpenAI key
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

2. **Test Ghost API:**
```bash
# Test admin API
curl https://blog.neopharma.io/ghost/api/admin/site/ \
  -H "Authorization: Ghost YOUR_ADMIN_KEY"
```

3. **Check Node.js version:**
```bash
node --version  # Should be 18+
```

4. **Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: High Cloud Run costs

**Symptoms:** Unexpected charges on Cloud Run

**Solutions:**

1. **Check current instances:**
```bash
gcloud run services describe ghost --region=us-central1 \
  --format="value(spec.template.spec.containers[0].resources)"
```

2. **Verify min instances = 0:**
```bash
gcloud run services update ghost \
  --region=us-central1 \
  --min-instances=0 \
  --max-instances=2
```

3. **Check request logs:**
```bash
# View traffic patterns
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=ghost" \
  --limit=100 \
  --format=json
```

4. **Reduce memory if needed:**
```bash
gcloud run services update ghost \
  --region=us-central1 \
  --memory=256Mi  # Lower from 512Mi if Ghost runs OK
```

---

## 📚 PART 10: Maintenance & Updates

---

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check Cloud Run logs for errors
- [ ] Review Ghost posts for quality
- [ ] Monitor Cloudflare analytics

**Monthly:**
- [ ] Review Google Cloud billing
- [ ] Update Ghost to latest version
- [ ] Backup Ghost content (automatic via Cloud SQL)
- [ ] Check SSL certificate status (auto-renewed)

**Quarterly:**
- [ ] Review and optimize Cloud SQL performance
- [ ] Clean up old Cloud Run revisions
- [ ] Update Node.js dependencies

---

### Update Ghost Version

```bash
# Update Ghost Docker image
cd ~/ghost-cloudrun

# Edit Dockerfile, change version:
FROM ghost:5.xx-alpine  # Update version number

# Rebuild and deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/ghost:latest .

gcloud run deploy ghost \
  --image gcr.io/YOUR_PROJECT_ID/ghost:latest \
  --region us-central1
```

---

### Backup Strategy

**Automatic:**
- Cloud SQL backups: Daily at 3 AM (already configured)
- Retention: 7 days
- Free (included in Cloud SQL cost)

**Manual Ghost content backup:**

```bash
# Export Ghost content
# Login to Ghost admin: https://blog.neopharma.io/ghost
# Settings → Labs → Export your content
# Downloads JSON file with all posts/settings

# Store in Google Cloud Storage (optional)
gsutil mb gs://neopharma-ghost-backups
gsutil cp ghost-export.json gs://neopharma-ghost-backups/backup-$(date +%Y%m%d).json
```

---

### Update Homepage

```bash
# Make changes locally
cd /path/to/NeoPharma_Homepage

# Edit files
# ...

# Test locally
npm run dev

# Push to GitHub
git add .
git commit -m "Update homepage"
git push

# Cloudflare Pages auto-deploys in 2-3 minutes
```

---

## ✅ Deployment Checklist

### Pre-Deployment

- [ ] Domain registered: neopharma.io
- [ ] GitHub account created
- [ ] Google Cloud project created
- [ ] Billing enabled on Google Cloud
- [ ] gcloud CLI installed and authenticated
- [ ] Cloudflare account created

### Part 1: Homepage

- [ ] Repository pushed to GitHub
- [ ] Cloudflare Pages project created
- [ ] Build successful
- [ ] Custom domain added: www.neopharma.io
- [ ] HTTPS working
- [ ] Homepage loads correctly
- [ ] Auto-deployment working

### Part 2: Database

- [ ] Cloud SQL instance created (or using existing)
- [ ] Ghost database created
- [ ] Ghost user created
- [ ] Credentials saved securely
- [ ] Connection tested

### Part 3: Ghost Blog

- [ ] Dockerfile created
- [ ] Config files created
- [ ] Docker image built
- [ ] Cloud Run service deployed
- [ ] Cloud Run URL accessible
- [ ] Ghost admin account created

### Part 4: Custom Domain

- [ ] Domain mapping created
- [ ] DNS records added in Cloudflare
- [ ] HTTPS certificate provisioned
- [ ] blog.neopharma.io accessible
- [ ] Ghost config updated with custom domain

### Part 5: Integration

- [ ] Blog link added to homepage header
- [ ] Blog link added to footer
- [ ] Changes deployed
- [ ] Navigation tested

### Part 6: AIGC Setup

- [ ] AIGC scripts created
- [ ] Ghost API credentials obtained
- [ ] OpenAI API key added
- [ ] Test post generated successfully

### Final Verification

- [ ] Homepage: https://www.neopharma.io ✅
- [ ] Blog: https://blog.neopharma.io ✅
- [ ] robots.txt accessible ✅
- [ ] Organization schema present ✅
- [ ] AI meta tags present ✅
- [ ] Blog posts publishable ✅
- [ ] Mobile responsive ✅
- [ ] Page speed acceptable ✅

---

## 🎉 Success!

Your NeoPharma deployment is complete!

**What you have:**
- ✅ Static homepage on Cloudflare Pages (FREE)
- ✅ Serverless Ghost blog on Cloud Run ($0-3/month)
- ✅ PostgreSQL database on Cloud SQL ($7/month or $0 if shared)
- ✅ Global CDN with unlimited bandwidth
- ✅ Auto-SSL certificates
- ✅ Auto-deployments from GitHub
- ✅ AI-powered blog content generation
- ✅ **Total cost: $0-10/month** (if sharing existing Cloud SQL)

**What's next:**
1. Create more blog content with AIGC
2. Customize Ghost theme
3. Set up email newsletters
4. Add analytics (Google Analytics)
5. Implement SEO best practices
6. Launch and promote!

---

## 📞 Support Resources

**Cloudflare:**
- Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

**Google Cloud:**
- Cloud Run docs: https://cloud.google.com/run/docs
- Cloud SQL docs: https://cloud.google.com/sql/docs
- Support: https://cloud.google.com/support

**Ghost:**
- Docs: https://ghost.org/docs/
- Forum: https://forum.ghost.org/
- API: https://ghost.org/docs/admin-api/

**Issues?**
- Check troubleshooting section (Part 9)
- Review logs: `gcloud run services logs read ghost`
- Cloudflare analytics for traffic issues

---

**Document Version:** 1.0
**Last Updated:** 2025-11-28
**Maintained By:** NeoPharma Team
