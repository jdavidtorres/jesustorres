---
description: "Create React components following project patterns with animations, translations, and styling"
argument-hint: "Component name or description"
agent: "agent"
---

# Create Profile Component

Generate a React component following the project's established patterns and conventions.

## Requirements

Analyze the selected code (if provided) or create a new component that includes:

### Core Patterns
- **React**: Functional component with hooks (useState, useEffect as needed)
- **Styling**: Tailwind CSS with slate/teal color scheme
  - Backgrounds: `bg-slate-900`, `bg-slate-800`, `bg-slate-800/50`
  - Text: `text-white`, `text-slate-300`, `text-slate-400`, `text-slate-500`
  - Accents: `teal-500`, `teal-400`, `teal-600`
  - Borders: `border-slate-700`
- **Animations**: Framer Motion (`motion`, `AnimatePresence`)
  - Use `viewport={{ once: true }}` for scroll animations
  - Use `AnimatePresence` with language key for translation transitions
  - Common animation: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`
- **Icons**: Lucide React icons

### Integrations
- **Language Support**: Use `useLanguage` hook with `t()` for translations
  - Wrap content in `AnimatePresence` with `key={language}` for smooth transitions
  - Reference translation keys like `t('section.key')`
- **Notifications**: Use `useToast` hook when user feedback is needed
- **UI Components**: Import from `./ui/` (Button, Input, Card, etc.)

### Structure
- Export as default
- Use semantic HTML with proper accessibility
- Section structure: `<section>` with padding, container, and max-width
- Consistent spacing: `py-24`, `px-6`, `max-w-*`

## Output Format

Provide complete, ready-to-use component code with:
1. All necessary imports at the top
2. Component implementation
3. Export statement
4. Brief comment explaining the component's purpose

If creating a new component, also suggest:
- Translation keys needed
- Where to place the file in the project structure
- Which props or hooks might be needed
