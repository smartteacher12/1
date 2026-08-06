# Smart Teacher

منصة Smart Teacher (هيكل المشروع الأولي).

هذا المستودع يحتوي على الهيكل الأولي لمشروع Smart Teacher كما طُلب. الأقسام الأساسية:

- frontend/ — واجهة Next.js (TypeScript, Tailwind)
- backend/ — خادم Node.js + Express (TypeScript)
- database/ — تعريف Prisma لقاعدة البيانات PostgreSQL
- docs/ — توثيق المشروع وخطة العمل
- public/ — أصول ثابتة

إعداد سريع (محلي):

1. نسخ المستودع.
2. إنشاء ملف .env في كل من frontend و backend وملء متغيرات البيئة.

Frontend:
  cd frontend
  npm install
  npm run dev

Backend:
  cd backend
  npm install
  npm run dev

قاعدة البيانات (Prisma + PostgreSQL):
  - إعداد متغير DATABASE_URL في database/.env أو backend/.env
  - تشغيل: npx prisma migrate dev --name init

المراحل التالية المجدولة (commits):
- Initial Project Structure (الحالي)
- Authentication System
- Student Module
- Attendance Module
- Reports Module
- WhatsApp Integration
- Parent Portal
- Final UI Improvements

راجع مجلد docs/ لمزيد من التفاصيل.
