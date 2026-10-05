# Active Sefton Slip Printer

A lightweight, high-performance receipt printing web application built for Active Sefton facility reception desks. It enables staff to quickly select, customize, and print 80mm thermal receipt slips for changing room access codes, pool timetables, membership pricing, facility announcements, and out-of-order notices.

---

## Architecture & Project Structure

The project uses a clean, modern, modular structure:

```
├── index.html          # Semantic HTML5 layout, meta tags, and app skeleton
├── styles.css          # Consolidated stylesheet (variables, layout, UI components)
├── app.js              # Application logic, template registry, print & export engines
├── slips.md            # Comprehensive catalog of all slip templates and formatting
├── styleguide.md       # Thermal printer design and layout specifications
├── PUSH_INSTRUCTIONS.md# Guide for Git version control and GitHub deployment
├── server.ts           # Express + Vite development server
└── package.json        # Dependencies and scripts
```

---

## How It Works

### 1. Template Registry & Data Flow
* All slip definitions are stored in the `TEMPLATES` dictionary inside `app.js`.
* Each template contains:
  * `label`: User-facing display title.
  * `icon`: SVG icon displayed in the interface.
  * `content`: Pure HTML string formatted specifically for 80mm thermal printers.
* Templates support dynamic placeholders. For example, `{{DATETIME}}` in the *Out of Order* slip is dynamically replaced with the current UK date and time (`DD/MM/YYYY HH:MM`) upon loading.

### 2. Interactive Slip Preview & In-Place Editing
* Selecting any slip from the sidebar loads its rendered HTML into the `#paper` container.
* The preview is set to `contenteditable="true"`, allowing reception staff to edit details on the fly (e.g., custom class names, dates, or staff authorization signatures) before printing.

### 3. Sidebar Organization, Favorites & Customization
* **Alphabetical Sorting**: Templates are sorted alphabetically by their display label for rapid lookup.
* **Favorites**: Click the star icon (★) on any slip button to toggle its favorite status. Favorites are automatically persisted in the browser's `localStorage` (`sefton_favorites`).
* **Hide Unused Slips**: Right-click (or long-press) any button in the sidebar to open the context menu and select **"Hide button"**.
* **Restore Hidden**: When slips are hidden, a **"RESTORE HIDDEN"** button appears in the toolbar. Clicking it opens a modal listing all hidden slips with instant "Restore" buttons. Hidden items persist in `localStorage` (`sefton_hidden_items`).

### 4. Thermal Printing Pipeline (`handlePrint`)
* Thermal receipt printers (such as Epson TM-T88 or Star Micronics) require strict constraints:
  * Zero page margins (`@page { margin: 0; }`).
  * Explicit paper width constraint (250px container).
  * High-contrast pure black text (`#000000`).
* Clicking **"PRINT SLIP"** extracts the active HTML from the editor and opens an isolated print window that strips all web app chrome, injects thermal-specific styling, automatically triggers the native print dialog (`window.print()`), and closes cleanly.
* **10x Copies Mode**: Checking the **"10x COPIES"** checkbox generates 10 sequential slips separated by thermal cut/tear lines (`1px dashed black`), ideal for pre-printing batches of passes or codes.
* Every printed slip includes the subtle centered `-MDW-` receipt footer at the bottom.

### 5. A4 PNG Export Pipeline (`handleExportPng`)
* For facilities without a direct thermal receipt printer, clicking **"EXPORT PNG"** generates a print-ready A4 sheet.
* Uses `html2canvas` to render the slip at 4x resolution onto an ultra high-resolution A4 landscape canvas (3508 × 2480 px at 300 DPI).
* Arranges 4 identical slips side-by-side with dashed scissor cut guides, then automatically downloads `slip-export-a4.png`.

---

## Development

### Prerequisites
* Node.js 18+
* npm or bun

### Running Locally
```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev
```

Visit `http://localhost:3000` in your web browser.

### Production Build
```bash
npm run build
```
Vite compiles the production-ready assets into the `dist/` directory.

---

## Safety & Rollbacks

* A pre-refactor backup of the original single-file application is preserved as `index.html.bak`.
* The repository is version-controlled via Git. To inspect history or roll back to any previous state:
```bash
# View commit history
git log --oneline

# Discard local changes and reset to last commit
git reset --hard HEAD
```
