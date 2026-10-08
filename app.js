/**
 * ==========================================================================
 * ACTIVE SEFTON | SLIP PRINTER APPLICATION
 * ==========================================================================
 */

/* ==========================================================================
   1. GLOBAL STATE & CONFIGURATION
   ========================================================================== */

const ICONS = {
    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    userPlus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
    man: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"></circle><path d="m10 22 1-7-1-7h4l-1 7 1 7"></path></svg>`,
    woman: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"></circle><path d="M12 7v15"></path><path d="M9 22h6"></path><path d="M12 16H9l-2-5h10l-2 5h-3"></path></svg>`,
    thermometer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`,
    dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="M2.515 5.343a2 2 0 1 1 2.828-2.829l1.768 1.767a2 2 0 1 1 2.829-2.828l6.364 6.364a2 2 0 1 1-2.829 2.829l-1.767-1.768a2 2 0 1 1-2.829 2.829z"></path></svg>`,
    waves: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    coins: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`,
    music: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    lifebuoy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>`,
    printer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2-2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
    ticket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    pen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>`
};

const TEMPLATES = {
    MeadowsLeisureCentre: {
        icon: ICONS.phone,
        label: "Meadows Contact",
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Meadows Leisure Centre</p><p style="font-size: 20px; margin-bottom: 4px;">0151 288 6727</p>`
    },
    SummerSwimSplash: {
        icon: ICONS.sun,
        label: "Swim & Splash",
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Swim & Splash</p><p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">Wed 22 July - Fri 28 Aug</p><p style="font-size: 12.5px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 10px; text-align: center; width: 100%;">Kids £3.20 &nbsp;|&nbsp; Adults £7.30 &nbsp;|&nbsp; OAP £4.70</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Main Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 12px; font-size: 15px;"><span style="font-weight: 600;">Mon - Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Mon Wed Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Tue Thu</span><span>13:00 - 15:00</span></div><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 12px; line-height: 1.2;">Please note: between 12:00 and 13:00, the main pool is adult only and the small pool is open to families only.</p><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 4px; line-height: 1.2;">Outside of these times: Kids £4.70</p>`
    },
    ToiletLockBroken: {
        icon: ICONS.alertTriangle,
        label: "Toilet Lock Broken",
        content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 64px; margin: 0; letter-spacing: 1px;">Lock is <span style="font-weight: 900; text-transform: uppercase;">BROKEN</span></p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 16px; letter-spacing: 1px;">Toilet still usable.</p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 8px; letter-spacing: 1px;">Please knock!</p></div>`
    },
    LockNotWorking: {
        icon: ICONS.alertTriangle,
        label: "Lock Not Working",
        content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Lock is <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">working</p></div>`
    },
    DrinksNotRefrigerated: {
        icon: ICONS.alertTriangle,
        label: "Drinks Not Fridge",
        content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Drinks <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">refridgerated</p></div>`
    },
    JoinOnlineMyFitApp: {
        label: "Sefton Active App",
        icon: ICONS.smartphone,
        content: `<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Active Sefton App</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Download Instructions</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500;"><li>Scan the QR code above</li><li>Tap the link that appears</li><li>Install <strong>Active Sefton</strong> app</li></ol></div></div>`
    },
    BecomeMember: {
        label: "Become A Member",
        icon: ICONS.userPlus,
        content: `<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Become A Member</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">How to join</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500;"><li>Scan QR code to download app</li><li>Press <strong>Join Now</strong></li><li>Select your preferred centre</li><li>Choose your membership</li><li>Enter details to complete</li></ol></div></div>`
    },
    MaleChange: {
        label: "Changing: Male",
        icon: ICONS.man,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Changing: Male</p><p style="font-size: 32px; font-weight: 700;">1450</p>`
    },
    FemaleChange: {
        label: "Changing: Female",
        icon: ICONS.woman,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Changing: Female</p><p style="font-size: 32px; font-weight: 700;">1350</p>`
    },
    GroupChange: {
        label: "Group Change",
        icon: ICONS.user,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Group change</p><p style="font-size: 32px; font-weight: 700;">c1580x</p>`
    },
    SaunaSteam: {
        label: "Sauna & Steam",
        icon: ICONS.thermometer,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Sauna & Steam</p><p style="font-size: 32px; font-weight: 700;">1580</p>`
    },
    GymTimes: {
        icon: ICONS.dumbbell,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Gym Times</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon - Fri</span><span>06:30 - 22:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Sat - Sun</span><span>08:00 - 17:00</span></div>`
    },
    SmallPool: {
        label: "Small Pool",
        icon: ICONS.waves,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Monday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Tuesday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:15 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Wednesday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:15 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Thursday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Friday</span><div style="text-align: right;">06:30 - 09:00<br>12:00 - 13:00<br>19:00 - 20:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Saturday</span><div style="text-align: right;">12:00 - 16:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Sunday</span><div style="text-align: right;">12:00 - 15:00</div></div>`
    },
    HolidayPoolTimes: {
        label: "Holiday Pool Times",
        icon: ICONS.sun,
        content: `<p style="font-weight: 700; font-size: 20px; margin-bottom: 4px;">Holiday Pool Times</p><p style="font-size: 14px; font-weight: 600; margin-bottom: 10px;">23 July - 29 August</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Monday</span><span>06:30 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Tuesday</span><span>12:00 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Wednesday</span><span>06:30 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Thursday</span><span>12:00 - 15:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 15px;"><span style="font-weight: 600;">Friday</span><span>06:30 - 15:00</span></div><p style="font-size: 12px; font-style: italic; margin-bottom: 12px;">Swimming lessons still go ahead during holidays.</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Main Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Adults Only</span><span>12:00 - 13:00</span></div>`
    },
    AdultOnlySwims: {
        label: "Adult only Swims",
        icon: ICONS.user,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Adult only Swims</p><p style="font-size: 14px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 8px;">Daytime Sessions</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 8px; font-size: 16px;"><span style="font-weight: 600;">Mon - Fri</span><span>12:00 - 13:00</span></div><p style="font-size: 14px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 8px;">Evening Sessions</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon Wed Thu</span><span>21:00 - 22:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Tue</span><span>20:45 - 21:45</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Fri</span><span>20:00 - 21:00</span></div>`
    },
    OAPSwims: {
        label: "OAP £2 Swims",
        icon: ICONS.coins,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">OAP £2 Swims</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Mon Wed Fri</span><span>06:30 - 08:30</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Tue Thu</span><span>12:00 - 13:00</span></div>`
    },
    Rhymetime: {
        icon: ICONS.music,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 10px;">Rhymetime</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 16px;"><span style="font-weight: 600;">Tue</span><span>10:30 and 14:00</span></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; font-size: 16px;"><span style="font-weight: 600;">Fri</span><span>10:30</span></div>`
    },
    FreeClassPass: {
        label: "Free Class Pass",
        icon: ICONS.ticket,
        content: `<div style=" "><div style="margin-bottom: 20px;"><p style="font-weight: 600; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Meadows Leisure Centre</p><p style="font-weight: 900; font-size: 26px; line-height: 1; letter-spacing: -0.03em;">Free Class Pass</p></div><div style="text-align: left; width: 100%; padding: 0 10px; box-sizing: border-box; font-size: 14px;"><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Class:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Date:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div><span style="font-weight: 600; margin: 0 8px;">Time:</span><div style="width: 50px; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Name:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Authorized by:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div></div></div>`
    },
    MembershipPrices: {
        label: "Prices",
        icon: ICONS.tag,
        content: `<div style=" "><div style="margin-bottom: 16px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Membership Prices</p><p style="font-size: 11px; font-weight: 500; margin-bottom: 0;">All contracts roll monthly after initial period</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Active Sefton Single</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£33/mth or £363/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£43/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 2px; text-align: left;">Concession</p><p style="font-size: 11px; font-weight: 500; margin-top: 0; margin-bottom: 6px; line-height: 1.3;">Workforce, Referral, Student, Saver+</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£308/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£28/mth</span></div><p style="font-size: 13px; font-style: italic; margin-top: 0; margin-bottom: 0; text-align: left;">Saver+ has an additional £15 annual fee</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Corporate & Buddy</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£330/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£30/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Youth (11-15yrs)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£220/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£20/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #000; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Adult)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£297/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£27/mth</span></div></div><div style="margin-bottom: 12px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Junior 3-10)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£187/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£17/mth</span></div></div><div style="margin-top: 20px; border-top: 2px solid #000; padding-top: 16px; text-align: center;"><p style="font-weight: 700; font-size: 14px; margin-bottom: 12px;">Ready to join?</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 100px; height: 100px; display: block; margin: 0 auto 12px auto;"><p style="font-size: 12px; font-weight: 500; margin: 0; line-height: 1.4;">Scan to download our app<br>and become a member</p></div></div>`
    },
    Retention: {
        icon: ICONS.phone,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Retention</p><p style="font-size: 20px; margin-bottom: 4px;">0151 934 2858</p><p style="font-size: 14px; white-space: nowrap;">retention@sefton.gov.uk</p>`
    },
    Aquatics: {
        icon: ICONS.lifebuoy,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Aquatics</p><p style="font-size: 20px; margin-bottom: 4px;">0151 934 2927</p><p style="font-size: 14px; white-space: nowrap;">active.aquatics@sefton.gov.uk</p>`
    },
    Printouts: {
        icon: ICONS.printer,
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Printouts</p><p style="font-size: 18px;">mdwprint.netlify.app</p><p style="font-size: 18px;">press SHIFT + ALT + P</p>`
    },
    OutOfOrder: {
        icon: ICONS.alertTriangle,
        content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 120px 0; margin: 0 auto;"><p style="font-weight: 900; font-size: 52px; margin: 0; text-transform: uppercase; letter-spacing: 5px;">OUT OF ORDER</p><p style="font-weight: 600; font-size: 20px; margin: 0; margin-right: 30px; letter-spacing: 1px;">MANAGER NOTIFIED:<br>{{DATETIME}}</p></div>`
    },
    WaterReception: {
        icon: ICONS.waves,
        label: "Water",
        content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 30px 0; margin: 0 auto; white-space: nowrap;"><p style="font-weight: 800; font-size: 42px; margin: 0; letter-spacing: 1px;">If you want water,</p><p style="font-weight: 700; font-size: 38px; margin: 0; margin-right: 15px;">it's £1 a bottle.</p><p style="font-weight: 500; font-size: 32px; margin: 0; margin-right: 15px;">Please ask at reception.</p></div>`
    },
    PoolClassesQR: {
        icon: ICONS.globe,
        label: "Pool & Class Times",
        content: `<div style="padding: 8px;"><div style="margin-bottom: 24px; text-align: center;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 6px; line-height: 1.1; letter-spacing: -0.02em;">Meadows</p><p style="font-weight: 600; font-size: 16px; margin: 0;">Pool &amp; Class Times</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.activeseftonfitness.co.uk/meadows-leisure-centre" style="width: 100px; height: 100px; display: block; margin: 0 auto;" alt="Pool & Class Times QR"></div>`
    },
    PhoneNumbers: {
        icon: ICONS.phone,
        label: "Phone Numbers",
        content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 8px;">Phone Numbers</p><div style="border-top: 1px dashed #000; margin-bottom: 12px; width: 100%;"></div><table style="margin: 0 auto; border-collapse: collapse; font-size: 17px;"><tbody><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Upstairs office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6719</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">DM Office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6722</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Library Office</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6724</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">GP (Martin)</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6736</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">GP (Lisa)</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6726</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Fitness suite</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6734</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Cristianos</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">6735</td></tr><tr><td style="padding: 6px 44px 6px 0; font-weight: 600; text-align: left; white-space: nowrap;">Focus room 1</td><td style="padding: 6px 0; font-weight: 700; font-size: 18px; text-align: left;">8979</td></tr></tbody></table>`
    }
};

