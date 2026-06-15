import React from 'react'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, useTranslation as useRI18nTranslation } from 'react-i18next'

// i18n resource definitions for Uzbek (uz) and Russian (ru)
const uz_extra = {
  // EDUCATION PAGE
  edu_badge: "Ta'lim markazi",
  edu_hero_sub: "Professional kurslar, amaliy treninglar va xalqaro sertifikatsiya dasturlari orqali martabangizdagi yangi bosqichga chiqing.",
  edu_stat_graduates: "Bitiruvchilar",
  edu_stat_courses: "Kurslar",
  edu_stat_employed: "Ish topganlar",
  edu_hero_title1: "Logistika sohasida",
  edu_hero_title2: "Rivojlaning",
  edu_see_courses: "Kurslarni ko'rish",
  edu_stat_teachers: "Tajribali o'qituvchilar",
  why_study_title: "Nima uchun bizda o'qish kerak?",
  why_study_sub: "Amaliy bilimlar, real tajriba, xalqaro sertifikat.",

  // WHY items
  why_study1_title: "Amaliy o'qituvchilar",
  why_study1_desc: "Sohadagi 10+ yillik tajribaga ega mutaxassislar dars beradi — teoriya emas, amaliyot.",
  why_study2_title: "Xalqaro sertifikat",
  why_study2_desc: "Xalqaro miqyosda tan olingan sertifikat beriladi — rezyumengiz kuchayadi.",
  why_study3_title: "Ish joyi kafolati",
  why_study3_desc: "Bitiruvchilarning 95% kurs tugagach 3 oy ichida ish topadi.",
  why_study4_title: "Tez o'sish",
  why_study4_desc: "Kurs tugagach oylik maoshiniz 30–50% oshishi kutiladi.",

  // Courses
  courses_eyebrow: "Kurslar",
  courses_title: "Bizning dasturlar",
  level_beginner: "Boshlang'ich",
  level_mid: "O'rta daraja",
  featured: "Eng mashhur",
  level_pro: "Professional",
  course1_title: "Logistika asoslari",
  course1_desc: "Logistika va ta'minot zanjiri boshqaruvining fundamental asoslari, terminologiya va amaliy ko'nikmalar.",
  course2_title: "Xalqaro savdo va eksport",
  course2_desc: "Incoterms, xalqaro hujjatlar, akkreditiv, valyuta risklari va eksport jarayonlarini chuqur o'rganish.",
  course3_title: "Bojhona deklaratsiyasi",
  course3_desc: "GTD rasmiylashtirish, TN VED kodlari, bojhona to'lovlari va ruxsatnomalar bilan ishlash amaliyoti.",
  course4_title: "Ombor va inventar boshqaruvi",
  course4_desc: "Ombor operatsiyalari, inventarizatsiya, WMS tizimlar va samarali zaxira boshqaruvi metodlari.",


  // Course topics
  course1_t1: "Logistika tizimlari va turlari",
  course1_t2: "Ta'minot zanjiri asoslari",
  course1_t3: "Yuk hujjatlari va terminologiya",
  course1_t4: "Amaliy vazifalar va casestudy",

  course2_t1: "Incoterms 2020 to'liq kursi",
  course2_t2: "Xalqaro shartnomalar va akkreditiv",
  course2_t3: "Eksport hujjatlashtiruvi",
  course2_t4: "Valyuta risklari va xedjlash",

  course3_t1: "GTD (Gumruk tovar deklaratsiyasi)",
  course3_t2: "TN VED kodlari va tasnifash",
  course3_t3: "Gumruk to'lovlari hisoblash",
  course3_t4: "Ruxsatnomalar va litsenziyalar",

  course4_t1: "Ombor operatsiyalari va WMS",
  course4_t2: "Inventarizatsiya metodlari",
  course4_t3: "Zaxiralar optimallashtirish",
  course4_t4: "KPI va samaradorlik ko'rsatkichlari",

  // Common course
  max: "max",
  certificate: "Sertifikat",
  per_month: "oyiga",

  // Steps
  steps_eyebrow: "Qanday ishlaydi",
  steps_title: "O'qishni boshlash qadamlari",
  step1_title: "Murojaat qiling",
  step1_desc: "Forma to'ldiring yoki Telegram/telefon orqali bog'laning.",
  step2_title: "Konsultatsiya oling",
  step2_desc: "Mutaxassisimiz siz uchun eng mos kursni tanlashda yordam beradi.",
  step3_title: "Shartnoma tuzing",
  step3_desc: "Qulay to'lov rejasi bilan shartnoma imzolanadi.",
  step4_title: "O'qishni boshlang",
  step4_desc: "Kichik guruhda tajribali o'qituvchi bilan o'qishni boshlaysiz.",

  // Edu CTA
  edu_cta_title: "Qaysi kurs sizga mos?",
  edu_cta_sub: "Bepul konsultatsiya oling — mutaxassisimiz 15 daqiqada javob beradi.",

  // CONTACT PAGE
  contact_title1: "Birinchi qadam —",
  contact_title2: "Biz bilan bog'laning",
  contact_hero_sub: "Formani to'ldiring yoki qulay kanal orqali murojaat qiling. Mutaxassisimiz 1 soat ichida javob beradi.",
  contact_channels_title: "Aloqa kanallari",
  contact_instagram: "Instagram",
  contact_bot: "Telegram Bot",
  free_consult_title: "Birinchi konsultatsiya — BEPUL",
  free_consult_desc: "Hech qanday majburiyatsiz bepul maslahat olasiz.",
  field_required: "Bu maydonni to'ldiring",
  form_sending: "Yuborilmoqda...",
  form_success_title: "Muvaffaqiyatli yuborildi!",

  form_title: "Murojaat yuborish",
  form_sub: "Barcha maydonlarni to'ldiring, tez orada javob beramiz.",
  form_name: "Ismingiz",
  form_name_ph: "Ism Familiya",
  form_phone: "Telefon raqam",
  form_service: "Xizmat turi",
  form_service_placeholder: "Xizmatni tanlang",
  form_message: "Xabar",
  form_message_ph: "Muammongiz yoki savolingizni yozing...",
  form_submit: "Yuborish",
  form_note: "Birinchi konsultatsiya bepul. Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.",

  contact_phone: "Telefon",
  contact_telegram: "Telegram",
  contact_email: "Email",
  contact_address: "Manzil",

  working_hours: "Ish vaqti",
  wh_weekdays: "Dushanba — Juma",
  wh_saturday: "Shanba",
  wh_sunday: "Yakshanba",
  wh_day_off: "Dam olish",

  contact_eyebrow: "Biz bilan bog'laning",
  get_consultation: "Konsultatsiya olish",

  // FAQ
  faq_eyebrow: "Ko'p so'raladigan savollar",
  faq_title: "Savollaringiz bormi?",
  faq1_q: "Birinchi konsultatsiya pullikmi?",
  faq1_a: "Yo'q, birinchi konsultatsiya mutlaqo bepul. Siz bilan mutaxassisimiz bog'lanadi va barcha savollaringizga javob beradi.",
  faq2_q: "Necha kundan keyin javob olaman?",
  faq2_a: "Odatda murojaatlar 1 soat ichida ko'rib chiqiladi. Ish vaqtidan tashqari kelgan so'rovlar ertasi kuni ertalab javob oladi.",
  faq3_q: "Xizmat haqi qancha?",
  faq3_a: "Narxlar xizmat turiga va hajmiga qarab farq qiladi. Aniq narxni bilish uchun bepul konsultatsiyaga yoziling.",
  faq4_q: "Sizlar bilan shartnoma tuziladi?",
  faq4_a: "Ha, barcha xizmatlar rasmiy shartnoma asosida ko'rsatiladi. Bu sizning huquqlaringizni to'liq himoya qiladi.",

  // Common / site-wide
  home: "Bosh sahifa",
  education: "Ta'lim",
  contact: "Bog'lanish",
  contact_btn: "Bog'lanish",
  services_eyebrow: "Xizmatlarimiz",
  services_title: "Sizga qanday yordam bera olamiz?",
  services_sub: "Biznes maqsadlaringizga mos xizmatni tanlang — tajribali mutaxassislarimiz har qadamda yongingizdadir.",
  read_more: "Batafsil",
  svc_export_desc: "Chet elda ishonchli hamkorlar topish",
  svc_import_desc: "Chet eldan arzonroq olib kelish",
  svc_logistics_desc: "Tez va ishonchli yetkazib berish",
  svc_customs_desc: "Bojhona muammolarini hal qilish",
  svc_export: "Eksport",
  svc_export_title: "Xorijiy hamkorlar topish",
  svc_export_long: "Siz ishlab chiqaruvchisiz va mahsulotingiz uchun chet eldan hamkorlar zarurmi? Biz siz uchun ishonchli xorijiy xaridorlar va distributorlar topamiz. Xalqaro savdo shartnomalarini tuzishda to'liq qo'llab-quvvatlaymiz.",
  svc_import: "Import",
  svc_import_title: "Chet eldan arzon olib kelish",
  svc_import_long: "Savdo bilan shug'illansangiz va chet eldan mahsulotlaringizni qimmatga olib kelayabsizmi? Biz bilan bog'laning — logistika xarajatlarini 20–40% kamaytiring va eng qulay yo'nalishlarni topamiz.",
  svc_logistics: "Logistika",
  svc_logistics_title: "Logistika xizmatlari",
  svc_logistics_long: "Yuk tashish va ombor boshqaruvi. Yuk avtomobillari xizmatlari.",
  svc_customs: "Bojxona",
  svc_customs_title: "Bojhona muammolari — hal qilinadi",
  svc_customs_long: "Bojhona muammolari bormi? Biz yordam beramiz. GTD rasmiylashtirish, tariflar optimallashtirish, hujjatlar to'plami va bojxonadan tez o'tkazish — tajribali brokerlarimiz xizmatida.",
  svc_edu: "O'qish va malaka oshirish",
  svc_edu_desc: "Professional kurslar va treninglar",
  edu_banner_title: "Logistika sohasida rivojlaning",
  edu_banner_desc: "Logistika sohasida bilimlaringizni va malakangizni oshirmoqchimisiz? Professional kurslar, amaliy treninglar va sertifikatsiya dasturlari — martabangizdagi yangi bosqich.",
  edu_banner_cta: "Kurslarni ko'rish",
  card_our_services: "Bizning xizmatlar",
  hero_badge: "Ishonchli hamkor",
  hero_title1: "Eksport-Importga",
  hero_title2: "Yordamlar",
  hero_sub: "Ishlab chiqaruvchilar, savdogarlar va korxonalar uchun to'liq logistika yechimlari. Chet elga chiqing, arzonroq olib keling, bojxona muammolarini hal qiling — biz bilan.",
  hero_cta_primary: "Bog'lanish",
  hero_cta_secondary: "Xizmatlar",
  stat_clients: "Mijozlar",
  stat_years: "Yillar",
  stat_countries: "Mamlakatlar",
  stat_satisfaction: "Mamnunlik",
  why_reliable: "Ishonchli hamkor",
  why_fast: "Tez xizmat",
  why_support: "24/7 qo'llab-quvvatlash",
  why_global: "Global tarmoq",
  why_reliable_desc: "12 yillik tajriba va 500+ mamnun mijoz",
  why_fast_desc: "Murojaat qilgan kundan boshlab ishlashni boshlaymiz",
  why_support_desc: "Har qanday savol va muammolarga darhol javob",
  why_global_desc: "30+ mamlakatdagi hamkorlar bilan ishlash",
  bridge: "O'zbekiston va xalqaro bozorlar o'rtasidagi ishonchli ko'prik.",
  copyright: "© 2026 Export Import Logistics. Barcha huquqlar himoyalangan.",
  export_help: "Eksportga yordam",
  import_help: "Importga yordam",
  logistics: "Logistika",
  customs: "Bojxona",
  education_courses: "Ta'lim kurslari",
  cta_title: "Birinchi konsultatsiya — bepul!",
  cta_sub: "Mutaxassislarimiz savol va muammolaringizni tinglaydi va eng mos yechimni taklif etadi. Bugun bog'laning.",
  cta_btn: "Murojaat qilish",
}

