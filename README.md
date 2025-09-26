# Smart Engine Backend

Minimal setup guide to install dependencies, update environment, and run the server.

## Prerequisites
- Node.js (v16+)
- MongoDB running locally or a MongoDB connection string

## Setup

1. Install dependencies
```bash
npm install
```

2. Create or update .env
```env
PORT=5000
NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/smart-engine
DB_NAME=smart-engine

```

3. Start MongoDB
- If installed as a Windows service:
```bash
net start MongoDB
```
- Or start manually in another terminal:
```bash
mongod
```

4. Run the server
```bash
node server.js
```

## Health Check
Open:
```
http://localhost:5000/health
```

Expected JSON:
```json
{
  "success": true,
  "message": "Smart Engine API is running!",
  "timestamp": "...",
  "environment": "development"
}
```
