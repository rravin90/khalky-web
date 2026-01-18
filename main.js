import './style.css'

const translations = {
    en: {
        shop: "Shop",
        story: "Our Story",
        location: "Find Us",
        title: "Khalky Factory",
        subtitle: "Premium Organic Juices",
        hero_title: "Freshness in Every Drop",
        hero_cta: "Explore Collection",
        products_title: "Our Collection",
        about_title: "About Us",
        about_text: "Since 1994, Khalky has been dedicated to bringing the purest flavors of nature to your table. Our journey began with a simple passion for fresh fruits and has grown into a legacy of quality. We invite you to follow our story and latest updates on our social media.",
        about_cta: "Visit Facebook",
        location_title: "Visit Our Factory",
        contact_title: "Get in Touch",
        whatsapp: "Chat on WhatsApp",
        footer_text: "Making your life healthier with Khalky.",
        rights: "© 1994 Khalky Juice Company. All rights reserved.",
        product_grape: "Grape",
        product_pomegranate: "Pomegranate",
        product_orange: "Orange",
        product_lemon: "Lemon"
    },
    ku: {
        shop: "کڕین",
        story: "چیرۆکی ئێمە",
        location: "شوێن",
        title: "خالقی",
        subtitle: "شەربەتی سروشتی",
        hero_title: "تازەیی لە هەموو دڵۆپێکدا",
        hero_cta: "بەرهەمەکان ببینە",
        products_title: "بەرهەمەکانمان",
        about_title: "دەربارەی ئێمە",
        about_text: "لە ساڵی ١٩٩٤ـەوە، خالقی خۆی تەرخان کردووە بۆ گەیاندنی پاکترین تامەکانی سروشت بە ئێوە. کاروانەکەمان بە خۆشەویستییەکی سادە بۆ میوە تازەکان دەستی پێکرد و بوو بە میراتێکی کوالیتی بەرز. بانگهێشتتان دەکەین بۆ بەدواداچوونی چیرۆک و نوێکارییەکانمان لە سۆشیال میدیا.",
        about_cta: "سەردانی فەیسبووک",
        location_title: "سەردانی کارگەکەمان بکەن",
        contact_title: "پەیوەندیمان پێوە بکەن",
        whatsapp: "چات لە واتسئەپ",
        footer_text: "ژیانت تەندروستتر بکە لەگەڵ خالقی.",
        rights: "© ١٩٩٤ کۆمپانیای شەربەتی خالقی. هەموو مافەکان پارێزراون.",
        product_grape: "ترێ",
        product_pomegranate: "هەنار",
        product_orange: "پرتەقاڵ",
        product_lemon: "لیمۆ"
    },
    ar: {
        shop: "تسوق",
        story: "قصتنا",
        location: "موقعنا",
        title: "خالقی",
        subtitle: "عصائر طبيعية نقية",
        hero_title: "الانتعاش في كل قطرة",
        hero_cta: "اكتشف المجموعة",
        products_title: "تشكيلتنا",
        about_title: "معلومات عنا",
        about_text: "منذ عام ١٩٩٤، وشركة خالقی مكرسة لتقديم أنقى نكهات الطبيعة إلى مائدتكم. بدأت رحلتنا بشغف بسيط بالفواكه الطازجة وتحولت إلى إرث من الجودة. ندعوكم لمتابعة قصتنا وآخر المستجدات على وسائل التواصل الاجتماعي.",
        about_cta: "زيارة فيسبوك",
        location_title: "قم بزيارة مصنعنا",
        contact_title: "تواصل معنا",
        whatsapp: "راسلنا على واتساب",
        footer_text: "اجعل حياتك أكثر صحة مع خالقی.",
        rights: "© ١٩٩٤ شركة عصير خالقی. جميع الحقوق محفوظة.",
        product_grape: "زبيب",
        product_pomegranate: "رمان",
        product_orange: "برتقال",
        product_lemon: "ليمون"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;

    // Update translation texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Placeholder texts if any
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update Direction
    const dir = (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.lang = lang;

    // Update dropdown button text
    const langNames = { en: 'English', ku: 'کوردی', ar: 'العربية' };
    const currentLangSpan = document.getElementById('current-lang-text');
    if (currentLangSpan) currentLangSpan.textContent = langNames[lang];
}

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after showing
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Language Dropdown Logic
    const langBtn = document.getElementById('lang-dropdown-btn');
    const langMenu = document.getElementById('lang-dropdown-menu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
            langMenu.classList.toggle('opacity-0');
            langMenu.classList.toggle('scale-95');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.add('hidden', 'opacity-0', 'scale-95');
            }
        });

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                const lang = e.target.closest('button').getAttribute('data-lang');
                setLanguage(lang);
                langMenu.classList.add('hidden', 'opacity-0', 'scale-95');
            });
        });
    }

    // Default to English
    setLanguage('en');

    // Initialize Scroll Animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Auto-scroll hero slider
    const slider = document.getElementById('hero-slider');
    if (slider) {
        setInterval(() => {
            const scrollMax = slider.scrollWidth - slider.clientWidth;
            // If we are close to the end, wrap around
            if (slider.scrollLeft >= scrollMax - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll one viewport width
                slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
            }
        }, 5000);
    }
});

