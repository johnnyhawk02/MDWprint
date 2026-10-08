# Slip Templates Reference

This document catalogs all receipt slip templates configured in the Active Sefton Slip Printer application and explains how the slip templating engine functions.

---

## How Slip Templates Work

### 1. Template Structure
Each slip is defined as an object in the `TEMPLATES` dictionary inside `app.js`:

```javascript
const TEMPLATES = {
    TemplateKeyName: {
        icon: ICONS.phone,             // SVG icon displayed on the sidebar button
        label: "Human Readable Label", // Title shown on the button and restore menu
        content: `...`                 // Pure thermal-compatible HTML snippet
    },
    // ...
};
```

### 2. Supported Dynamic Placeholders
* **`{{DATETIME}}`**: Automatically replaced when loaded in the editor with the current UK date and timestamp formatted as `DD/MM/YYYY HH:MM` (e.g. for `OutOfOrder`).

### 3. Thermal Printing Compatibility Rules
Every template in `content` must strictly adhere to `styleguide.md`:
* **Colors**: Pure black (`#000000` or `#000`) for all borders, text, and dashed cut lines. Thermal printers cannot render colors or subtle greys reliably without dithering artifacts.
* **Typography**: Default sans-serif stack (`font-family: inherit` or system sans-serif).
* **Width & Margins**: Formatted for 80mm continuous thermal paper (250px container width during print). Paragraphs must reset margins (`margin: 0`) and flex rows should use `justify-content: space-between` with `padding: 0 4px` for clean two-column alignment.

### 4. Adding a New Slip
1. Open `app.js`.
2. Add your new key and HTML template to the `TEMPLATES` object.
3. Add the key to `SIDEBAR_ITEMS` in `app.js` (alphabetical order is handled dynamically in the UI).
4. Refresh the app. The new slip will appear automatically in the sidebar and support single or 10x thermal printing and A4 PNG export.

---

## Complete Slips Catalog

---

**Key:** AdultOnlySwims  
**Label:** Adult only Swims  
**Category:** Timetable / Pool  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Adult only Swims</p><p style="font-size: 14px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 8px;">Daytime Sessions</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 16px;"><span style="font-weight: 600;">Mon - Fri</span><span>12:00 - 13:00</span></div><p style="font-size: 14px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 8px;">Evening Sessions</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon Wed Thu</span><span>21:00 - 22:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Tue</span><span>20:45 - 21:45</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Fri</span><span>20:00 - 21:00</span></div>
```

---

**Key:** Aquatics  
**Label:** Aquatics  
**Category:** Contact  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Aquatics</p><p style="font-size: 20px; margin-bottom: 4px;">0151 934 2927</p><p style="font-size: 14px; white-space: nowrap;">active.aquatics@sefton.gov.uk</p>
```

---

**Key:** BecomeMember  
**Label:** Become A Member  
**Category:** App & Membership QR  
```html
<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Become A Member</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">How to join</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500;"><li>Scan QR code to download app</li><li>Press <strong>Join Now</strong></li><li>Select your preferred centre</li><li>Choose your membership</li><li>Enter details to complete</li></ol></div></div>
```

---

**Key:** DrinksNotRefrigerated  
**Label:** Drinks Not Fridge  
**Category:** Notice / Vertical Sign  
```html
<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Drinks <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">refridgerated</p></div>
```

---

**Key:** FemaleChange  
**Label:** Changing: Female  
**Category:** Access Code  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Changing: Female</p><p style="font-size: 32px; font-weight: 700;">1350</p>
```

---

**Key:** FreeClassPass  
**Label:** Free Class Pass  
**Category:** Voucher / Pass  
```html
<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 600; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Meadows Leisure Centre</p><p style="font-weight: 900; font-size: 26px; line-height: 1; letter-spacing: -0.03em;">Free Class Pass</p></div><div style="text-align: left; width: 100%; padding: 0 10px; box-sizing: border-box; font-size: 14px;"><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Class:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Date:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div><span style="font-weight: 600; margin: 0 8px;">Time:</span><div style="width: 50px; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Name:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Authorized by:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div></div></div>
```

---

**Key:** GroupChange  
**Label:** Group Change  
**Category:** Access Code  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Group change</p><p style="font-size: 32px; font-weight: 700;">c1580x</p>
```

