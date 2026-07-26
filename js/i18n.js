// ==========================================================================
// AZ STORE — Internationalisation (js/i18n.js)
// Langues : Français (défaut), Anglais, Arabe (avec RTL automatique).
// Utilisation : ajouter data-i18n="cle" sur un élément, ou
// data-i18n-placeholder="cle" sur un input/textarea.
// ==========================================================================

const TRANSLATIONS = {
  fr: {
    navShop: "Boutique", navCart: "Panier", navLogin: "Se connecter", navLogout: "Se déconnecter", navAdmin: "Admin",
    searchPlaceholder: "Rechercher un objet, un Gamepass...",
    heroEyebrow: "Livraison rapide · Paiement sécurisé",
    heroTitlePre: "Tous tes objets", heroTitleAccent: "Roblox", heroTitlePost: "préférés, au même endroit.",
    heroLead: "Limited, Dominus, Robux et Gamepass — sélectionnés, vérifiés et livrés rapidement par AZ Store.",
    heroBtnCatalog: "Voir le catalogue", heroBtnRegister: "Créer un compte",
    spotlightLabel: "Objet en vedette",
    catalogTitle: "Catalogue", all: "Tous",
    itemsSingular: "objet", itemsPlural: "objets", noResults: "Aucun objet ne correspond à ta recherche.",
    outOfStock: "Rupture",
    footerCopy: "© 2026 AZ Store. Marketplace non affiliée à Roblox Corporation.",
    breadcrumbShop: "Boutique",
    addToCart: "Ajouter au panier", quickOrder: "Commande rapide", orderWhatsapp: "Commander sur WhatsApp",
    quickOrderTitle: "Commande rapide", contactLabel: "Pseudo Roblox ou e-mail de contact",
    messageLabel: "Message (optionnel)", cancel: "Annuler", sendRequest: "Envoyer la demande",
    regionLabel: "Région", availabilityLabel: "Disponibilité", inStock: "En stock",
    loginTitle: "Content de te revoir", loginSub: "Connecte-toi pour suivre tes commandes.",
    emailLabel: "Adresse e-mail", passwordLabel: "Mot de passe", loginBtn: "Se connecter",
    noAccount: "Pas encore de compte ?", createAccount: "Créer un compte",
    registerTitle: "Créer un compte", registerSub: "Rejoins AZ Store en quelques secondes.",
    pseudoLabel: "Pseudo Roblox", registerBtn: "Créer mon compte",
    haveAccount: "Déjà un compte ?", signIn: "Se connecter",
    checkoutCartTitle: "Ton panier", contactSectionTitle: "Tes coordonnées",
    bookingTitle: "Créneau de livraison",
    bookingDesc: "Choisis un jour et une heure où tu seras connecté(e) à Roblox pour recevoir ta commande.",
    dateLabel: "Date", timeLabel: "Heure",
    paymentTitle: "Pays & méthode de paiement", countryLabel: "Pays",
    tunisia: "Tunisie", otherCountry: "Autre pays",
    postAddressLabel: "Adresse postale complète (livraison)",
    summaryTitle: "Résumé", subtotal: "Sous-total", fees: "Frais", total: "Total",
    confirmOrder: "Confirmer la commande", emptyCart: "Ton panier est vide."
  },
  en: {
    navShop: "Shop", navCart: "Cart", navLogin: "Sign in", navLogout: "Sign out", navAdmin: "Admin",
    searchPlaceholder: "Search an item, a Gamepass...",
    heroEyebrow: "Fast delivery · Secure payment",
    heroTitlePre: "All your favorite", heroTitleAccent: "Roblox", heroTitlePost: "items, in one place.",
    heroLead: "Limited, Dominus, Robux and Gamepass — selected, verified and delivered fast by AZ Store.",
    heroBtnCatalog: "Browse catalog", heroBtnRegister: "Create an account",
    spotlightLabel: "Featured item",
    catalogTitle: "Catalog", all: "All",
    itemsSingular: "item", itemsPlural: "items", noResults: "No item matches your search.",
    outOfStock: "Out of stock",
    footerCopy: "© 2026 AZ Store. Marketplace not affiliated with Roblox Corporation.",
    breadcrumbShop: "Shop",
    addToCart: "Add to cart", quickOrder: "Quick order", orderWhatsapp: "Order on WhatsApp",
    quickOrderTitle: "Quick order", contactLabel: "Roblox username or contact e-mail",
    messageLabel: "Message (optional)", cancel: "Cancel", sendRequest: "Send request",
    regionLabel: "Region", availabilityLabel: "Availability", inStock: "In stock",
    loginTitle: "Welcome back", loginSub: "Sign in to track your orders.",
    emailLabel: "Email address", passwordLabel: "Password", loginBtn: "Sign in",
    noAccount: "No account yet?", createAccount: "Create an account",
    registerTitle: "Create an account", registerSub: "Join AZ Store in a few seconds.",
    pseudoLabel: "Roblox username", registerBtn: "Create my account",
    haveAccount: "Already have an account?", signIn: "Sign in",
    checkoutCartTitle: "Your cart", contactSectionTitle: "Your details",
    bookingTitle: "Delivery slot",
    bookingDesc: "Pick a day and time when you'll be online on Roblox to receive your order.",
    dateLabel: "Date", timeLabel: "Time",
    paymentTitle: "Country & payment method", countryLabel: "Country",
    tunisia: "Tunisia", otherCountry: "Other country",
    postAddressLabel: "Full postal address (delivery)",
    summaryTitle: "Summary", subtotal: "Subtotal", fees: "Fees", total: "Total",
    confirmOrder: "Confirm order", emptyCart: "Your cart is empty."
  },
  ar: {
    navShop: "المتجر", navCart: "السلة", navLogin: "تسجيل الدخول", navLogout: "تسجيل الخروج", navAdmin: "الإدارة",
    searchPlaceholder: "ابحث عن غرض أو Gamepass...",
    heroEyebrow: "توصيل سريع · دفع آمن",
    heroTitlePre: "كل أغراض", heroTitleAccent: "روبلوكس", heroTitlePost: "المفضلة لديك في مكان واحد.",
    heroLead: "Limited، Dominus، Robux و Gamepass — مختارة ومُتحقق منها وتُسلَّم بسرعة عبر AZ Store.",
    heroBtnCatalog: "تصفح الكتالوج", heroBtnRegister: "إنشاء حساب",
    spotlightLabel: "غرض مميز",
    catalogTitle: "الكتالوج", all: "الكل",
    itemsSingular: "غرض", itemsPlural: "أغراض", noResults: "لا يوجد أي غرض مطابق لبحثك.",
    outOfStock: "غير متوفر",
    footerCopy: "© 2026 AZ Store. متجر غير تابع لشركة Roblox Corporation.",
    breadcrumbShop: "المتجر",
    addToCart: "أضف إلى السلة", quickOrder: "طلب سريع", orderWhatsapp: "اطلب عبر واتساب",
    quickOrderTitle: "طلب سريع", contactLabel: "اسم المستخدم في روبلوكس أو بريد التواصل",
    messageLabel: "رسالة (اختياري)", cancel: "إلغاء", sendRequest: "إرسال الطلب",
    regionLabel: "المنطقة", availabilityLabel: "التوفر", inStock: "متوفر",
    loginTitle: "أهلاً بعودتك", loginSub: "سجّل الدخول لمتابعة طلباتك.",
    emailLabel: "البريد الإلكتروني", passwordLabel: "كلمة المرور", loginBtn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟", createAccount: "إنشاء حساب",
    registerTitle: "إنشاء حساب", registerSub: "انضم إلى AZ Store في ثوانٍ معدودة.",
    pseudoLabel: "اسم المستخدم في روبلوكس", registerBtn: "إنشاء حسابي",
    haveAccount: "لديك حساب بالفعل؟", signIn: "تسجيل الدخول",
    checkoutCartTitle: "سلتك", contactSectionTitle: "معلومات التواصل",
    bookingTitle: "موعد التسليم",
    bookingDesc: "اختر يوماً ووقتاً تكون فيه متصلاً بروبلوكس لاستلام طلبك.",
    dateLabel: "التاريخ", timeLabel: "الوقت",
    paymentTitle: "البلد وطريقة الدفع", countryLabel: "البلد",
    tunisia: "تونس", otherCountry: "بلد آخر",
    postAddressLabel: "العنوان البريدي الكامل (التسليم)",
    summaryTitle: "الملخص", subtotal: "المجموع الفرعي", fees: "الرسوم", total: "الإجمالي",
    confirmOrder: "تأكيد الطلب", emptyCart: "سلتك فارغة."
  }
};

