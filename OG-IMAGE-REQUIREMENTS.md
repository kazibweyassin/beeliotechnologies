# OG Image Requirements

## Missing File
The file `/public/og-image.jpg` is referenced in `app/layout.tsx` but does not exist.

## Specifications
- **Dimensions**: 1200px × 630px (recommended aspect ratio 1.91:1)
- **Format**: JPG or PNG
- **File Size**: Under 1MB (optimized for fast loading)
- **Content**: Should include:
  - Beelio Technologies logo
  - Company tagline: "Empowering Africa with Enterprise-Grade IT Solutions"
  - Visual elements representing IT services, technology, or Africa
  - Professional, branded design

## Current Reference
Located in `app/layout.tsx` line 67:
```typescript
images: [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Beelio Technologies",
  },
],
```

## Alternative Solutions

### Option 1: Use Existing Image
You can temporarily use an existing image from the `public` folder:
- `logo.png` (may need resizing)
- `hero_banner_72c5560d49.png` (may need cropping)

### Option 2: Create New Image
Create a branded 1200×630px image with:
- Beelio Technologies branding
- Professional design
- Relevant IT/technology imagery
- Company tagline

### Option 3: Use Online Tool
Use tools like:
- Canva (1200×630px template)
- Figma
- Adobe Express

## Quick Fix
To temporarily fix the missing image warning, you can:
1. Use one of the existing hero images
2. Update the path in `app/layout.tsx` to point to an existing image
3. Or create the proper OG image as specified above

