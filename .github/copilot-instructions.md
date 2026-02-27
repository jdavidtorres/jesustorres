# Project Guidelines

## Build and Test

### Before Completing Tasks
**CRITICAL**: Always run a successful build before marking any task as completed.

```powershell
# Run build command to verify changes
npm run build
# or
yarn build
```

Ensure:
- No build errors or warnings
- All imports resolve correctly
- TypeScript/ESLint checks pass
- Build output is generated successfully

If the build fails, fix issues before marking the task complete.

### Development Workflow
```powershell
# Start development server
npm run dev

# Run tests (if configured)
npm test
```

## Code Style

### React Components
- Use functional components with hooks
- Export as default for main component
- Use TypeScript when available
- Follow patterns in existing components (see `code-recuperation.txt` for examples)

### Styling
- **Tailwind CSS** utility classes
- Color scheme:
  - Backgrounds: `bg-slate-900`, `bg-slate-800`, `bg-slate-800/50`
  - Text: `text-white`, `text-slate-300`, `text-slate-400`
  - Accents: `teal-500`, `teal-400`, `teal-600`
  - Borders: `border-slate-700`

### Animations
- Use **Framer Motion** for all animations
- Standard pattern: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`
- Use `viewport={{ once: true }}` for scroll animations
- Wrap translated content in `AnimatePresence` with `key={language}`

### Internationalization
- Use `useLanguage` hook for all user-facing text
- Call `t('section.key')` for translations
- Never hardcode user-visible strings
- Wrap content with language transitions in `AnimatePresence`

## Architecture

### Key Dependencies
- **React Router** for navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **Radix UI** for accessible components
- **Tailwind CSS** for styling

### Project Structure
- `/components/` - Reusable UI components
- `/components/ui/` - Base UI primitives (shadcn/ui style)
- `/pages/` - Page-level components
- `/contexts/` - React contexts (e.g., LanguageContext)

## Conventions

- Always include proper imports at the top
- Use semantic HTML with accessibility in mind
- Maintain consistent spacing: `py-24`, `px-6`, `max-w-*`
- Use toast notifications (`useToast`) for user feedback
