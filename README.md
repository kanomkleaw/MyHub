# KKP Employee Super App Export

This archive contains a **deployable Next.js source project** generated from the in-app export flow.

## Scope
- Export scope: full
- Description: Exports all primary employee, manager, HR admin, and super admin flows.
- Included routes: /, /profile, /benefits, /claims, /claims/new, /claims/sample-claim, /policies, /policies/code-of-conduct, /training, /training/compliance-foundation, /directory, /requests, /requests/new, /requests/employment-certificate, /assistant, /manager, /team, /team/ploy-ch, /hr-admin/policies, /hr-admin/announcements, /hr-admin/service-categories, /hr-admin/support-queue, /hr-admin/tickets/ticket-1007, /admin/role-mappings, /admin/hr-assignments, /admin/access-control, /admin/audit-logs

## What is included
- Next.js App Router structure
- Shared design system, navigation shell, cards, tables, and chart components
- Sample data and core UI flows aligned to the current app's primary experiences
- Frontend-ready structure for Vercel deployment
- Clear extension points for Microsoft SSO, Azure-hosted APIs, and future backend integration
- Repo-ready extras including .gitignore, .env.example, package-lock.json, and a public folder placeholder

## Run locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for deployment: `npm run build`

## Deploy target
- Frontend: Vercel
- Backend: Azure APIs / Azure App Service / Functions

## Next recommended steps
- Add Microsoft Entra ID SSO using NextAuth or MSAL
- Replace sample data in `src/lib/data.ts` with real API services
- Connect secure backend endpoints hosted on Azure
- Add route protection and role-based authorization middleware