const ru_extra = {
  //COURCES
  courses_eyebrow: "Курсы",
  courses_title: "Наши программы",
  level_beginner: "Начальный",
  level_mid: "Средний уровень",
  featured: "Самый популярный",
  level_pro: "Профессиональный",
  course1_title: "Основы логистики",
  course1_desc: "Фундаментальные основы логистики и управления цепочкой поставок, терминология и практические навыки.",
  course2_title: "Международная торговля и экспорт",
  course2_desc: "Incoterms, международные документы, аккредитив, валютные риски и глубокое изучение экспортных процессов.",
  course3_title: "Таможенное декларирование",
  course3_desc: "Оформление ГТД, коды ТН ВЭД, таможенные платежи и практика работы с разрешительными документами.",
  course4_title: "Управление складом и запасами",
  course4_desc: "Складские операции, инвентаризация, WMS-системы и методы эффективного управления запасами.",

  // EDUCATION PAGE
  edu_badge: "Образовательный центр",
  edu_hero_sub: "Профессиональные курсы, практические тренинги и международные программы сертификации для карьерного роста.",
  edu_stat_graduates: "Выпускников",
  edu_stat_courses: "Курсов",
  edu_stat_employed: "Нашли работу",
  edu_hero_title1: "Развивайтесь в",
  edu_hero_title2: "сфере логистики",
  edu_see_courses: "Смотреть курсы",
  edu_stat_teachers: "Опытных преподавателей",
  why_study_title: "Почему нужно учиться у нас?",
  why_study_sub: "Практические знания, реальный опыт, международный сертификат.",

  why_study1_title: "Практикующие преподаватели",
  why_study1_desc: "Обучают специалисты с 10+ летним опытом — не теория, а реальная практика.",
  why_study2_title: "Международный сертификат",
  why_study2_desc: "Выдаётся сертификат, признанный на международном уровне — ваше резюме усиливается.",
  why_study3_title: "Гарантия трудоустройства",
  why_study3_desc: "95% выпускников находят работу в течение 3 месяцев после окончания курса.",
  why_study4_title: "Быстрый карьерный рост",
  why_study4_desc: "После курса ожидается рост зарплаты на 30–50%.",

  courses_sub: "Выберите программу по своей цели и начните уже сегодня.",

  course1_t1: "Системы и виды логистики",
  course1_t2: "Основы управления цепочкой поставок",
  course1_t3: "Грузовые документы и терминология",
  course1_t4: "Практические задания и кейсы",

  course2_t1: "Полный курс Incoterms 2020",
  course2_t2: "Международные договоры и аккредитив",
  course2_t3: "Экспортная документация",
  course2_t4: "Валютные риски и хеджирование",

  course3_t1: "ГТД (Грузовая таможенная декларация)",
  course3_t2: "Коды ТН ВЭД и классификация",
  course3_t3: "Расчёт таможенных пошлин",
  course3_t4: "Разрешения и лицензии",

  course4_t1: "Складские операции и WMS",
  course4_t2: "Методы инвентаризации",
  course4_t3: "Оптимизация запасов",
  course4_t4: "KPI и показатели эффективности",

  max: "макс",
  certificate: "Сертификат",
  per_month: "в мес",

  steps_eyebrow: "Как это работает",
  steps_title: "Шаги для начала обучения",
  step1_title: "Оставьте заявку",
  step1_desc: "Заполните форму или свяжитесь через Telegram/телефон.",
  step2_title: "Получите консультацию",
  step2_desc: "Наш специалист поможет выбрать наиболее подходящий курс.",
  step3_title: "Подпишите договор",
  step3_desc: "Договор подписывается с удобным планом оплаты.",
  step4_title: "Начните обучение",
  step4_desc: "В небольшой группе с опытным преподавателем начинаете учёбу.",

  edu_cta_title: "Какой курс подходит вам?",
  edu_cta_sub: "Получите бесплатную консультацию — наш специалист ответит в течение 15 минут.",

  // CONTACT PAGE
  contact_title1: "Первый шаг —",
  contact_title2: "Свяжитесь с нами",
  contact_hero_sub: "Заполните форму или свяжитесь удобным способом. Наш специалист ответит в течение 1 часа.",
  contact_channels_title: "Каналы связи",
  contact_instagram: "Instagram",
  contact_bot: "Telegram Бот",
  free_consult_title: "Первая консультация — БЕСПЛАТНО",
  free_consult_desc: "Получите бесплатный совет без каких-либо обязательств.",
  field_required: "Заполните это поле",
  form_sending: "Отправляется...",
  form_success_title: "Успешно отправлено!",

  form_title: "Отправить заявку",
  form_sub: "Заполните все поля, мы ответим в ближайшее время",
  form_name: "Ваше имя",
  form_name_ph: "Ism Familiya",
  form_phone: "Номер телефона",
  form_service: "Тип услуги",
  form_service_placeholder: "Xizmatni tanlang",
  form_message: "Сообщение",
  form_message_ph: "Muammongiz yoki savolingizni yozing...",
  form_submit: "Yuborish",
  form_note: "Первая консультация бесплатна. Ваши данные не передаются третьим лицам.",

  contact_eyebrow: "Свяжитесь с нами",
  get_consultation: "Получить консультацию",


  // FAQ
  faq_eyebrow: "Часто задаваемые вопросы",
  faq_title: "Есть вопросы?",
  faq1_q: "Первая консультация платная?",
  faq1_a: "Нет, первая консультация абсолютно бесплатна. Наш специалист свяжется с вами и ответит на все вопросы.",
  faq2_q: "Через сколько дней получу ответ?",
  faq2_a: "Обычно заявки рассматриваются в течение 1 часа. Запросы вне рабочего времени обрабатываются на следующее утро.",
  faq3_q: "Сколько стоят услуги?",
  faq3_a: "Цены варьируются в зависимости от типа и объёма услуг. Для точной стоимости запишитесь на бесплатную консультацию.",
  faq4_q: "С вами заключается договор?",
  faq4_a: "Да, все услуги оказываются на основании официального договора. Это полностью защищает ваши права.",

  // Common / site-wide
  home: "Главная",
  education: "Образование",
  contact: "Контакт",
  contact_btn: "Контакт",
  services_eyebrow: "Наши услуги",
  services_title: "Как мы можем помочь вам?",
  services_sub: "Выберите услугу для вашего бизнеса — наши специалисты поддержат вас на каждом шагу.",
  read_more: "Подробнее",
  svc_export: "Экспорт",
  svc_export_title: "Поиск зарубежных партнёров",
  svc_export_long: "Вы производитель и ищете зарубежных партнёров для своей продукции? Мы найдём надёжных иностранных покупателей и дистрибьюторов. Полностью поддержим при заключении международных договоров.",
  svc_import: "Импорт",
  svc_import_title: "Дешевле ввозить из-за рубежа",
  svc_import_long: "Занимаетесь торговлей и дорого ввозите товары? Свяжитесь с нами — сократите расходы на 20–40% и найдём самые выгодные маршруты доставки.",
  svc_logistics: "Логистика",
  svc_logistics_title: "Логистические услуги",
  svc_logistics_long: "Перевозка грузов и управление складами.",
  svc_customs: "Таможня",
  svc_customs_title: "Таможенные проблемы — решаются",
  svc_customs_long: "Есть таможенные проблемы? Мы поможем. Оформление ГТД, оптимизация тарифов, сбор документов и быстрое таможенное оформление — наши брокеры к вашим услугам.",
  svc_edu: "Обучение и квалификация",
  edu_banner_title: "Развивайтесь в сфере логистики",
  edu_banner_desc: "Хотите повысить знания в сфере логистики? Профессиональные курсы, практические тренинги и программы сертификации — новый уровень карьеры.",
  edu_banner_cta: "Смотреть курсы",
  svc_edu_desc: "Курсы и консалтинг по отрасли.",
  card_our_services: "Наши услуги",
  hero_badge: "Надёжный партнёр",
  hero_title1: "Экспорт и импорт",
  hero_title2: "Логистические решения",
  hero_sub: "Полный набор логистических услуг для вас.",
  hero_cta_primary: "Связаться",
  hero_cta_secondary: "Услуги",
  why_reliable: "Надёжный партнёр",
  why_fast: "Быстрое обслуживание",
  why_support: "Поддержка 24/7",
  why_global: "Глобальная сеть",
  why_reliable_desc: "12 лет опыта и 500+ довольных клиентов",
  why_fast_desc: "Начинаем работу с первого дня обращения",
  why_support_desc: "Мгновенный ответ на любые вопросы",
  why_global_desc: "Работа с партнёрами в 30+ странах",
  bridge: "Надёжный мост между Узбекистаном и международными рынками.",
  copyright: "© 2026 Export Import Logistics. Все права защищены.",
  export_help: "Помощь в экспорте",
  import_help: "Помощь в импорте",
  logistics: "Логистика",
  customs: "Таможня",
  education_courses: "Курсы обучения",
  cta_title: "Первая консультация — бесплатно!",
  cta_sub: "Наши специалисты выслушают вопросы и предложат оптимальное решение. Свяжитесь сегодня.",
  cta_btn: "Связаться",
}

const resources = {
  uz: { translation: uz_extra },
  ru: { translation: ru_extra },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
  })

export function useTranslation(lang) {
  const { t, i18n: ri18n } = useRI18nTranslation()

  React.useEffect(() => {
    if (lang && ri18n.language !== lang) {
      ri18n.changeLanguage(lang)
    }
  }, [lang, ri18n])

  return t
}

export default i18n
