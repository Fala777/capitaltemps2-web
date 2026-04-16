# Capital Weather - Wetterportal

## Projektbeschreibung

Die Website zeigt Daten zum aktuellen Wetter der Hauptstädte dieser Welt an. Es werden Informationen wie die Temperatur, die Windgeschwindigkeit und die Luftfeuchtigkeit angezeigt. Die Daten sind entweder für einzelne Städte erhältlich, ess kann gefiltert werden und es können auch alle Städte auf einmal angezeigt werden.

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
| **Deep Black** | `#1A1A1A` | Primärer Hintergrund, Header |
| **Pure White** | `#FFFFFF` | Haupt-Text, Hervorhebungen |
| **Dark Gray** | `#2D2D2D` | Sekundärer Hintergrund, Dropdowns |
| **Light Gray** | `#E0E0E0` | Borders, Toggle-Schalter inaktiv |
| **Purple** | `#8C86AA` | Buttons, Toggle-Schalter aktiv |
| **Purple Light** | `#A89BCF` | Hover-Effekte, Sekundär-Buttons |
| **Logo Yellow** | `#FFCA3A` | Highlights, Active-Underlines, Links |

#### CSS-Variablen (in styles.css)

```css
:root {

    --color-black: #1A1A1A;    
    --color-white: #FFFFFF;      
    --color-dark-gray: #2D2D2D;  
    --color-light-gray: #E0E0E0;   
    --color-purple: #8C86AA;       
    --color-purple-light: #A89BCF;   
    --color-yellow: #FFCA3A;        
    
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

### Schriftart
- **Primär**: Candara, Calibri, sans-serif
- **Fallback**: Sans-serif System-Fonts

### Design Prinzipien
- **Responsive**: Mobile-First Ansatz mit Breakpoints bei 480px, 768px, 1024px
- **Layout**: Flexbox-basiert


## Responsive Breakpoints

| Breakpoint | Gerättyp | Änderungen |
|------------|----------|-----------|
| > 1024px | Desktop | Volle Breite, 3-spaltig |
| 768px - 1024px | Tablet | 2-spaltig, angepasste Abstände |
| 480px - 768px | Mobile (Groß) | 1-spaltig, Burger-Menu , 100% Breite |
| < 480px | Mobile (Klein) | Reduzierte Schriftgrößen, minimale Abstände |
