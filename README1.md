Configuration de la Base de Données (blog_db)

Ce projet utilise un module de connexion Node.js pour interagir avec une base de données MySQL. Le fichier db.js gère l'initialisation de la connexion et l'exportation du client de base de données.

Avant de lancer le projet, on s'assure d'avoir installé :

    Node.js (v14 ou supérieure recommandée)

    MySQL Server

    Un gestionnaire de paquets comme npm ou yarn

🚀 Installation

    Installer les dépendances :
    Dans le terminal, exécute la commande suivante pour installer le pilote MySQL pour Node.js :
    Bash

npm install mysql2

Configuration de MySQL :
On s'assure que le serveur MySQL est actif et crée la base de données correspondante :
SQL

    CREATE DATABASE blog_db;

 Structure du code

Le fichier db.js contient les paramètres de connexion suivants :
Paramètre	Valeur
Host	localhost
User	root
Password	ouimoi2006
Database	blog_db
 Utilisation

Pour utiliser cette connexion dans d'autres fichiers du projet (par exemple, dans le fichier principal app.js ou index.js),on importe simplement le module :
JavaScript

const db = require('./db');

// Exemple de requête
db.query('SELECT * FROM articles', (err, results) => {
    if (err) throw err;
    console.log(results);
});

 Sécurité (Bonnes pratiques)

Actuellement, tes identifiants (mot de passe) sont écrits en "dur" dans le code. Pour une mise en production, il est fortement recommandé d'utiliser des variables d'environnement avec un fichier .env :

    Installe dotenv : npm install dotenv

    Remplace les valeurs par process.env.DB_PASSWORD, etc.
