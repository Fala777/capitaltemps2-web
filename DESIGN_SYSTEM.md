# Capital Weather - Design System & Sizing Guide

## Typography Sizing

### Schriftgrößen (Desktopversion)

| Element | Größe | Zeilenhöhe | Gewicht | Verwendung |
|---------|-------|-----------|---------|-----------|
| `h1` (Hauptüberschriften) | 3.5rem (56px) | 1.2 | Normal | Seitentitel, Hero-Heading |
| `h2` (Unterüberschriften) | 2.25rem (36px) | 1.3 | Normal | Sectionstitel |
| `h3` (Untertitel) | 1.5rem (24px) | 1.4 | Normal | Card-Titel, Subsections |
| Body/Paragraph | 1rem (16px) | 1.6 | Normal | Standard Text, Links |
| Small Text (Label, Footer) | 0.875rem (14px) | 1.5 | Normal | Formularlabels, Footer |
| Tiny Text (Copyright) | 0.75rem (12px) | 1.4 | Normal | Copyright, kleine Hinweise |
| Fact Subtitle | 1.25rem (20px) | 1.8 | Italic | Hero-Untertitel (Startseite) |

### Responsive Schriftgrößen

#### Tablets (768px - 1024px)
- `h1`: 2.5rem (40px)
- `h2`: 1.75rem (28px)
- `h3`: 1.25rem (20px)
- Body: 0.95rem (15.2px)

#### Große Phones (480px - 768px)
- `h1`: 2rem (32px)
- `h2`: 1.5rem (24px)
- `h3`: 1.125rem (18px)
- Body: 0.95rem (15.2px)

#### Kleine Phones (< 480px)
- `h1`: 1.5rem (24px)
- `h2`: 1.25rem (20px)
- `h3`: 1rem (16px)
- Body: 0.9rem (14.4px)

---

## Spacing & Abstände

### Margin & Padding Base Unit: 0.5rem (8px)

| Klasse | Wert | Verwendung |
|--------|------|-----------|
| `.mt-1` / `.mb-1` | 0.5rem | Kleine Abstände zwischen Elementen |
| `.mt-2` / `.mb-2` | 1rem | Standard Abstände |
| `.mt-3` / `.mb-3` | 1.5rem | Größere Abstände zwischen Sections |
| `.mt-4` / `.mb-4` | 2rem | Sehr große Abstände |

### Standard Spacing

| Element | Margin Bottom | Padding |
|---------|--------------|---------|
| `h1` | 1.5rem | - |
| `h2` | 1rem | - |
| `h3` | 0.75rem | - |
| `p` | 1rem | - |
| `ul`, `ol` | 1.5rem | left: 1.5rem |
| `li` | 0.75rem | - |
| Section | 2rem (bottom) | - |

### Hero Section Spacing (Startseite)
- Top Padding: 2rem (Desktop), 1.5rem (Tablet), 1rem (Mobile)
- Bottom Padding: 2rem (Desktop), 1.5rem (Tablet), 1rem (Mobile)
- Heading Margin Bottom: 1.5rem
- Subtitle Margin Top: 1rem

---

## Box & Component Sizing

### Button Sizing

| State | Padding | Font-Size | Min-Width |
|-------|---------|-----------|-----------|
| Desktop | 0.75rem 1.5rem | 1rem | auto |
| Tablet (768px) | 0.625rem 1.25rem | 0.95rem | auto |
| Mobile (480px) | 0.625rem 1rem | 0.9rem | 100% |

### Input & Form Elements

| Element | Padding | Min-Height | Border |
|---------|---------|-----------|--------|
| Text Input | 0.75rem | 2.5rem (mit Padding) | 1px solid #999 |
| Textarea | 0.75rem | 150px | 1px solid #999 |
| Select | 0.75rem | 2.5rem (mit Padding) | 1px solid #999 |
| Label | - | - | Font-weight: bold |

### Form Group Spacing
- Gap zwischen Label und Input: 0.5rem
- Gap zwischen Form Groups: 1.5rem
- Gap zwischen Button und Form: 1.5rem

### Centered Form (Login, Reset PW)
- Max-Width: 450px
- Padding: auto mit flex centering
- Mobile: 100% Breite

### Weather Card Sizing

| Screen Size | Width | Height | Padding | Border |
|-------------|-------|--------|---------|--------|
| Desktop (3-col) | ~33.333% - 1.5rem Lücke | auto | 1.5rem | 1px |
| Tablet (2-col) | ~50% - 1rem Lücke | auto | 1.25rem | 1px |
| Mobile (1-col) | 100% | auto | 1rem | 1px |

### Weather Icon Placeholder
- Desktop: 120px height
- Mobile: 100px height
- Width: 100% (responsive)
- Border: 1px solid #cccccc
- Background: #FFE3E0