---

**Key:** GymTimes  
**Label:** Gym Times  
**Category:** Timetable  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Gym Times</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon - Fri</span><span>06:30 - 22:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Sat - Sun</span><span>08:00 - 17:00</span></div>
```

---

**Key:** HolidayPoolTimes  
**Label:** Holiday Pool Times  
**Category:** Timetable / Pool  
```html
<p style="font-weight: 700; font-size: 20px; margin-bottom: 4px;">Holiday Pool Times</p><p style="font-size: 14px; font-weight: 600; margin-bottom: 10px;">23 July - 29 August</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Monday</span><span>06:30 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Tuesday</span><span>12:00 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Wednesday</span><span>06:30 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Thursday</span><span>12:00 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Friday</span><span>06:30 - 15:00</span></div><p style="font-size: 12px; font-style: italic; margin-bottom: 12px;">Swimming lessons still go ahead during holidays.</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Main Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Adults Only</span><span>12:00 - 13:00</span></div>
```

---

**Key:** JoinOnlineMyFitApp  
**Label:** Sefton Active App  
**Category:** App & Membership QR  
```html
<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Active Sefton App</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Download Instructions</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500;"><li>Scan the QR code above</li><li>Tap the link that appears</li><li>Install <strong>Active Sefton</strong> app</li></ol></div></div>
```

---

**Key:** LockNotWorking  
**Label:** Lock Not Working  
**Category:** Notice / Vertical Sign  
```html
<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Lock is <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">working</p></div>
```

---

**Key:** MaleChange  
**Label:** Changing: Male  
**Category:** Access Code  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Changing: Male</p><p style="font-size: 32px; font-weight: 700;">1450</p>
```

---

**Key:** MeadowsLeisureCentre  
**Label:** Meadows Contact  
**Category:** Contact  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Meadows Leisure Centre</p><p style="font-size: 20px; margin-bottom: 4px;">0151 288 6727</p>
```

---

**Key:** MembershipPrices  
**Label:** Prices  
**Category:** Pricing Table  
```html
<div style=" "><div style="margin-bottom: 16px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Membership Prices</p><p style="font-size: 11px; font-weight: 500; margin-bottom: 0;">All contracts roll monthly after initial period</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Active Sefton Single</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£33/mth or £363/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£43/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 2px; text-align: left;">Concession</p><p style="font-size: 11px; font-weight: 500; margin-top: 0; margin-bottom: 6px; line-height: 1.3;">Workforce, Referral, Student, Saver+</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£308/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£28/mth</span></div><p style="font-size: 13px; font-style: italic; margin-top: 0; margin-bottom: 0; text-align: left;">Saver+ has an additional £15 annual fee</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Corporate & Buddy</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£330/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£30/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Youth (11-15yrs)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£220/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£20/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Adult)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£297/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£27/mth</span></div></div><div style="margin-bottom: 12px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Junior 3-10)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£187/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£17/mth</span></div></div><div style="margin-top: 20px; border-top: 2px solid #000; padding-top: 16px; text-align: center;"><p style="font-weight: 700; font-size: 14px; margin-bottom: 12px;">Ready to join?</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 100px; height: 100px; display: block; margin: 0 auto 12px auto;"><p style="font-size: 12px; font-weight: 500; margin: 0; line-height: 1.4;">Scan to download our app<br>and become a member</p></div></div>
```

---

**Key:** OAPSwims  
**Label:** OAP £2 Swims  
**Category:** Timetable / Pool  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">OAP £2 Swims</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon Wed Fri</span><span>06:30 - 08:30</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Tue Thu</span><span>12:00 - 13:00</span></div>
```

---

**Key:** OutOfOrder  
**Label:** Out Of Order  
**Category:** Dynamic Notice / Vertical Sign  
```html
<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 120px 0; margin: 0 auto;"><p style="font-weight: 900; font-size: 52px; margin: 0; text-transform: uppercase; letter-spacing: 5px;">OUT OF ORDER</p><p style="font-weight: 600; font-size: 20px; margin: 0; margin-right: 30px; letter-spacing: 1px;">MANAGER NOTIFIED:<br>{{DATETIME}}</p></div>
```