const SIDEBAR_ITEMS = [
    'MeadowsLeisureCentre', 'SummerSwimSplash', 'ToiletLockBroken', 'LockNotWorking', 'DrinksNotRefrigerated',
    'JoinOnlineMyFitApp', 'BecomeMember', 'PoolClassesQR', 'GymTimes', 'Rhymetime', 'FreeClassPass',
    'MembershipPrices', 'SmallPool', 'HolidayPoolTimes', 'AdultOnlySwims', 'OAPSwims', 'OutOfOrder',
    'WaterReception', 'MaleChange', 'FemaleChange', 'GroupChange', 'SaunaSteam', 'Retention',
    'Aquatics', 'Printouts', 'PhoneNumbers'
];

const DEFAULT_FAVORITES = ['Aquatics', 'BecomeMember', 'OAPSwims', 'MembershipPrices', 'Retention', 'SmallPool'];
const DEFAULT_HIDDEN = ['HolidayPoolTimes', 'FreeClassPass', 'SummerSwimSplash', 'FemaleChange', 'MaleChange', 'DrinksNotRefrigerated', 'OutOfOrder', 'Printouts', 'WaterReception'];

let hiddenItems = JSON.parse(localStorage.getItem('sefton_hidden_items'));
if (!hiddenItems) {
    hiddenItems = DEFAULT_HIDDEN;
    localStorage.setItem('sefton_hidden_items', JSON.stringify(hiddenItems));
}

