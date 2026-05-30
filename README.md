# Street Dudes — Swedish Restaurant Menu Website

A premium, multi-lingual, type-safe, and fully tested menu display website for the **Street Dudes** restaurant located in Borås, Sweden. Built with Next.js 14 App Router and styled according to the precise black-and-gold visual branding guidelines.

---

## 1. Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & HSL Brand Tokens
- **i18n**: next-intl (Swedish `sv` default / English `en` secondary)
- **Testing**: Jest (Unit) + Playwright (E2E)

---

## 2. Getting Started

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 3. Scripts

- **`npm run dev`**: Boots local Next.js development server.
- **`npm run build`**: Compiles highly optimized production bundle.
- **`npm run lint`**: Checks for code quality and ESLint warnings.
- **`npm run format`**: Automatically formats codebase with Prettier.
- **`npm run test`**: Runs Jest unit tests mirroring source directories.
- **`npm run test:e2e`**: Runs Playwright end-to-end user-flow verification specs.

---

## 4. QUICK REFERENCE CARD

| Need to... | Edit this file |
| :--- | :--- |
| Change a price or add a menu item | `src/data/menu.ts` |
| Change Swedish UI text | `src/i18n/sv.json` |
| Change English UI text | `src/i18n/en.json` |
| Change brand colours or fonts | `src/styles/brand.ts` |
| Change opening hours | `src/i18n/sv.json` + `en.json` |
| Add a new page | `src/app/[locale]/new-page/` |
| Add a Phase 2 API endpoint | `src/app/api/your-endpoint/` |
| Change the map location | `src/components/map/RestaurantMap.tsx` |

---

## 5. Development Guidelines
All rules are documented under [AGENTS.md](file:///home/sharafatnoa/My%20Projects/Street%20Dudes%20Website/AGENTS.md). Refer to it for naming conventions, internationalization keys, styling rules, and code quality policies.
