// ==========================================================================
// AZ STORE — Devises (js/currency.js)
// Les prix sont stockés en base (Supabase) en EUR. Ce module convertit
// uniquement l'AFFICHAGE selon la devise choisie par le visiteur.
// Taux fixes approximatifs — à ajuster si besoin.
// ==========================================================================

const CURRENCIES = {
  eur: { label: "EUR", symbol: "€", rate: 1,     format: (v) => `${v.toFixed(2)} €` },
  usd: { label: "USD", symbol: "$", rate: 1.08,  format: (v) => `${v.toFixed(2)} $` },
  dt:  { label: "DT",  symbol: "DT", rate: 3.40, format: (v) => `${v.toFixed(2)} DT` },
  sar: { label: "SAR", symbol: "SAR", rate: 4.06, format: (v) => `${v.toFixed(2)} SAR` }
};

const CURRENCY_KEY = "azstore_currency";

const Currency = {
  get() {
    return localStorage.getItem(CURRENCY_KEY) || "eur";
  },
  set(code) {
    if (!CURRENCIES[code]) return;
    localStorage.setItem(CURRENCY_KEY, code);
    document.dispatchEvent(new CustomEvent("currencychange", { detail: { code } }));
  },
  /** Convertit un prix EUR (base) vers la devise choisie */
  convert(priceEur, code = this.get()) {
    const c = CURRENCIES[code] || CURRENCIES.eur;
    return Number(priceEur) * c.rate;
  },
  /** Formate un prix EUR (base) dans la devise choisie, ex: "34.90 DT" */
  format(priceEur, code = this.get()) {
    const c = CURRENCIES[code] || CURRENCIES.eur;
    return c.format(this.convert(priceEur, code));
  }
};

function initCurrencySelector() {
  const selectors = [document.getElementById("currencySelect"), document.getElementById("currencySelectMobile")]
    .filter(Boolean);
  if (selectors.length === 0) return;
  selectors.forEach(sel => {
    sel.value = Currency.get();
    sel.addEventListener("change", () => {
      Currency.set(sel.value);
      selectors.forEach(other => { other.value = sel.value; });
    });
  });
}

// Rafraîchit tous les prix affichés sur la page courante quand la devise change
document.addEventListener("currencychange", () => {
  if (typeof loadAndRenderProducts === "function" && document.getElementById("productsGrid")) loadAndRenderProducts();
  if (typeof loadProduct === "function" && document.getElementById("productDetail")) loadProduct();
  if (typeof renderCartDrawer === "function") renderCartDrawer();
  if (typeof renderCheckoutItems === "function") renderCheckoutItems();
});

document.addEventListener("DOMContentLoaded", initCurrencySelector);
