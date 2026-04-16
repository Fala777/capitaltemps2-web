# Capital Weather - Wetterportal

## Projektbeschreibung

Die Website zeigt Daten zum aktuellen Wetter der Hauptstädte dieser Welt an. Es werden Informationen wie die Temperatur, die Windgeschwindigkeit und die Luftfeuchtigkeit angezeigt. Die Daten sind entweder für einzelne Städte erhältlich oder es können mit Filtern z.B. die 10 größten Städte angezeigt werden.

## Projektstruktur

```
src/
├── index.html              # Startseite mit Hero-Bereich (Fun Fact)
├── pages/
│   ├── capitalWeather.html # Weather-Seite mit Filtern und Suche
│   ├── aboutUS.html        # About Us mit Team & Services Listen
│   ├── login.html          # Login Formular
│   └── lostPW.html         # Passwort vergessen Formular
├── styles.css              # Globale Stylesheet mit Media Queries
└── script.js               # Burger-Menu Toggle Funktionalität
```

## Styling Guidelines

### Farbschema - Penguin-Inspired Palette with Purple & Yellow Accents

Die Website verwendet ein modernes, dunkles Farbschema basierend auf klassischen Pinguin-Farben (Schwarz, Weiß, Grau) mit eleganten Violett-Buttons und Logo-Gelb für Highlights.

#### Hauptfarbpalette (8 Farben)

| Farbe | Hex-Code | Beschreibung | Verwendung |
|-------|----------|-------------|-----------|
| **Deep Black** | `#1A1A1A` | Dunkelste Farbe, Pinguin-Basis | Primärer Hintergrund, Header |
| **Pure White** | `#FFFFFF` | Reine Weiß, maximaler Kontrast | Haupt-Text, Hervorhebungen |
| **Dark Gray** | `#2D2D2D` | Dunkles Grau, Pinguin-Bauch-Natur | Sekundärer Hintergrund, Dropdowns |
| **Light Gray** | `#E0E0E0` | Helles Grau, Ränder & Akzente | Borders, Toggle-Schalter inaktiv |
| **Purple** | `#8C86AA` | Elegantes Violett, Button-Primär | Buttons, Toggle-Schalter aktiv |
| **Purple Light** | `#A89BCF` | Helles Violett, Button-Hover | Hover-Effekte, Sekundär-Buttons |
| **Logo Yellow** | `#FFCA3A` | Warmes Gelb vom Logo | Highlights, Active-Underlines, Links |

#### CSS-Variablen (in styles.css)

```css
:root {
    /* Penguin-Inspired Color Palette with Purple & Yellow Accents */
    --color-black: #1A1A1A;          /* Deep black - primary background */
    --color-white: #FFFFFF;          /* Pure white - text */
    --color-dark-gray: #2D2D2D;      /* Dark gray - secondary background */
    --color-light-gray: #E0E0E0;     /* Light gray - borders, accents */
    --color-purple: #8C86AA;         /* Purple - buttons, primary accents */
    --color-purple-light: #A89BCF;   /* Light purple - hover states */
    --color-yellow: #FFCA3A;         /* Logo yellow - highlights, underlines */
    
    --bg-primary: #1A1A1A;
    --text-primary: #FFFFFF;
    --text-secondary: #B0B0B0;
    --border-color: #404040;
    --button-bg: #8C86AA;
    --button-hover: #A89BCF;
    --input-bg: #2D2D2D;
    --input-border: #404040;
}
```

#### Kontrast & Accessibility

- **Text auf dunkel**: Weiß (`#FFFFFF`) für maximale Lesbarkeit auf schwarzem Grund
- **Sekundär-Text**: Mittleres Grau (`#B0B0B0`) für subtile Informationen
- **Buttons**: Violett (`#8C86AA`) mit Hover-Effekt zu Light Purple (`#A89BCF`)
- **Highlights & Links**: Logo-Gelb (`#FFCA3A`) für Navigation und wichtige Unterstriche
- **Ränder**: Dunkles Grau (`#404040`) für subtile Struktur

### Schriftart
- **Primär**: Candara, Calibri, sans-serif
- **Fallback**: Sans-serif System-Fonts

### Design Prinzipien
- **Responsive**: Mobile-First Ansatz mit Breakpoints bei 480px, 768px, 1024px
- **Layout**: Flexbox-basiert
- **Dark Mode**: Professionelles, modernes Dunkles Design inspiriert von Pinguin-Ästhetik
- **Konsistenz**: CSS Custom Properties für einheitliche Farbverwaltung
- **Kontrast**: Hoher Kontrast für optimale Lesbarkeit und Accessibility

### Komponenten
- **Header**: Sticky Navigation mit schwarzem Hintergrund und Gelb-Highlights
- **Navigation Links**: Weiß-Text mit gelbem Underline für aktive/hover-States
- **Buttons**: Violett (`#8C86AA`) mit Light Purple-Hover (`#A89BCF`)
- **Formulare**: Dunkle Input-Felder mit hellen Eingaben
- **Dropdowns**: Dunkelgraue Hintergründe mit mittleren Grau-Rändern
- **Toggle-Schalter**: Grau inaktiv, Violett aktiv mit hellen Kreisen
- **Highlights**: Goldgelb (`#FFCA3A`) vom Logo für Links, Underlines und Betonungen

## Responsive Breakpoints

| Breakpoint | Gerättyp | Änderungen |
|------------|----------|-----------|
| > 1024px | Desktop | Volle Breite, 3-spaltige Weather-Cards |
| 768px - 1024px | Tablet | 2-spaltige Weather-Cards, angepasste Abstände |
| 480px - 768px | Mobile (Groß) | 1-spaltige Layout, Burger-Menu aktiv, 100% Breite |
| < 480px | Mobile (Klein) | Reduzierte Schriftgrößen, minimale Abstände |

## Seiten-Übersicht

### Startseite (index.html)
- Hero-Sektion mit großem Titel "Capital Weather"
- Fun Fact Untertitel (zentriert)
- Keine Suchfunktion
- Einfaches, fokussiertes Layout

### Weather-Seite (capitalWeather.html)
- Suchleiste + 3 Filter (Temperatur, Bedingung, Region)
- Flexbox-Grid mit Weather-Cards
- Jede Card mit SVG-Platzhalter für Weather-Icon
- Tempeartur, Bedingung, Luftfeuchtigkeit, Wind

### Login-Seite (login.html)
- Zentriertes Formular
- Email und Passwort Felder
- Link zu "Passwort vergessen"

### Passwort vergessen (lostPW.html)
- Zentriertes Formular
- Email-Input mit Call-to-Action Button
- Link zurück zur Anmeldung

### About Us (aboutUS.html)
- Zentriertes Layout
- Team-Liste (mit Namen und Positionen)
- Services/Features Liste
- Introtext

## Technologie-Stack

- **HTML5**: Semantische Struktur
- **CSS3**: Responsive Design mit Flexbox
- **JavaScript**: Vanilla JS für Burger-Menu Toggle
- **Keine externen Abhängigkeiten**: Framework-unabhängig