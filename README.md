# 🚢 EIL — Export Import Logistics

**Eksport Import va Logistikani Rivojlantirish Markazi** uchun to'liq React veb-sayti.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-Sass-CC6699?style=flat-square&logo=sass)
![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=flat-square&logo=reactrouter)
![i18n](https://img.shields.io/badge/i18n-UZ%20%7C%20RU-green?style=flat-square)

---

## 📋 Mundarija

- [Loyiha haqida](#loyiha-haqida)
- [Texnologiyalar](#texnologiyalar)
- [Fayl strukturasi](#fayl-strukturasi)
- [O'rnatish](#ornatish)
- [Ishga tushirish](#ishga-tushirish)
- [Sahifalar](#sahifalar)
- [Komponentlar](#komponentlar)
- [Til tizimi (i18n)](#til-tizimi-i18n)
- [SCSS arxitekturasi](#scss-arxitekturasi)
- [Sozlamalar](#sozlamalar)
- [Deploy qilish](#deploy-qilish)

---

## 📌 Loyiha haqida

EIL — O'zbekistondagi eksport-import va logistika xizmatlarini taqdim etuvchi kompaniyaning marketing veb-sayti. Sayt quyidagi maqsadlarda yaratilgan:

- ✅ Kompaniya xizmatlarini professional tarzda taqdim etish
- ✅ Ta'lim kurslarini reklama qilish va yozilish imkonini berish
- ✅ Mijozlar bilan bog'lanish (forma, Telegram, Instagram, Bot)
- ✅ O'zbek va Rus tillarida to'liq ishlash
- ✅ Barcha qurilmalarda to'g'ri ko'rinishi (responsive)

---

## 🛠 Texnologiyalar

| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| React | 18.2 | UI framework |
| Vite | 5.1 | Build tool & dev server |
| React Router DOM | 6.22 | Sahifalar o'rtasida navigatsiya |
| SCSS (Sass) | 1.71 | Stil yozish |
| Tabler Icons | latest | Ikonlar (CDN orqali) |
| Google Fonts | — | Sora + DM Sans shriftlari |

---

## 📁 Fayl strukturasi

```
eil-react/
│
├── index.html                  # Asosiy HTML fayl
├── vite.config.js              # Vite konfiguratsiyasi
├── package.json                # NPM paketlar va skriptlar
│
└── src/
    │
    ├── main.jsx                # React ilovasi boshlash nuqtasi
    ├── App.jsx                 # Router va global sozlamalar
    ├── i18n.js                 # UZ/RU tarjimalar (barcha textlar)
    │
    ├── assets/
    │   └── logo.js             # Logo (base64 formatda embedded)
    │
    ├── styles/
    │   ├── _variables.scss     # Ranglar, fontlar, breakpointlar
    │   └── global.scss         # Global stillar va utility classlar
    │
    ├── pages/
    │   ├── HomePage.jsx        # Bosh sahifa
    │   ├── EducationPage.jsx   # Ta'lim sahifasi
    │   └── ContactPage.jsx     # Bog'lanish sahifasi
    │
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx      # Navigatsiya (sticky, mobile menu)
        │   └── Navbar.scss
        │
        ├── Header/
        │   ├── Header.jsx      # Hero section + xizmatlar kartasi
        │   └── Header.scss
        │
        ├── Services/
        │   ├── Services.jsx    # 4 ta xizmat + ta'lim banner
        │   └── Services.scss
        │
        ├── WhyUs/
        │   ├── WhyUs.jsx       # 4 ta ustunlik kartasi
        │   └── WhyUs.scss
        │
        ├── Education/
        │   ├── Education.jsx   # Kurslar, qadamlar, stats
        │   └── Education.scss
        │
        ├── CTA/
        │   ├── CTA.jsx         # Call-to-action banner
        │   └── CTA.scss
        │
        ├── Contact/
        │   ├── Contact.jsx     # Forma, kanallar, FAQ
        │   └── Contact.scss
        │
        └── Footer/
            ├── Footer.jsx      # Pastki qism
            └── Footer.scss
```

---

## ⚙️ O'rnatish

### Talablar

- **Node.js** — v18 yoki undan yuqori
- **npm** — v9 yoki undan yuqori

Node.js versiyasini tekshirish:
```bash
node --version
npm --version
```

### Loyihani yuklab olish

```bash
# ZIP faylni oching yoki git clone qiling
cd eil-react

# Paketlarni o'rnatish
npm install
```

---

## 🚀 Ishga tushirish

```bash
# Development rejimida ishga tushirish
npm run dev
```

Brauzerda oching: **http://localhost:5173**

```bash
# Production uchun build qilish
npm run build

# Build natijasini local ko'rish
npm run preview
```

---

## 📄 Sahifalar

### 🏠 Bosh sahifa — `/`

| Komponent | Tavsif |
|-----------|--------|
| `Header` | Hero section — sarlavha, tavsif, statistika, xizmatlar kartasi |
| `WhyUs` | 4 ta ustunlik (tez, ishonchli, 24/7, global) |
| `Services` | 4 ta asosiy xizmat + ta'lim banner |
| `CTA` | Bog'lanishga chaqiruv banner |

### 🎓 Ta'lim sahifasi — `/education`

| Komponent | Tavsif |
|-----------|--------|
| Hero | Statistika karta bilan (1000+ bitiruvchi, 15+ kurs, 95% ish topdi) |
| Nima uchun bizda | 4 ta sabab kartasi |
| Kurslar | 4 ta kurs (mavzular, narx, davomiylik, belgilash) |
| Qadamlar | 4 qadam: Murojaat → Konsultatsiya → Shartnoma → O'qish |
| CTA | Telegram + bepul konsultatsiya |

### 📞 Bog'lanish sahifasi — `/contact`

| Komponent | Tavsif |
|-----------|--------|
| Hero | Sarlavha va qisqa tavsif |
| Kanallar | Tel, Telegram, Instagram, Bot, Email, Manzil |
| Forma | Ism, telefon, xizmat turi, xabar + validation + loading + success |
| Ish vaqti | Du-Ju, Shanba, Dam olish |
| FAQ | 4 ta ko'p so'raladigan savol |

---

## 🧩 Komponentlar

### `Navbar`
```jsx
<Navbar lang={lang} setLang={setLang} t={t} />
```
- Sticky header (scroll bo'lganda shadow paydo bo'ladi)
- UZ/RU tugmalar (localStorage ga saqlaydi)
- Aktiv link highlight
- Mobile hamburger menu (animatsiyali)

### `Header`
```jsx
<Header t={t} />
```
- Hero sarlavha va tavsif
- "Bog'lanish" va "Xizmatlar" tugmalar
- Statistika (500+, 12+, 30+, 98%)
- O'ng tomonda xizmatlar kartasi (5 ta icon bilan)

### `Services`
```jsx
<Services t={t} />
```
- 2×2 grid — 4 ta xizmat kartasi
- Har bir karta o'z rangi va ikonasi bilan
- Pastda Ta'lim markazi banner (binafsha)

### `Education`
```jsx
<Education t={t} />
```
- Ko'k gradient hero
- 4×1 grid — ustunliklar
- 2×2 grid — kurslar (featured badge, mavzular, narx)
- 4 qadam (how it works)
- Binafsha CTA

### `Contact`
```jsx
<Contact t={t} />
```
- 6 ta kanal kartasi (hover animatsiya)
- Ish vaqti jadvali
- Forma: validation, loading spinner, success xabar
- 2×2 FAQ grid

### `CTA`
```jsx
<CTA t={t} titleKey="cta_title" subKey="cta_sub" />
```
- `titleKey` va `subKey` props orqali matn o'zgartiriladi
- Har bir sahifada boshqa matn bilan ishlatiladi

---

## 🌐 Til tizimi (i18n)

Barcha matnlar `src/i18n.js` faylida saqlanadi.

```js
// i18n.js tuzilmasi
const translations = {
  uz: { nav_home: "Bosh sahifa", ... },
  ru: { nav_home: "Главная", ... },
};

export function useTranslation(lang) {
  return (key) => translations[lang]?.[key] ?? key;
}
```

**App.jsx da ishlatish:**
```jsx
const [lang, setLang] = useState('uz');
const t = useTranslation(lang);

// Komponentga uzatish
<Header t={t} />
```

**Komponent ichida:**
```jsx
<h1>{t('hero_title1')}</h1>
<p>{t('hero_sub')}</p>
```

**Yangi kalit qo'shish:**
```js
// i18n.js ichida uz: {} va ru: {} ga qo'shing
uz: {
  my_new_key: "Yangi matn o'zbekcha",
},
ru: {
  my_new_key: "Новый текст по-русски",
},
```

Til tanlovi `localStorage` ga saqlanadi — sahifa yangilanganida ham saqlanib qoladi.

---

## 🎨 SCSS arxitekturasi

### `_variables.scss` — O'zgaruvchilar

```scss
// Asosiy ranglar
$blue:        #1A4FAF;   // Birlamchi rang
$blue-dark:   #0F2F6B;   // To'q ko'k (footer, CTA)
$blue-light:  #EBF3FF;   // Och ko'k (badge, bg)
$green:       #0F6E56;   // Yashil (success)
$text:        #0D1520;   // Asosiy matn
$text-muted:  #5C6A7A;   // Ikkinchi darajali matn
$bg:          #FFFFFF;   // Oq fon
$bg2:         #F5F7FA;   // Kulrang fon

// Shriftlar
$font-heading: 'Sora', sans-serif;
$font-body:    'DM Sans', sans-serif;

// Breakpointlar
$bp-lg: 1024px;  // Tablet landscape
$bp-md: 768px;   // Tablet portrait
$bp-sm: 480px;   // Mobile
```

### `global.scss` — Global klaslar

```scss
.container      // max-width: 1160px, padding: 0 24px
.btn-primary    // Ko'k tugma
.btn-outline    // Chegarali tugma
.btn-white      // Oq tugma (to'q fonda)
.btn-ghost      // Shaffof tugma (to'q fonda)
.section-eyebrow // Kichik sarlavha (uppercase, ko'k)
.section-title   // Asosiy sarlavha
.section-sub     // Sarlavha ostidagi tavsif
```

---

## 🔧 Sozlamalar

### Aloqa ma'lumotlarini o'zgartirish

**`src/components/Contact/Contact.jsx`** faylida:
```jsx
const INFO_CARDS = [
  { href: 'tel:+998901234567',           value: '+998 90 123 45 67' },
  { href: 'https://t.me/eillogistics',   value: '@eillogistics' },
  { href: 'https://instagram.com/eil_logistics', value: '@eil_logistics' },
  { href: 'https://t.me/eilbot',         value: '@eil_bot' },
  { href: 'mailto:info@eil.uz',          value: 'info@eil.uz' },
];
```

### Footer linklarini o'zgartirish

**`src/components/Footer/Footer.jsx`** faylida:
```jsx
<a href="https://t.me/eillogistics">Telegram</a>
<a href="https://instagram.com/eil_logistics">Instagram</a>
```

### Kurs narxlarini o'zgartirish

**`src/components/Education/Education.jsx`** faylida:
```jsx
const COURSES = [
  { price: '1 200 000', ... },
  { price: '2 500 000', ... },
];
```

### Logo almashtirish

Logo hozir `src/assets/logo.js` da base64 formatda. Yangi logo qo'yish uchun:

```bash
# Python bilan yangi logoni base64 ga o'zgartirish
python3 -c "
import base64
with open('yangi_logo.png', 'rb') as f:
    print(base64.b64encode(f.read()).decode())
"
```

Natijani `src/assets/logo.js` ga joylashtiring:
```js
const logoBase64 = "data:image/png;base64,YANGI_BASE64_BU_YERGA";
export default logoBase64;
```

---

## 🌍 Deploy qilish

### Vercel (tavsiya etiladi)

```bash
# Vercel CLI o'rnatish
npm install -g vercel

# Deploy qilish
vercel

# Production deploy
vercel --prod
```

### Netlify

```bash
# Build qilish
npm run build

# dist/ papkasini Netlify ga drag-and-drop qiling
# yoki Netlify CLI:
npx netlify-cli deploy --prod --dir=dist
```

### GitHub Pages

```bash
# gh-pages paketini o'rnatish
npm install --save-dev gh-pages

# package.json ga qo'shing:
# "homepage": "https://username.github.io/eil-logistics"
# "scripts": { "deploy": "gh-pages -d dist" }

npm run build
npm run deploy
```

> **Eslatma:** React Router ishlatilgani uchun Netlify va Vercel da `_redirects` yoki `vercel.json` sozlanishi kerak bo'lishi mumkin.

**Netlify uchun** — `public/_redirects` fayl yarating:
```
/* /index.html 200
```

**Vercel uchun** — `vercel.json` fayl yarating:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 👨‍💻 Ishlab chiquvchi uchun

### Yangi sahifa qo'shish

1. `src/pages/` da yangi fayl yarating
2. `src/App.jsx` da Route qo'shing:
```jsx
<Route path="/yangi-sahifa" element={<YangiSahifa t={t} />} />
```
3. `src/components/Navbar/Navbar.jsx` da link qo'shing:
```jsx
const links = [
  ...
  { to: '/yangi-sahifa', labelKey: 'nav_yangi' },
];
```
4. `src/i18n.js` da matnlarni qo'shing

### Yangi komponent qo'shish

```bash
mkdir src/components/YangiKomponent
touch src/components/YangiKomponent/YangiKomponent.jsx
touch src/components/YangiKomponent/YangiKomponent.scss
```

SCSS faylning boshiga qo'shing:
```scss
@import '../../styles/variables';
```

---

## 📞 Aloqa

**EIL — Export Import Logistics**

- 🌐 Website: [eil.uz](https://eil.uz)
- 📞 Telefon: +998 90 123 45 67
- ✈️ Telegram: [@eillogistics](https://t.me/eillogistics)
- 📸 Instagram: [@eil_logistics](https://instagram.com/eil_logistics)
- 📧 Email: info@eil.uz

---

<div align="center">
  <strong>© 2024 EIL — Export Import Logistics. Barcha huquqlar himoyalangan.</strong>
</div>