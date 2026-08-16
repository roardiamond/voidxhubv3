# VoidXHub v3

**Secure Premium Tools Hub** — rebuilt from v1 + v2 with modern stack and high security.

**Repo:** https://github.com/roardiamond/voidxhubv3

## What’s included so far

- Modern dark neon UI (same vibe as old sites)
- **Device Selection** page (enhanced from v1) using real images from old repo
- Games catalog (Free Fire, BGMI, COD, Valorant, Apex) with old images
- Dashboard (credits card style from old dashboard)
- Tournaments page (using old tournament thumbnails)
- Full Drizzle database schema (users, tools, licenses, tournaments, audit logs)
- Security policy + `.env.example`
- Next.js 15 + TypeScript + Tailwind

## Images

All device & game images are currently loaded from the old repo  
`https://raw.githubusercontent.com/roardiamond/VOIDXHUB/main/...`  
so we reuse the existing assets without re-uploading.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Drizzle ORM + PostgreSQL (planned)
- Better Auth / secure sessions (next)

## How to run locally

```bash
git clone https://github.com/roardiamond/voidxhubv3.git
cd voidxhubv3
npm install
npm run dev
```

Open http://localhost:3000

## Next planned steps

1. Real authentication (login / register)
2. Connect PostgreSQL + migrations
3. Credit purchase flow
4. Signed tool download links
5. Admin panel (separate)
6. Proper device → tool matching logic

---

Maintained by YASHXCHI / VoidXHub Team
