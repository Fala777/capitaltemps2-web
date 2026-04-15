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

### Farbschema
- **Hintergrund (Primär)**: `#FFE3E0`
- **Text (Primär)**: `#333333`
- **Text (Sekundär)**: `#666666`
- **Ränder**: `#cccccc`
- **Button Background**: `#e8e8e8`
- **Button Hover**: `#d0d0d0`
- **Input Background**: `#ffffff`
- **Input Border**: `#999999`

### Schriftart
- **Primär**: Candara, Calibri, sans-serif
- **Fallback**: Sans-serif System-Fonts

### Design Prinzipien
- **Responsive**: Mobile-First Ansatz mit Breakpoints bei 480px, 768px, 1024px
- **Layout**: Flexbox-basiert
- **Keine Effekte**: Keine Schatten, keine abgerundeten Ecken (außer im Lofi erkennbar)
- **Platzhalter**: Logo-Platzhalter und SVG-Platzhalter für Icons bereit
- **Farben**: CSS Custom Properties (`--bg-primary`, `--text-primary`, etc.) für flexible Anpassungen

### Komponenten
- **Header**: Sticky Navigation mit Burger-Menu auf Mobil
- **Buttons**: Standard-Styling mit Hover-Effekt (Hintergrund-Wechsel)
- **Formulare**: Vertikal angeordnet mit Labels
- **Listen**: Für About Us verwendet (Team + Services)
- **Grid System**: Flexbox-Grid auf Weather-Seite mit auto-fit für responsive Spalten
- **Filter & Suche**: Select-Elemente mit standardisiertem Styling

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