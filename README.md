# Matoub Rebelle - Site Officiel

Un site web moderne et complet dédié à **Matoub Lounes**, le chanteur et compositeur berbère (kabyle) de renommée internationale, connu pour son engagement social, politique et culturel.

```
\  |  /
 \_|_/ 
  _|_  
 / | \ 
/  |  \
```

## 🎯 À propos du projet

Ce site web est une plateforme complète regroupant :
- **Biographie** : Vie et parcours de Matoub Lounes
- **Discographie** : Albums, discographie complète
- **Contenu multimédia** : Vidéos, audio, galerie photos
- **Dossier d'assassinat** : Documentation et enquête sur sa mort
- **Actualités** : Dernières news et mises à jour
- **Ressources** : Bibliographie, citations, liens utiles
- **Interaction** : Formulaires de contact, livre d'or, quiz

## 🛠 Stack technologique

- **Framework** : [Next.js 16](https://nextjs.org/) (avec TypeScript)
- **React** : 19.2.4
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants UI** : [Radix UI](https://www.radix-ui.com/) + [shadcn](https://shadcn.com/)
- **Formulaires** : [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Contenu** : [MDX](https://mdxjs.com/) pour le contenu dynamique
- **Multimédia** : 
  - Audio : [react-h5-audio-player](https://www.npmjs.com/package/react-h5-audio-player)
  - Vidéo : [react-player](https://github.com/cookpete/react-player)
  - Galerie : [yet-another-react-lightbox](https://yet-another-react-lightbox.netlify.app/)
- **Internationalisation** : [next-intl](https://next-intl-docs.vercel.app/) pour le support multilingue
- **Email** : [Resend](https://resend.com/) pour l'envoi d'emails
- **Analytics** : Vercel Analytics & Speed Insights

## 📁 Structure du projet

```
matoub-rebelle/
├── app/                      # Appli Next.js (App Router)
│   ├── (site)/              # Routes principales du site
│   │   ├── le-rebelle/      # Section biographie et parcours
│   │   ├── discographie/    # Albums et discographie
│   │   ├── audio/           # Contenu audio (extraits, émissions radio)
│   │   ├── videos/          # Vidéos par catégorie
│   │   ├── news/            # Actualités et blog
│   │   ├── contact/         # Formulaire de contact
│   │   ├── livre-dor/       # Livre d'or visiteurs
│   │   ├── divers/          # Ressources (liens, bibliographie)
│   │   └── plan-du-site/    # Sitemap
│   ├── robots.ts            # Configuration robots.txt
│   └── layout.tsx           # Layout global
├── components/              # Composants React réutilisables
│   ├── layout/             # Composants de layout (Nav, Footer, etc.)
│   ├── features/           # Composants métier (Audio, Vidéo, Galerie, etc.)
│   ├── common/             # Composants génériques (Pagination, etc.)
│   └── ui/                 # Composants UI (boutons, cartes, etc.)
├── content/                # Données statiques en JSON
│   ├── albums.json         # Discographie
│   ├── videos.json         # Catalogue vidéo
│   ├── news.json           # Actualités
│   ├── photos.json         # Galerie photos
│   ├── quotes.json         # Citations
│   ├── bibliographie.json  # Ressources
│   └── paroles.json        # Paroles de chansons
├── lib/                    # Utilitaires et helpers
├── messages/               # Traductions i18n
├── public/                 # Assets statiques
├── next.config.ts          # Configuration Next.js
├── tsconfig.json           # Configuration TypeScript
├── tailwind.config.ts      # Configuration Tailwind CSS
└── postcss.config.mjs      # Configuration PostCSS
```

## 🚀 Démarrage rapide

### Prérequis
- **Node.js** 18+ et npm/yarn
- Un navigateur moderne

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/zayzou/matoub-rebelle.git
cd matoub-rebelle
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
Créer un fichier `.env.local` :
```env
# Resend (email)
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key

# Analytics (optionnel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit l'application pour la production |
| `npm start` | Lance l'application en production |

## 🌐 Fonctionnalités principales

### 📊 Sections du site
- **Biographie** : Récit chronologique et biographique
- **Discographie** : Albums complets avec métadonnées
- **Audio** : Extraits de chansons et émissions radio
- **Vidéos** : Concerts, interviews, documentaires
- **Photos** : Galerie photos interactive
- **Actualités** : Blog avec système de catégorisation
- **Quiz** : Quiz interactif sur Matoub
- **Contact** : Formulaire de contact avec validation
- **Livre d'or** : Formulaire de messages visiteurs

### ⚙️ Capacités techniques
- ✅ **Responsive design** : Optimisé pour mobile, tablet, desktop
- ✅ **SEO optimisé** : Métadonnées, structured data, sitemap
- ✅ **Multilingue** : Support de plusieurs langues via next-intl
- ✅ **Performance** : Optimisation images, lazy loading
- ✅ **Accessibilité** : Normes WCAG respectées
- ✅ **Analytics** : Suivi d'audience avec Vercel

## 📝 Ajout de contenu

### Ajouter une actualité
1. Modifier `content/news.json`
2. Ajouter une entrée avec titre, description, date, contenu
3. Redémarrer le serveur dev (ou utiliser hot reload)

### Ajouter un album
1. Modifier `content/albums.json`
2. Inclure titre, artiste, année, couverture, tracklist
3. Les données s'affichent automatiquement

### Ajouter des photos
1. Placer les images dans `public/images/`
2. Ajouter les références dans `content/photos.json`
3. La galerie s'met à jour

## 🔍 SEO et accessibilité

Le site inclut :
- Structured data (JSON-LD) pour meilleur indexation
- Meta tags optimisés
- Breadcrumb navigation
- Sitemap dynamique (`/plan-du-site`)
- robots.txt configuré
- Images optimisées Next.js

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE) - voir le fichier LICENSE pour plus de détails.

## 👤 À propos de Matoub Lounes

**Matoub Lounes** (1956-1998) était un musicien, chanteur-compositeur et intellectuel algérien de culture kabyle. Il était connu pour :
- Son engagement pour les droits linguistiques et culturels de l'Amazighe
- Sa critiques social et politique
- Ses chansons engagées et poétiques
- Son assassinat mystérieux le 25 juin 1998

Plus d'informations sur le site : [matoub-rebelle.com](https://matoub-rebelle.com)

## 📞 Contact & Support

Pour toute question ou signaler un bug :
- 📧 Email : Via le formulaire de contact du site
- 🐛 Issues : [GitHub Issues](https://github.com/zayzou/matoub-rebelle/issues)

---

**Fait avec ❤️ en hommage à Matoub Lounes**