const LANG_KEY = "azstore_lang";

const I18n = {
  get() {
    return localStorage.getItem(LANG_KEY) || "fr";
  },
  set(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  },
  t(key) {
    const lang = this.get();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.fr[key] || key;
  }
};

function applyTranslations() {
  const lang = I18n.get();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = I18n.t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", I18n.t(el.getAttribute("data-i18n-placeholder")));
  });
}

function initLangSelector() {
  const selectors = [document.getElementById("langSelect"), document.getElementById("langSelectMobile")]
    .filter(Boolean);
  if (selectors.length === 0) return;
  selectors.forEach(sel => {
    sel.value = I18n.get();
    sel.addEventListener("change", () => {
      I18n.set(sel.value);
      selectors.forEach(other => { other.value = sel.value; });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initLangSelector();
});

document.addEventListener("langchange", () => {
  if (typeof initCategoryChips === "function" && document.getElementById("categoryChips")) initCategoryChips();
  if (typeof loadAndRenderProducts === "function" && document.getElementById("productsGrid")) loadAndRenderProducts();
  if (typeof loadProduct === "function" && document.getElementById("productDetail")) loadProduct();
  if (typeof renderCartDrawer === "function") renderCartDrawer();
  if (typeof renderCheckoutItems === "function") renderCheckoutItems();
});
