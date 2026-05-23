# Deal Radar NG Backend

This is the backend folder for the Deal Radar NG frontend.

## Run locally

```powershell
cd C:\Users\HP\deal-radar-ng\backend
npm install
copy .env.example .env
```

Edit `.env`, then run:

```powershell
npx prisma generate
npx prisma migrate dev --name init
npm run seed:admin
npm run dev
```

Backend runs on:

```text
http://localhost:4000
```

Frontend `.env.local` must contain:

```text
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## API

```text
POST /api/auth/signup
POST /api/auth/signin
GET  /api/auth/me
GET  /api/users/me
GET  /api/admin/users
POST /api/clicks
POST /api/newsletter
GET  /api/health
```

## Production

Use PostgreSQL, set a strong `JWT_SECRET`, set `FRONTEND_URL=https://dealradarng.com`, run migrations, then start the compiled server.
