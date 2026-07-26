# AZ Store — Guide de mise en ligne

Site statique (HTML/CSS/JS, sans framework) + Supabase (base de données + authentification) + Vercel (hébergement).

## 1. Configurer Supabase

1. Ouvre ton projet Supabase → **SQL Editor** → **New query**.
2. Colle le contenu du fichier `supabase-schema.sql` et clique sur **Run**.
   Cela crée les tables `products` et `orders`, active la Row Level Security (RLS)
   et insère 6 produits de démonstration.
3. Va dans **Authentication → Providers → Email** puis désactive **"Confirm email"**
   (déjà demandé dans le cahier des charges : pas de confirmation d'e-mail).
4. Crée ton compte admin en passant par `register.html` avec l'adresse exacte :
   `admin@azstore.com`
   (Si tu veux une autre adresse admin, remplace-la partout : dans
   `js/supabase.js` → `ADMIN_EMAIL`, et dans **toutes** les policies RLS du
   fichier `supabase-schema.sql` — relance le script SQL après modification.)

Les clés Supabase (URL + clé anonyme) sont déjà renseignées dans `js/supabase.js`.

## 2. Remplacer le logo

Un logo temporaire `logo.jpeg` a été généré. Remplace simplement ce fichier
(même nom, à la racine du projet) par ton propre logo carré (200×200px conseillé).

## 3. Configurer EmailJS (commande rapide par e-mail)

1. Crée un compte gratuit sur https://www.emailjs.com
2. Ajoute un service e-mail (Gmail, Outlook...) → note le **Service ID**.
3. Crée un template avec les variables : `{{product_title}}`, `{{price}}`,
   `{{customer_contact}}`, `{{message}}` → note le **Template ID**.
4. Récupère ta **Public Key** dans Account → General.
5. Renseigne ces 3 valeurs dans `js/config.js` (`SITE_CONFIG.emailjs`).

## 4. Configurer WhatsApp

Dans `js/config.js`, remplace `whatsappNumber` par ton numéro au format
international sans le "+" (ex: `212612345678`).

## 5. Déployer sur Vercel

1. Pousse ce dossier dans un repo GitHub.
2. Sur https://vercel.com → **New Project** → importe le repo.
3. Framework Preset : **Other** (site statique, pas de build nécessaire).
4. Déploie. C'est tout — aucune variable d'environnement n'est requise
   côté Vercel puisque les clés Supabase sont publiques (clé "anon").

## 6. Devises, paiement, images et langues (nouveautés)

- **Devises** : sélecteur EUR / USD / DT / SAR dans la navbar. Les prix sont
  stockés en EUR dans Supabase et convertis à l'affichage via des taux fixes
  définis dans `js/currency.js` (`CURRENCIES`). Ajuste ces taux si besoin.
- **Paiement par pays** (page `checkout.html`) : un sélecteur "Pays" affiche
  automatiquement les méthodes disponibles — **Tunisie** → Robux + Paiement à
  la livraison (La Poste, avec champ adresse) ; **Autre pays** → Robux
  uniquement. Après confirmation, WhatsApp s'ouvre toujours pour finaliser la
  coordination avec le client.
- **Images produit** : dans l'admin (`admin/index.html`), un champ "Image
  (lien URL)" optionnel permet de coller un lien direct vers une image
  (colonne `image_url` en base). Si vide, l'icône SVG par défaut est utilisée.
  Si le lien est cassé, l'icône réapparaît automatiquement.
- **Langues** : sélecteur FR / EN / AR dans la navbar de toutes les pages
  publiques. L'arabe bascule automatiquement l'interface en RTL. Les textes
  fixes de l'interface sont traduits (`js/i18n.js`) ; les données saisies en
  admin (titres, descriptions, catégories) restent dans la langue où tu les
  as entrées — pense à les rédiger dans la langue principale de ton public,
  ou ajoute plusieurs produits si tu veux du contenu multilingue.
  L'espace admin reste en français uniquement.

## Structure des fichiers

```
index.html         Page d'accueil + catalogue + filtres + recherche
product.html        Fiche produit (description, prix, commande rapide, WhatsApp)
login.html          Connexion
register.html       Inscription
checkout.html       Panier, créneau de livraison, moyens de paiement
admin/index.html    Tableau de bord admin (protégé)
admin/admin.js       Logique CRUD produits + gestion commandes
js/supabase.js       Connexion Supabase
js/config.js         WhatsApp + EmailJS (à personnaliser)
js/currency.js        Devises (EUR/USD/DT/SAR) et taux de conversion
js/i18n.js             Traductions FR/EN/AR + gestion RTL
js/auth.js            Connexion / inscription / déconnexion
js/products.js       Récupération + affichage des produits, icônes SVG
js/cart.js            Panier localStorage + tiroir panier
supabase-schema.sql  Script SQL (tables + RLS + données de démo)
```

## Notes importantes

- Le panier est stocké en `localStorage` (clé `azstore_cart`) : il persiste
  par navigateur, pas par compte.
- La RLS Supabase autorise tout le monde à **lire** les produits, mais seul
  `admin@azstore.com` peut **créer/modifier/supprimer** des produits ou changer
  le statut d'une commande.
- Aucune émoji n'est utilisée dans l'interface : tous les pictogrammes sont
  des SVG (voir `ICONS` dans `js/products.js`).
