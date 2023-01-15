# Application web de prise de RDV pour se faire vacciner contre le COVID-19

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

Pour l'API Spring, l'URL de la base de données est configurée dans le fichier `api/src/main/resources/application.yaml`. Pour la production, l'URL se trouve dans le fichier `api/src/main/resources/application-prod.yaml`. Nous reviendrons après sur la mise en production.

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

En développement, le proxy Angular s'occupe de faire les redirections vers des URL "/api" vers "localhost:port-api/api". La configuration se fait le fichier **front/src/proxy.conf.json**
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
``
On peut ensuite lancer le serveur :

``bash
ng serve
```

## Les images docker

Le front et le back ont chacun un Dockerfile associé permettant de builder des images docker pour la mise en production. À la base, ils ont été faits pour être buildés au sein de **Jenkins**.

Ce sont des Dockerfile dits "multi-stage build". Ils font intervenir chacun deux images :
- une première permettant de récupérer les dépendances et de builder l'application
- une deuxième plus légère dans laquelle figure seulement un environnement d'exécution et de production

Pour l'API :
- on build l'application au sein d'une image comportant **Gradle** et une **JDK**
- puis on place le JAR dans une nouvelle image comportant seulement une **JRE**

Pour le front : 
- on build le projet dans une première image comportant **NodeJS**
- puis ont met l'application buildée dans une image contenant seulement un serveur **nginx**

### Builder en local et lancer les conteneurs docker

On se place ici à la racine du projet.

```bash 
docker build -t covid-front ./front
docker build -t covid-api ./api
```

On peut ensuite les lancer grâce au fichier docker-compose.yml  :

```bash
docker compose up
```

## Monitoring : Micrometer

Micrometer a été configuré pour fonctionner avec Prometheus. Deux dépendances ont été ajoutées :
- micrometer-registry-prometheus
- spring-boot-starter-actuator

La première permet d'exposer aisément des métriques au format de Prometheus. La deuxième permet d'exposer des métriques basiques sur la JVM et le serveur Tomcat, à l'adresse `/actuator/prometheus`.

## Api rate limit

Un "rate limit" a été configuré sur l'API, sur l'URL permettant d'obtenir les rendez-vous pour un centre donné.

Le rate limit se base sur le principe de *leaky bucket* et a été implémenté grâce à librairie [bucket4j](https://github.com/bucket4j/bucket4j).

## Frontend

La frontend a été principalement développé avec l'aide d'Angular, TailwindCC et Material.
TailwindCSS permet de gérer le CSS directement avec l'attribut classe des éléments HTML. Tout un tas de classe sont incorporées dans ce framework ce qui nous permet de gérer l'aspect esthétique plus facilement.
`https://tailwindcss.com/`
Material est une bibliothèque Angular qui rajoute beaucoup de composant très utile comme des calendriers, de formulaire ou des grilles.
