# 🔌 Wire Azure Keys — Signal Decay Reader App
## Complete Walkthrough (Every Click, Every Command)

**Time:** ~25 minutes  
**Cost:** ~$2-5/month (most services free tier)  
**Date:** August 26, 2026

---

## 🆕 Step 1: Create Resource Group (~1 min)

1. Go to **[portal.azure.com](https://portal.azure.com)**
2. Search bar → type **"Resource groups"** → click it
3. Click **+ Create**
4. Fill in:
   - **Subscription:** Your subscription
   - **Resource group name:** `signal-decay`
   - **Region:** East US
5. Click **Review + Create** → **Create**

> ✅ Everything for Signal Decay goes in this folder.

---

## 🧠 Step 2: Create Azure OpenAI Service (~5 min)

1. Search bar → **"Azure OpenAI"** → click it
2. Click **+ Create**
3. Fill in:
   - **Resource group:** `signal-decay`
   - **Region:** East US (or South Central US)
   - **Name:** `signal-decay-ai`
   - **Pricing tier:** Standard S0
4. Click **Review + Create** → **Create**
5. Wait ~1 minute → click **Go to resource**
6. Left sidebar → **Keys and Endpoint**
7. Copy:
   - **KEY 1:** `__________________________`
   - **Endpoint:** `https://signal-decay-ai.openai.azure.com/`

### Deploy the Model

1. Left sidebar → **Model deployments** → **Manage Deployments** (opens Azure AI Studio)
2. Click **+ Create new deployment**
3. Fill in:
   - **Model:** `gpt-4o-mini` (or `gpt-4o` for higher quality)
   - **Deployment name:** `gpt-4o-mini`
   - **Deployment type:** Global Standard
4. Click **Create**

---

## 🗣️ Step 3: Create Speech Service (~3 min)

1. Search bar → **"Speech"** → click **Speech** under Services
2. Click **+ Create**
3. Fill in:
   - **Resource group:** `signal-decay`
   - **Region:** East US
   - **Name:** `signal-decay-speech`
   - **Pricing tier:** Free F0 (5 hours/month)
4. Click **Review + Create** → **Create**
5. Go to resource → **Keys and Endpoint**
6. Copy:
   - **KEY 1:** `__________________________`
   - **Region:** `eastus`

---

## 😮 Step 4: Create Face API (~3 min)

1. Search bar → **"Face"** → click it
2. Click **+ Create**
3. Fill in:
   - **Resource group:** `signal-decay`
   - **Region:** East US
   - **Name:** `signal-decay-face`
   - **Pricing tier:** Free F0 (30,000 transactions/month)
4. Click **Review + Create** → **Create**
5. Go to resource → **Keys and Endpoint**
6. Copy:
   - **KEY 1:** `__________________________`
   - **Endpoint:** `https://signal-decay-face.cognitiveservices.azure.com/`

---

## 🗄️ Step 5: Create Cosmos DB (~3 min)

1. Search bar → **"Azure Cosmos DB"** → click it
2. Click **+ Create** → select **Azure Cosmos DB for NoSQL**
3. Fill in:
   - **Resource group:** `signal-decay`
   - **Account Name:** `signal-decay-db`
   - **Region:** East US
   - **Capacity mode:** Serverless (pay only for what you use)
4. Click **Review + Create** → **Create**
5. Wait ~2 minutes → Go to resource
6. Left sidebar → **Keys**
7. Copy:
   - **URI:** `https://signal-decay-db.documents.azure.com:443/`
   - **PRIMARY KEY:** `__________________________`

---

## ⚡ Step 6: Create Function App (~3 min)

1. Search bar → **"Function App"** → click it
2. Click **+ Create**
3. Fill in:
   - **Resource group:** `signal-decay`
   - **Function App name:** `signal-decay-api`
   - **Runtime stack:** Node.js
   - **Version:** 20 LTS
   - **Region:** East US
   - **Operating System:** Linux
   - **Plan type:** Consumption (Serverless) — **FREE**
4. Click **Review + Create** → **Create**
5. Wait ~1 minute

---

## ⚙️ Step 7: Set Environment Variables (~5 min)

1. Go to your Function App (`signal-decay-api`)
2. Left sidebar → **Configuration** (under Settings)
3. Click **+ New application setting** for EACH:

| Name | Value |
|------|-------|
| `AZURE_OPENAI_ENDPOINT` | `https://signal-decay-ai.openai.azure.com/` |
| `AZURE_OPENAI_KEY` | (your OpenAI KEY 1 from Step 2) |
| `AZURE_OPENAI_DEPLOYMENT` | `gpt-4o-mini` |
| `AZURE_SPEECH_KEY` | (your Speech KEY 1 from Step 3) |
| `AZURE_SPEECH_REGION` | `eastus` |
| `AZURE_FACE_ENDPOINT` | `https://signal-decay-face.cognitiveservices.azure.com/` |
| `AZURE_FACE_KEY` | (your Face KEY 1 from Step 4) |
| `COSMOS_CONNECTION` | (your Cosmos PRIMARY CONNECTION STRING from Step 5) |

4. Click **Save** → **Continue** to confirm restart

---

## 📦 Step 8: Deploy the Functions (~5 min)

Open **PowerShell** and run:

```powershell
# Navigate to the functions folder
cd "C:\Users\ufostat\Documents\spanish app\transfer folder 2\research\interface_enhancement\build\research\story\reader_app\azure-functions"

# Install dependencies
npm install

# Deploy
func azure functionapp publish signal-decay-api
```

**Expected:** "Deployment successful" with function URLs listed:
- `https://signal-decay-api.azurewebsites.net/api/chat`
- `https://signal-decay-api.azurewebsites.net/api/scan-theory`

---

## ✏️ Step 9: Update the Reader App Config (~2 min)

Open this file in any text editor:
```
C:\Users\ufostat\Documents\spanish app\transfer folder 2\research\interface_enhancement\build\research\story\reader_app\index.html
```

Find this section (in the `<script>` tag):

```javascript
const AZURE_CONFIG = {
  functionAppUrl: '',  // ← EMPTY = demo mode
  speechKey: '',
  speechRegion: '',
  faceEndpoint: '',
  faceKey: ''
};
```

Replace with your real values:

```javascript
const AZURE_CONFIG = {
  functionAppUrl: 'https://signal-decay-api.azurewebsites.net',
  speechKey: '(paste your Speech KEY 1)',
  speechRegion: 'eastus',
  faceEndpoint: 'https://signal-decay-face.cognitiveservices.azure.com/',
  faceKey: '(paste your Face KEY 1)'
};
```

Save. Done — the app now calls real Azure AI.

---

## 🌐 Step 10: Deploy the Reader App Online (~3 min)

**Option A: Azure Static Web Apps (recommended)**

```powershell
cd "C:\Users\ufostat\Documents\spanish app\transfer folder 2\research\interface_enhancement\build\research\story\reader_app"

az staticwebapp create --name signal-decay-reader --resource-group signal-decay --source . --location "eastus2"
```

**Option B: Blob Storage (simplest)**

First create a storage account:
```powershell
az storage account create --name signaldecayweb --location eastus --resource-group signal-decay --sku Standard_LRS
az storage blob service-properties update --account-name signaldecayweb --static-website --index-document index.html
az storage blob upload-batch --account-name signaldecayweb --destination '$web' --source . --overwrite
```

Your app will be live at: `https://signaldecayweb.z13.web.core.windows.net/`

---

## 🧪 Step 11: Test Everything

| # | Test | How | Expected Result |
|---|------|-----|-----------------|
| 1 | **Character Chat** | AI Features → Talk to Characters → Oren → "What do you hear?" | Real GPT response in Oren's personality |
| 2 | **Frequency Scanner** | AI Features → Scanner → "The moon was built by the previous cycle" | Match % + lore-aware verdict |
| 3 | **TTS Narration** | Toggle AI Narration ON → open any story | Story read aloud with Azure voices |
| 4 | **Emotion Mode** | AI Features → Emotion Mode → allow camera | Emotion dot + soundtrack adapts to your face |
| 5 | **Voice Input** | In character chat → tap 🎤 → speak | Your speech appears as text |

---

## 💰 Monthly Cost Breakdown

| Service | What It Powers | Cost |
|---------|---------------|------|
| Azure OpenAI | Character Chat + Frequency Scanner | ~$2-5 |
| Azure Speech | TTS narration + voice input | **FREE** (5 hrs/month) |
| Face API | Emotion detection | **FREE** (30K/month) |
| Functions | API backend | **FREE** (1M calls/month) |
| Cosmos DB | User data / cross-device sync | **FREE** (serverless) |
| Static Web Apps | Hosting | **FREE** |
| **TOTAL** | | **~$2-5/month** |

---

## 🔑 Quick Reference: All Signal Decay Resources

| Resource | Name | Key Location |
|----------|------|-------------|
| Resource Group | `signal-decay` | — |
| OpenAI | `signal-decay-ai` | Portal → Keys and Endpoint |
| Speech | `signal-decay-speech` | Portal → Keys and Endpoint |
| Face API | `signal-decay-face` | Portal → Keys and Endpoint |
| Cosmos DB | `signal-decay-db` | Portal → Keys |
| Function App | `signal-decay-api` | Portal → Overview → URL |
| Static Web App | `signal-decay-reader` | Portal → Overview → URL |
| Storage (alt) | `signaldecayweb` | Portal → Static website → Endpoint |

---

## 📁 File Locations

| What | Path |
|------|------|
| Reader App (HTML) | `...\story\reader_app\index.html` |
| Azure Functions | `...\story\reader_app\azure-functions\` |
| Chat function | `...\azure-functions\chat\index.js` |
| Scanner function | `...\azure-functions\scan-theory\index.js` |
| Config file | `...\azure-functions\local.settings.json` |

---

*Once `AZURE_CONFIG.functionAppUrl` is set, demo mode auto-disables. All AI calls route through YOUR Azure backend. Character responses become real GPT trained on 2.3 MB of Signal Decay lore.*
