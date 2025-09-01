# israelorpalestine
Html code pour savoir si tu es palestine ou  israel

# 🌍 Vote Palestine vs Israël

Un site web interactif où les utilisateurs peuvent voter pour **Palestine** ou **Israël**.  
Chaque clic incrémente un compteur en temps réel, et le fond change automatiquement pour afficher le drapeau du camp dominant.  

---

## ✨ Fonctionnalités

- ✅ Deux boutons : **Palestine** et **Israël**  
- ✅ Compteur synchronisé pour tous les utilisateurs  
- ✅ Fond par défaut : `noir.png`  
- ✅ Fond dynamique :
  - **Palestine domine** → `palestine.png`
  - **Israël domine** → `israel.png`
- ✅ Design responsive (PC + mobile)  
- ✅ Effets visuels modernes :
  - Hover (zoom + ombre)
  - Ripple effect (onde animée au clic)
- ✅ Musique de fond (`musique.mp4`) qui se lance automatiquement et tourne en boucle  

---

## 📂 Structure du projet

├── index.html # Page principale (frontend)
├── server.js # Serveur Node.js (backend)
├── votes.json # Stockage des votes
├── noir.png # Fond par défaut
├── palestine.png # Fond si Palestine domine
├── israel.png # Fond si Israël domine
└── musique.mp4 # Musique de fond

---

## 🚀 Installation et lancement

1. Clone le dépôt :  
   ```bash
   git clone https://github.com/ton-pseudo/vote-palestine-israel.git
   cd vote-palestine-israel

   Installe les dépendances :

npm install express


Lance le serveur :

node server.js


Ouvre ton navigateur et va sur :

http://localhost:3000

🛠 Technologies utilisées

Frontend : HTML, CSS, JavaScript

Backend : Node.js + Express

Stockage : JSON local

⚠️ Remarques

Projet expérimental (aucune vocation politique ou officielle).

Les votes sont stockés dans un simple fichier votes.json.
👉 Pour un vrai déploiement, il est conseillé d’utiliser une base de données (SQLite, PostgreSQL, MongoDB, etc.).