---

**Key:** PhoneNumbers  
**Label:** Phone Numbers  
**Category:** Contact / Directory  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Phone Numbers</p><div style="border-top: 1px dashed #000; margin-bottom: 12px; width: 100%;"></div><table style="margin: 0 auto; border-collapse: collapse; font-size: 17px;"><tbody><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Upstairs office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6719</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">DM Office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6722</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Library Office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6724</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">GP (Martin)</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6736</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">GP (Lisa)</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6726</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Fitness suite</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6734</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Cristianos</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6735</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Focus room 1</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">8979</td></tr></tbody></table>
```

---

**Key:** PoolClassesQR  
**Label:** Pool & Class Times  
**Category:** QR Schedule  
```html
<div style="padding: 8px;"><div style="margin-bottom: 24px; text-align: center;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 6px; line-height: 1.1; letter-spacing: -0.02em;">Meadows</p><p style="font-weight: 600; font-size: 16px; margin: 0;">Pool &amp; Class Times</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.activeseftonfitness.co.uk/meadows-leisure-centre" style="width: 100px; height: 100px; display: block; margin: 0 auto;" alt="Pool & Class Times QR"></div>
```

---

**Key:** Printouts  
**Label:** Printouts  
**Category:** Technical Instructions  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Printouts</p><p style="font-size: 18px;">mdwprint.netlify.app</p><p style="font-size: 18px;">press SHIFT + ALT + P</p>
```

---

**Key:** Retention  
**Label:** Retention  
**Category:** Contact  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Retention</p><p style="font-size: 20px; margin-bottom: 4px;">0151 934 2858</p><p style="font-size: 14px; white-space: nowrap;">retention@sefton.gov.uk</p>
```

---

**Key:** Rhymetime  
**Label:** Rhymetime  
**Category:** Activity Schedule  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Rhymetime</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Tue</span><span>10:30 and 14:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Fri</span><span>10:30</span></div>
```

---

**Key:** SaunaSteam  
**Label:** Sauna & Steam  
**Category:** Access Code  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Sauna & Steam</p><p style="font-size: 32px; font-weight: 700;">1580</p>
```

---

**Key:** SmallPool  
**Label:** Small Pool  
**Category:** Timetable / Pool  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Monday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Tuesday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:15 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Wednesday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:15 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Thursday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Friday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:00 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Saturday</span><div style="text-align: right;">12:00 - 16:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Sunday</span><div style="text-align: right;">12:00 - 15:00</div></div>
```

---

**Key:** SummerSwimSplash  
**Label:** Swim & Splash  
**Category:** Seasonal Timetable  
```html
<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Swim & Splash</p><p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">Wed 22 July - Fri 28 Aug</p><p style="font-size: 12.5px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 10px; text-align: center; width: 100%;">Kids £3.20 &nbsp;|&nbsp; Adults £7.30 &nbsp;|&nbsp; OAP £4.70</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Main Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 12px; font-size: 15px;"><span style="font-weight: 600;">Mon - Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Mon Wed Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Tue Thu</span><span>13:00 - 15:00</span></div><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 12px; line-height: 1.2;">Please note: between 12:00 and 13:00, the main pool is adult only and the small pool is open to families only.</p><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 4px; line-height: 1.2;">Outside of these times: Kids £4.70</p>
```

---

**Key:** ToiletLockBroken  
**Label:** Toilet Lock Broken  
**Category:** Notice / Vertical Sign  
```html
<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 64px; margin: 0; letter-spacing: 1px;">Lock is <span style="font-weight: 900; text-transform: uppercase;">BROKEN</span></p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 16px; letter-spacing: 1px;">Toilet still usable.</p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 8px; letter-spacing: 1px;">Please knock!</p></div>
```

---

**Key:** WaterReception  
**Label:** Water  
**Category:** Notice / Vertical Sign  
```html
<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 30px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 42px; margin: 0; letter-spacing: 1px;">If you want water,</p><p style="font-weight: 700; font-size: 38px; margin: 0; margin-right: 15px;">it's £1 a bottle.</p><p style="font-weight: 500; font-size: 32px; margin: 0; margin-right: 15px;">Please ask at reception.</p></div>
```
