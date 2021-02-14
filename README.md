# PowerLinks

[![Build Status](https://travis-ci.org/TuxBoy/PowerLinksV2.svg?branch=master)](https://travis-ci.org/TuxBoy/PowerLinksV2)

PowerLinks est un site qui permet d'ajouter et de gérer des liens de divers sites externes liés au développement web
ou technologie de l'informatique.

## Prérequis

- Docker
- Docker compose
- Yarn

## Démarrer

Lancer l'environnement de développement sous Docker :

```bash
$ docker-compose up -d
```

Pour la compilation des JS/CSS :

- Installer avant les dépendances pour le JS :

```bash
$ yarn
```

- Lancer le serveur :

```bash
$ yarn run dev-server
```

## Lancer les tests

```bash
$ docker-compose run php ./vendor/bin/phpunit
```

## Technologies utilisées 

### Backend

- Symfony 5.1 / PHP 7.4
- MariaDB

### Frontend

- SCSS
- Javascript / Typescript (Custum elements)
