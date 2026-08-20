# 🏁 Tournoi des Bâtons dans les Roues

Site web d'un tournoi Mario Kart où l'aléatoire « met des bâtons dans les roues ».
Le site est accessible via ce lien : `https://gauthier-gch.github.io/tournois_mk8/`.

## Onglets

- **Règles** — présentation et fonctionnement du tournoi.
- **Avatars** — génération aléatoire (pilote / kart / roues / parapente) pour 4 joueurs,
  façon machine à sous. Chaque encadré peut être relancé **une fois**.
- **Malus** — une roulette par joueur. Les 4 roues tournent en même temps :
  - chaque joueur a **3 chances sur 4** d'écoper d'un malus ;
  - jamais deux fois le même malus… **sauf le malus duo**, qui touche toujours **2 joueurs**.

## Fichiers

| Fichier      | Rôle                                            |
|--------------|-------------------------------------------------|
| `index.html` | structure de la page (les 3 onglets)            |
| `style.css`  | thème « course / chaos coloré »                 |
| `data.js`    | items Mario Kart + liste des malus              |
| `script.js`  | onglets, machine à sous, roulettes des malus    |

## Mise en ligne (GitHub Pages)

1. Pousser les 4 fichiers à la racine du dépôt.
2. *Settings → Pages → Branch : `main` / `root`*.
3. Le site est accessible à `https://<utilisateur>.github.io/<dépôt>/`.

> Aucune dépendance à installer : tout fonctionne en HTML/CSS/JS pur.

## Personnalisation rapide

- **Couleurs** : variables CSS en haut de `style.css` (`:root { … }`).
- **Malus** : objet `malusData` dans `data.js`.
- **Items** : objet `marioKartData` dans `data.js`.