let currentActiveKey = null;
let contextMenuTargetKey = null;

/* ==========================================================================
   2. DOM ELEMENTS & REFERENCES
   ========================================================================== */

const sidebarEl = document.getElementById('sidebar');
const editorEl = document.getElementById('editor');
const paperEl = document.getElementById('paper');
const copyCheckEl = document.getElementById('copy-check');
const printBtn = document.getElementById('print-btn');
const exportBtn = document.getElementById('export-png-btn');
const restoreHiddenBtn = document.getElementById('restore-hidden-btn');
const contextMenuEl = document.getElementById('context-menu');
const hideItemBtn = document.getElementById('hide-item-btn');

/* ==========================================================================
   3. CORE LOGIC & STATE HELPERS
   ========================================================================== */

function getFavorites() {
    const stored = localStorage.getItem('sefton_favorites');
    return stored ? JSON.parse(stored) : DEFAULT_FAVORITES;
}

function saveFavorites(favorites) {
    localStorage.setItem('sefton_favorites', JSON.stringify(favorites));
}

function saveHiddenItems(items) {
    hiddenItems = items;
    localStorage.setItem('sefton_hidden_items', JSON.stringify(hiddenItems));
}

function toggleFavorite(key, e) {
    e.stopPropagation();
    let favorites = getFavorites();
    if (favorites.includes(key)) {
        favorites = favorites.filter(k => k !== key);
    } else {
        favorites.push(key);
    }
    saveFavorites(favorites);
    renderSidebar();
}

