# Architecture and modules

هذا الملف يصف البنية العامة للمشروع ومكونات النظام.

- Frontend: Next.js (App Router) + Tailwind + TypeScript
- Backend: Express + TypeScript + Prisma
- Database: PostgreSQL مع ORM Prisma
- Auth: JWT + Bcrypt
- WhatsApp Integration: whatsapp-web.js (سيتم إضافته كجزء لاحق)

تخطيط الطبقات:
- API (backend/src/api)
- Services (backend/src/services)
- Controllers (backend/src/controllers)
- Database/ORM (database/)
- Frontend components (frontend/components)
- Frontend pages (frontend/app)

خطوات التطوير التالية (سجل commit مقترح):
1. Authentication System
2. Teacher onboarding flow
3. Student Module (CRUD + search)
4. Groups and schedule
5. Attendance + WhatsApp integration
6. Reports & Exports
7. Parent Portal
8. UI polish & i18n
