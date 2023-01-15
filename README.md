# Application web de prises de RDV pour se faire vacciner contre le covid

## Outils nécessaires

Les outils suivants sont nécessaires pour travailler sur le projet :

Pour le backend :

- JDK 17
- Gradle 7
- PostgreSQL 14

Pour le front :

- NodeJS
- Angular CLI

## Connecter l'api à la BDD

### Créer une base de donnée

Il faut tout d'abord créer une base de données PostgreSQL `covid-db`. 

### Configuration dans Spring : URL et identifiants

Pour l'API Spring, l'URL de la base de données est configurée dans le fichier `api/src/main/resources/application.yaml`. Pour la production, l'URL se trouve dans le fichier `api/src/main/resources/application-prod.yaml`. 

On pourrait aussi créer un autre profil, `application-dev.yaml` avec l'URL de la BDD et les identifiants que l'on souhaite et ajouter ce fichier dans le `.gitignore`.  

**En production, on utilise des conteneurs** au sein d'un même réseau docker. Depuis l'API, on peut donc faire appel à la base de données grâce à l'hostname **covid-db**.

### Identifiants personnalisés

On peut aussi créer un autre profil (`application-dev.yaml` par exemple) avec l'URL de la BDD et les identifiants que l'on souhaite et ajouter ce fichier dans le `.gitignore`.

Pour l'utiliser, il faut ajouter l'argument suivant, comme paramètre de la JVM, lorsqu'on lance l'application :

```
-Dspring.profiles.active=dev
```

On peut aussi utiliser une variable d'environnement (sous Linux) :

```bash
export spring_profiles_active=dev
```

## Redirection des requêtes API dans Angular

En développement, le proxy Angular s'occupe de faire les redirections vers des URL "/api" vers "localhost:port-api/api". Le configuration se fait le fichier **front/src/proxy.conf.json**
En production, c'est le serveur nginx de l'image docker finale qui s'en occupe. La configuration se fait dans le fichier **front/nginx-custom.conf**

## Lancer l'application en local (sans docker)

### Démarrer le service postgreSQL

Avant de lancer l'API, il faut veiller à ce que le service `postgresql` soit lancé. Sous Linux :

```bash
service postgresql start
``` 

### Compiler et lancer l'API

```bash
cd api
gradle build -x test
java -jar build/libs/covid-api-0.0.1-SNAPSHOT.jar

```

### Lancer Angular

Il faut dans un premier temps installer les dépendances :

```bash
cd ./front
npm install
ng serve
```

## Builder en local et lancer les conteneurs docker

```bash 
docker build -t covid-front ./front
docker build -t covid-api ./api
```

Les lancer grâce au fichier docker-compose.yml  :

```bash
docker compose up
```

## Micrometer

Micrometer a été configuré pour fonctionner avec Prometheus. Deux dépendances ont été ajoutées :
- micrometer-registry-prometheus
- spring-boot-starter-actuator

La première permet d'exposer aisément des métriques au format de Prometheus. La deuxième permet d'exposer des métriques basiques sur la JVM et le serveur Tomcat, à l'adresse `/actuator/prometheus`.