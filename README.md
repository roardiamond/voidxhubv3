# VoidXHub v3

**Secure Premium Tools Hub** — rebuilt from scratch with modern stack and high security focus.

## Goals

- Merge best of v1 + v2
- Strong authentication & authorization
- Clean device / tool selection UI (enhanced from v1)
- Credit system + tournament support
- Signed download links
- Proper admin separation
- TypeScript end-to-end

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Auth**: Better Auth or Lucia (secure sessions)
- **Database**: PostgreSQL (Neon / Supabase recommended)
- **ORM**: Drizzle ORM
- **Payments**: Razorpay / Cashfree
- **File Delivery**: Signed URLs (Cloudflare R2 / S3)

## Planned Structure

```
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── tools/
│   ├── tournaments/
│   └── admin/
├── components/
├── lib/
│   ├── auth/
│   ├── db/
│   └── security/
└── types/
```

## Security Priorities

1. No hardcoded secrets (all in env)
2. Rate limiting on login, key generation, downloads
3. Role-based access control (User / Moderator / Admin)
4. Short-lived signed download links
5. Full audit logging for admin actions
6. Zod validation on every input
7. Secure cookies + HTTPS only
8. CORS locked to own domain

## Device Selection Feature

v3 includes an improved **Device Selection** UI (inspired by v1):
- Users can select target device type / model before accessing certain tools
- This is metadata + UI only
- Actual tool delivery stays behind authentication + signed links

## Status

🚧 Scaffolding started. Core files coming next.

---

Maintained by YASHXCHI / VoidXHub Team
