
        const ICONS = new Proxy({}, { get: (t, p) => p });
        const TEMPLATES = {
            MeadowsLeisureCentre: {
                icon: ICONS.phone,
                label: "Meadows Contact",
                content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 0px;">Meadows</p><p style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #475569;">Leisure Centre</p><p style="font-size: 20px; margin-bottom: 4px;">0151 288 6727</p>`
            },

            SummerSwimSplash: {
                icon: ICONS.sun,
                label: "Swim & Splash",
                content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Swim & Splash</p><p style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">Wed 22 July - Fri 28 Aug</p><p style="font-size: 12.5px; font-weight: 600; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; margin-bottom: 10px; text-align: center; width: 100%;">Kids £3.20 &nbsp;|&nbsp; Adults £7.30 &nbsp;|&nbsp; OAP £4.70</p><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Main Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 12px; font-size: 15px;"><span style="font-weight: 600;">Mon - Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><p style="font-size: 16px; font-weight: 700; border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">Small Pool</p><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Mon Wed Fri</span><div style="text-align: right;">10:00 - 12:00<br>13:00 - 15:00</div></div><div style="display: flex; justify-content: space-between; width: 100%; padding: 0 5px; margin-bottom: 4px; font-size: 15px;"><span style="font-weight: 600;">Tue Thu</span><span>13:00 - 15:00</span></div><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 12px; line-height: 1.2;">Please note: between 12:00 and 13:00, the main pool is adult only and the small pool is open to families only.</p><p style="font-size: 11px; font-weight: 500; font-style: italic; margin-top: 4px; line-height: 1.2;">Outside of these times: Kids £4.70</p>`
            },
            ToiletLockBroken: {
                icon: ICONS.alertTriangle,
                label: "Toilet Lock Broken",
                content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; font-family: 'Inter', sans-serif; white-space: nowrap;"><p style="font-weight: 800; font-size: 64px; margin: 0; letter-spacing: 1px; color: #000000;">Lock is <span style="font-weight: 900; text-transform: uppercase;">BROKEN</span></p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 16px; letter-spacing: 1px; color: #000000;">Toilet still usable.</p><p style="font-weight: 700; font-size: 42px; margin: 0; margin-right: 8px; letter-spacing: 1px; color: #000000;">Please knock!</p></div>`
            },
            LockNotWorking: {
                icon: ICONS.alertTriangle,
                label: "Lock Not Working",
                content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; font-family: 'Inter', sans-serif; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Lock is <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">working</p></div>`
            },
            DrinksNotRefrigerated: {
                icon: ICONS.alertTriangle,
                label: "Drinks Not Fridge",
                content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 50px 0; margin: 0 auto; font-family: 'Inter', sans-serif; white-space: nowrap;"><p style="font-weight: 800; font-size: 48px; margin: 0; letter-spacing: 1px;">Drinks <span style="font-weight: 900; text-transform: uppercase;">NOT</span></p><p style="font-weight: 800; font-size: 48px; margin: 0; margin-right: 16px; letter-spacing: 1px;">refridgerated</p></div>`
            },
            JoinOnlineMyFitApp: {
                label: "Sefton Active App",
                icon: ICONS.smartphone,
                content: `<div style="font-family: 'Inter', sans-serif; color: #0f172a;"><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Active Sefton App</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Download Instructions</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500; color: #334155;"><li>Scan the QR code above</li><li>Tap the link that appears</li><li>Install <strong>Active Sefton</strong> app</li></ol></div></div>`
            },
            BecomeMember: {
                label: "Become A Member",
                icon: ICONS.userPlus,
                content: `<div style="font-family: 'Inter', sans-serif; color: #0f172a;"><div style="margin-bottom: 20px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Become A Member</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 140px; height: 140px; display: block; margin: 0 auto 24px auto;"><div style="text-align: left; font-size: 14px; padding: 0 8px;"><p style="margin-bottom: 8px; font-weight: 700; font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">How to join</p><ol style="margin: 0; padding-left: 18px; line-height: 1.5; font-weight: 500; color: #334155;"><li>Scan QR code to download app</li><li>Press <strong>Join Now</strong></li><li>Select your preferred centre</li><li>Choose your membership</li><li>Enter details to complete</li></ol></div></div>`
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
                content: `<div style="font-family: 'Inter', sans-serif; color: #0f172a;"><div style="margin-bottom: 20px;"><p style="font-weight: 600; font-size: 12px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Meadows Leisure Centre</p><p style="font-weight: 900; font-size: 26px; line-height: 1; letter-spacing: -0.03em;">Free Class Pass</p></div><div style="text-align: left; width: 100%; padding: 0 10px; box-sizing: border-box; font-size: 14px;"><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Class:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Date:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div><span style="font-weight: 600; margin: 0 8px;">Time:</span><div style="width: 50px; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Name:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div><div style="display: flex; align-items: baseline; margin-bottom: 15px;"><span style="font-weight: 600; margin-right: 8px;">Authorized by:</span><div style="flex-grow: 1; border-bottom: 1px dashed #000;">&nbsp;</div></div></div></div>`
            },
            MembershipPrices: {
                label: "Prices",
                icon: ICONS.tag,
                content: `<div style="font-family: 'Inter', sans-serif; color: #0f172a;"><div style="margin-bottom: 16px;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 4px; line-height: 1; letter-spacing: -0.03em;">Membership Prices</p><p style="font-size: 11px; font-weight: 500; color: #475569; margin-bottom: 0;">All contracts roll monthly after initial period</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Active Sefton Single</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£33/mth or £363/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£43/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 2px; text-align: left;">Concession</p><p style="font-size: 11px; font-weight: 500; color: #475569; margin-top: 0; margin-bottom: 6px; line-height: 1.3;">Workforce, Referral, Student, Saver+</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£308/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£28/mth</span></div><p style="font-size: 13px; font-style: italic; color: #0f172a; margin-top: 0; margin-bottom: 0; text-align: left;">Saver+ has an additional £15 annual fee</p></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Corporate & Buddy</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£330/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£30/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Youth (11-16yrs)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£220/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£20/mth</span></div></div><div style="margin-bottom: 12px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Adult)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£297/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£27/mth</span></div></div><div style="margin-bottom: 12px;"><p style="font-weight: 700; font-size: 16px; margin-bottom: 4px; text-align: left;">Swim (Junior 3-10)</p><div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 2px;"><span style="font-weight: 500;">Committed (12mth)</span><span style="text-align: right;">£187/yr</span></div><div style="display: flex; justify-content: space-between; font-size: 13px;"><span style="font-weight: 500;">Non-Committed (3mth min)</span><span style="text-align: right;">£17/mth</span></div></div><div style="margin-top: 20px; border-top: 2px solid #e2e8f0; padding-top: 16px; text-align: center;"><p style="font-weight: 700; font-size: 14px; margin-bottom: 12px;">Ready to join?</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://get.myfitapp.de/a/A4R6?p=5" style="width: 100px; height: 100px; display: block; margin: 0 auto 12px auto;"><p style="font-size: 12px; font-weight: 500; color: #475569; margin: 0; line-height: 1.4;">Scan to download our app<br>and become a member</p></div></div>`
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
                content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 120px 0; margin: 0 auto; font-family: 'Inter', sans-serif;"><p style="font-weight: 900; font-size: 52px; margin: 0; text-transform: uppercase; letter-spacing: 5px;">OUT OF ORDER</p><p style="font-weight: 600; font-size: 20px; margin: 0; margin-right: 30px; color: #334155; letter-spacing: 1px;">MANAGER NOTIFIED:<br>{{DATETIME}}</p></div>`
            },
            WaterReception: {
                icon: ICONS.waves,
                label: "Water",
                content: `<div style="writing-mode: vertical-rl; text-orientation: mixed; text-align: center; padding: 30px 0; margin: 0 auto; font-family: 'Inter', sans-serif; white-space: nowrap;"><p style="font-weight: 800; font-size: 42px; margin: 0; letter-spacing: 1px;">If you want water,</p><p style="font-weight: 700; font-size: 38px; margin: 0; margin-right: 15px;">it's £1 a bottle.</p><p style="font-weight: 500; font-size: 32px; margin: 0; margin-right: 15px; color: #334155;">Please ask at reception.</p></div>`
            },
            PoolClassesQR: {
                icon: ICONS.globe,
                label: "Pool & Class Times",
                content: `<div style="font-family: 'Inter', sans-serif; color: #0f172a; padding: 8px;"><div style="margin-bottom: 24px; text-align: center;"><p style="font-weight: 900; font-size: 24px; margin-bottom: 6px; line-height: 1.1; letter-spacing: -0.02em;">Meadows</p><p style="font-weight: 600; font-size: 16px; color: #475569; margin: 0;">Pool &amp; Class Times</p></div><img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.activeseftonfitness.co.uk/meadows-leisure-centre" style="width: 100px; height: 100px; display: block; margin: 0 auto;" alt="Pool & Class Times QR"></div>`
            }
        };
        module.exports = TEMPLATES;
    