function getSortedSidebarItems() {
    const favorites = getFavorites();
    const items = SIDEBAR_ITEMS
        .map(key => ({
            key,
            label: (TEMPLATES[key].label || key.replace(/([A-Z])/g, ' $1').trim()),
            isFavorite: favorites.includes(key)
        }))
        .filter(item => !hiddenItems.includes(item.key));

    items.sort((a, b) => a.label.localeCompare(b.label));
    return items;
}

/* ==========================================================================
   4. DOM UPDATES & UI FUNCTIONS
   ========================================================================== */

function loadTemplate(key) {
    if (!TEMPLATES[key]) return;
    currentActiveKey = key;
    
    let content = TEMPLATES[key].content;
    if (content.includes('{{DATETIME}}')) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB'); // DD/MM/YYYY
        const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        content = content.replace('{{DATETIME}}', `${dateStr} ${timeStr}`);
    }
    
    editorEl.innerHTML = content;
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${key}`);
    if (activeBtn) activeBtn.classList.add('active');
}

function renderSidebar() {
    sidebarEl.innerHTML = '';
    
    const sortedItems = getSortedSidebarItems();
    const hasHidden = hiddenItems.length > 0;
    
    sortedItems.forEach(item => {
        const key = item.key;
        if (!TEMPLATES[key]) return;

        const btn = document.createElement('div');
        btn.className = 'sidebar-btn';
        btn.id = `btn-${key}`;
        
        const labelSpan = document.createElement('span');
        labelSpan.textContent = item.label;
        
        const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        starSvg.setAttribute('viewBox', '0 0 24 24');
        starSvg.setAttribute('class', `star-icon ${item.isFavorite ? 'active' : ''}`);
        starSvg.innerHTML = `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>`;
        starSvg.onclick = (e) => toggleFavorite(key, e);
        
        btn.appendChild(labelSpan);
        btn.appendChild(starSvg);
        
        btn.onclick = () => loadTemplate(key);
        btn.oncontextmenu = (e) => {
            e.preventDefault();
            showContextMenu(e.pageX, e.pageY, key);
        };
        
        sidebarEl.appendChild(btn);
    });
    
    if (hasHidden) {
        restoreHiddenBtn.classList.add('visible');
    } else {
        restoreHiddenBtn.classList.remove('visible');
    }
    
    if (currentActiveKey) {
        const activeBtn = document.getElementById(`btn-${currentActiveKey}`);
        if (activeBtn) activeBtn.classList.add('active');
    }
}

function showContextMenu(x, y, key) {
    contextMenuTargetKey = key;
    contextMenuEl.style.display = 'flex';
    contextMenuEl.style.left = `${x}px`;
    contextMenuEl.style.top = `${y}px`;
}

function hideContextMenu() {
    if (contextMenuEl) {
        contextMenuEl.style.display = 'none';
    }
}

function showRestoreOverlay() {
    const existing = document.getElementById('restore-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'restore-overlay';
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-card';

    const header = document.createElement('div');
    header.className = 'modal-header';

    const title = document.createElement('h3');
    title.className = 'modal-title';
    title.textContent = 'Restore Hidden Buttons';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.setAttribute('aria-label', 'Close modal');
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    closeBtn.onclick = () => overlay.remove();

    header.appendChild(title);
    header.appendChild(closeBtn);
    modal.appendChild(header);

    const listContainer = document.createElement('div');
    listContainer.className = 'modal-body';

    if (hiddenItems.length === 0) {
        const emptyText = document.createElement('p');
        emptyText.className = 'modal-empty-text';
        emptyText.textContent = 'No hidden buttons.';
        listContainer.appendChild(emptyText);
    } else {
        const sortedHidden = [...hiddenItems].sort((a, b) => {
            const labelA = TEMPLATES[a]?.label || a;
            const labelB = TEMPLATES[b]?.label || b;
            return labelA.localeCompare(labelB);
        });

        sortedHidden.forEach(key => {
            const template = TEMPLATES[key];
            if (!template) return;
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'restore-item';

            const labelSpan = document.createElement('span');
            labelSpan.className = 'restore-item-label';
            labelSpan.textContent = template.label || key;

            const restoreAction = document.createElement('button');
            restoreAction.className = 'restore-item-btn';
            restoreAction.textContent = 'Restore';

            restoreAction.onclick = () => {
                saveHiddenItems(hiddenItems.filter(k => k !== key));
                renderSidebar();
                itemDiv.remove();
                if (hiddenItems.length === 0) {
                    overlay.remove();
                }
            };

            itemDiv.appendChild(labelSpan);
            itemDiv.appendChild(restoreAction);
            listContainer.appendChild(itemDiv);
        });
    }

    modal.appendChild(listContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('mousedown', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

/* ==========================================================================
   5. ACTIONS & PRINT / EXPORT ENGINE
   ========================================================================== */

function handlePrint() {
    const editorContent = editorEl.innerHTML;
    const is10x = copyCheckEl.checked;
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
        alert("Pop-up blocked! Please allow pop-ups for this site to print.");
        return;
    }

    let printHTML = '';
    const count = is10x ? 10 : 1;
    for (let i = 0; i < count; i++) {
        printHTML += `<div class="slip-container">${editorContent}<div class="footer-mdw">-MDW-</div></div>`;
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Print Slip</title>
            <style>
                .no-print {
                    display: none !important;
                }
                @page { 
                    margin: 0; 
                }
                * { box-sizing: border-box; }
                html, body { 
                    margin: 0 !important; 
                    padding: 0 !important; 
                    width: 100% !important;
                    background: white;
                    color: black;
                    font-family: -apple-system, system-ui, sans-serif;
                    overflow-x: hidden !important;
                }
                .slip-container {
                    width: 250px;
                    max-width: 250px;
                    padding: 15px 5px; 
                    text-align: center !important;
                    page-break-inside: avoid;
                    border-bottom: ${is10x ? '1px dashed black' : 'none'};
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    font-size: 14px; 
                    line-height: 1.3;
                    margin: 0 auto !important;
                    overflow: hidden;
                }
                .slip-container [style*="white-space: nowrap"] {
                    white-space: nowrap !important;
                }
                .slip-container div[style*="display: flex"] {
                    display: flex !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    justify-content: space-between !important;
                    align-items: flex-start !important;
                    padding: 0 4px !important;
                    box-sizing: border-box !important;
                }
                .slip-container div[style*="display: flex"] span:first-child {
                    text-align: left !important;
                    flex-shrink: 1 !important;
                    word-wrap: break-word;
                }
                .slip-container div[style*="display: flex"] span:last-child {
                    text-align: right !important;
                    white-space: nowrap;
                    margin-left: 8px !important;
                    text-align: right !important;
                }
                .slip-container table {
                    margin: 0 auto !important;
                    border-collapse: collapse !important;
                }
                .slip-container td {
                    padding: 3px 4px;
                    vertical-align: middle !important;
                }
                img { max-width: 100%; height: auto; display: block; margin: 8px auto; }
                p { margin: 0; padding: 0; text-align: center; width: 100%; word-wrap: break-word; }
                .footer-mdw { font-size: 4px; margin-top: 15px; text-align: center; width: 100%; opacity: 0.2; }
            </style>
        </head>
        <body>
            ${printHTML}
            <script>
                window.onload = function() { 
                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 500);
                }
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

async function handleExportPng() {
    const originalText = exportBtn.innerHTML;
    
    try {
        exportBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> EXPORTING...`;
        exportBtn.style.pointerEvents = 'none';
        
        const baseCanvas = await window.html2canvas(paperEl, {
            scale: 4, 
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false,
        });
        
        // Create A4 Landscape Canvas at 300dpi (3508 x 2480)
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = 3508;
        finalCanvas.height = 2480;
        
        const ctx = finalCanvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
        
        // Available fourth-A4 area minus margins
        const margin = 80;
        const maxW = (finalCanvas.width / 4) - (margin * 2);
        const maxH = finalCanvas.height - (margin * 2);
        
        const scaleFactor = Math.min(maxW / baseCanvas.width, maxH / baseCanvas.height);
        
        const scaledW = baseCanvas.width * scaleFactor;
        const scaledH = baseCanvas.height * scaleFactor;
        
        // Draw first slip
        const x1 = (finalCanvas.width / 8) - (scaledW / 2);
        const y = (finalCanvas.height / 2) - (scaledH / 2);
        
        ctx.setLineDash([20, 20]);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        ctx.strokeRect(x1 - 10, y - 10, scaledW + 20, scaledH + 20);
        ctx.drawImage(baseCanvas, x1, y, scaledW, scaledH);
        
        // Draw second slip
        const x2 = (finalCanvas.width * 3 / 8) - (scaledW / 2);
        ctx.strokeRect(x2 - 10, y - 10, scaledW + 20, scaledH + 20);
        ctx.drawImage(baseCanvas, x2, y, scaledW, scaledH);
        
        // Draw third slip
        const x3 = (finalCanvas.width * 5 / 8) - (scaledW / 2);
        ctx.strokeRect(x3 - 10, y - 10, scaledW + 20, scaledH + 20);
        ctx.drawImage(baseCanvas, x3, y, scaledW, scaledH);
        
        // Draw fourth slip
        const x4 = (finalCanvas.width * 7 / 8) - (scaledW / 2);
        ctx.strokeRect(x4 - 10, y - 10, scaledW + 20, scaledH + 20);
        ctx.drawImage(baseCanvas, x4, y, scaledW, scaledH);
        
        // Draw cut lines
        ctx.beginPath();
        ctx.moveTo(finalCanvas.width / 4, 100);
        ctx.lineTo(finalCanvas.width / 4, finalCanvas.height - 100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(finalCanvas.width / 2, 100);
        ctx.lineTo(finalCanvas.width / 2, finalCanvas.height - 100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(finalCanvas.width * 3 / 4, 100);
        ctx.lineTo(finalCanvas.width * 3 / 4, finalCanvas.height - 100);
        ctx.stroke();
        
        const dataUrl = finalCanvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'slip-export-a4.png';
        link.href = dataUrl;
        link.click();
    } catch (err) {
        console.error("Error generating PNG:", err);
        alert("Failed to generate PNG.");
    } finally {
        exportBtn.innerHTML = originalText;
        exportBtn.style.pointerEvents = 'auto';
    }
}

/* ==========================================================================
   6. EVENT LISTENERS & INITIALIZATION
   ========================================================================== */

function setupEventListeners() {
    printBtn.addEventListener('click', handlePrint);
    exportBtn.addEventListener('click', handleExportPng);
    restoreHiddenBtn.addEventListener('click', showRestoreOverlay);

    document.addEventListener('click', (e) => {
        if (e.target.closest('#context-menu')) return;
        hideContextMenu();
    });

    hideItemBtn.addEventListener('click', () => {
        if (contextMenuTargetKey) {
            hiddenItems.push(contextMenuTargetKey);
            saveHiddenItems(hiddenItems);
            
            if (currentActiveKey === contextMenuTargetKey) {
                const firstAvailable = SIDEBAR_ITEMS.find(k => !hiddenItems.includes(k));
                if (firstAvailable) {
                    loadTemplate(firstAvailable);
                } else {
                    editorEl.innerHTML = '';
                }
            }
            
            renderSidebar();
        }
        hideContextMenu();
    });
}

function init() {
    setupEventListeners();
    renderSidebar();
    loadTemplate('JoinOnlineMyFitApp');
}

// Bootstrap once the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