### Search & Filter Wrapper (Weather Page)
- Desktop Layout: Horizontal Flex (gap: 2rem)
- Tablet (768px): Flex Wrap (gap: 1.5rem)
- Mobile (480px): Flex Column (gap: 1rem)

#### Filter Group
- Min-Width (Desktop): 150px
- Width (Mobile): 100%
- Label Margin-Bottom: 0.5rem

---

## Grid & Layout

### Flexbox Grid System

#### Weather Grid
- Display: flex
- Flex-wrap: wrap
- Gap: 1.5rem (Desktop), 1rem (Tablet), 0.75rem (Mobile)
- Cards: `flex: 1 1 calc(33.333% - gap)` (Desktop)
- Min-width per Card: 250px

#### Centered Page Layout
- Display: flex
- Justify-content: center
- Align-items: center
- Text-align: center
- Min-height: calc(100vh - 150px)

#### Navigation
- Display: flex (row bei Desktop, column bei Mobile)
- Gap: 2rem (Desktop), 1rem (Mobile)
- Align-items: center

---

## Header & Navigation

### Header
- Height: auto (flex-based)
- Padding: 1rem 1.5rem (Desktop), 0.75rem 1rem (Tablet), 0.5rem 0.75rem (Mobile)
- Border-Bottom: 1px solid #cccccc
- Background: #FFE3E0
- Display: flex
- Justify-content: space-between
- Align-items: center

### Logo Placeholder
- Desktop: 100px × 50px
- Mobile: 70px × 40px
- Border: 1px solid #cccccc
- Display: flex (centered)
- Font-size: 0.75rem (small)

### Burger Menu
- Visible: only on screens <= 768px
- Each line: 25px width × 2px height
- Gap between lines: 0.4rem
- Animation: rotate on "active" state

### Navigation Links
- Text Decoration: none
- Color: #333333
- Font-size: 1rem
- Transition: color 0.3s ease
- Hover: color: #666666

---

## Footer

### Footer Sizing
- Padding: 1.5rem (Desktop), 1rem (Tablet), 1rem (Mobile)
- Font-size: 0.875rem
- Border-Top: 1px solid #cccccc
- Background: #FFE3E0
- Text-align: center
- Color: #666666

---

## Color & Shadows

### Color Palette
```css
:root {
    --bg-primary: #FFE3E0;       /* Hintergrund */
    --text-primary: #333333;     /* Haupttext */
    --text-secondary: #666666;   /* Sekundär Text */
    --border-color: #cccccc;     /* Ränder */
    --button-bg: #e8e8e8;        /* Button Background */
    --button-hover: #d0d0d0;     /* Button Hover */
    --input-bg: #ffffff;         /* Input Background */
    --input-border: #999999;     /* Input Border */
}
```

### Shadow Policy
- **Keine Schatten** (gemäß Lofi Design)
- Nur Borders für Abgrenzung

### Borders
- Standard Border: `1px solid #cccccc`
- Input Border: `1px solid #999999`
- Border-Radius: **0** (keine abgerundeten Ecken)

---

## Responsive Breakpoints & Umbruchpunkte

```css
/* Desktop (> 1024px) */
/* Default styles */

/* Tablet & Large Phone (768px - 1024px) */
@media (max-width: 1024px)

/* Large Phone & Tablet (480px - 768px) */
@media (max-width: 768px)

/* Mobile (< 480px) */
@media (max-width: 480px)
```

---

## Best Practices beim Implementieren

1. **Verwende CSS Custom Properties** für Farben
2. **Mobile-First Ansatz** in CSS (Mobile Styles zuerst, dann Media Queries hinzufügen)
3. **Flexbox statt Grid** für einfacheres Responsive Design
4. **Gap statt Margin** für Abstände zwischen Flex-Kindern
5. **Min-width für Flex-Items** um unnötige Schrumpfung zu verhindern
6. **14px Fonts minimum** auf Mobil geräten (außer sehr kleine Labels)
7. **Touch-Targets mindestens 44× 44px** (z.B. für Buttons und Links)
8. **Keine absoluten Breiten** - immer % oder rem nutzen
9. **Titles & Headlines** sollten bei kleineren Screens deutlich kleiner werden
10. **Bilder/SVGs** immer responsive mit `width: 100%` und `height: auto` oder aspect-ratio

---

## Typische Komponenten Sizing

### Card (z.B. Weather Card)
- Desktop Width: ~33% - Gap
- Mobile Width: 100%
- Padding: 1.5rem (Desktop), 1.25rem (Tablet), 1rem (Mobile)
- Min-height: auto (content-driven)

### Form Container
- Max-width: 450-500px
- Width: 100% (mit Padding)
- Responsive auf Mobile: 100vw minus Padding

### Section Container
- Max-width: 1200px (optional)
- Padding: 0 1.5rem (Desktop), 0 1rem (Tablet), 0 0.75rem (Mobile)

### Page Min-Height
- `min-height: calc(100vh - (header + footer))`
- Wichtig für Seiten mit wenig Content
