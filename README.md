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

La configuration par défaut utilise l'identifiant `postgres` et le mot de passe `sudo` mais il est tout à fait possible de créer un profil avec d'autres identifiants lors de l'exécution de l'API.

### Configuration dans Spring : URL et identifiants

Pour l'API Spring, l'URL de la base de données est configurée dans le fichier `api/src/main/resources/application.yaml`. Pour la production, l'URL se trouve dans le fichier `api/src/main/resources/application-prod.yaml`. Nous reviendrons après sur la mise en production.

On pourrait aussi créer un autre profil, `application-dev.yaml` avec l'URL de la BDD et les identifiants que l'on souhaite et ajouter ce fichier dans le `.gitignore`.  

**En production, on utilise des conteneurs** au sein d'un même réseau docker. Depuis l'API, on peut donc faire appel à la base de données grâce à l'hostname **covid-db** (nom du service définit dans le `docker-compose.yml`.

### Utiliser un profil personnalisé

Pour utiliser un profil personnalisé (*application-mon_profil.yml*), il faut ajouter l'argument suivant, comme paramètre de la JVM, lorsqu'on lance l'application :

```
-Dspring.profiles.active=mon_profil
```

On peut aussi utiliser une variable d'environnement (sous Linux) :

```bash
export spring_profiles_active=mon_profil
```

## Navigations

Dans la patrie angular, la navigations se fais via plusieurs URL 

* **/home permet** de reserver un créneau pour un Rendez-Vous. Cette partie ne nécéssite pas d'authentification car accessible par tout le monde. 
* **/gestion-admin** qui permet a un superadminisatrateur de gerer les administrateur du système. 
* **/centre** qui permets de gerer les centre du système et de visualiser les docteurs et administrateur de chaque centre. 
* **/planing** qui permet de voir les rendez vous pris pour chaque centre. 

## Redirection des requêtes API dans Angular

En développement, le proxy Angular s'occupe de faire les redirections des URL "/api/*" vers "localhost:port-api/api/*". La configuration se fait le fichier **front/src/proxy.conf.json**.

En production, c'est le **serveur nginx** de l'image docker finale qui s'en occupe. La configuration se fait dans le fichier **front/nginx-custom.conf**.

## Lancer l'application en local (sans docker)

### Démarrer le service postgreSQL

Avant de lancer l'API, il faut veiller à ce que le service `postgresql` soit lancé. Sous Linux :

```bash
service postgresql start
``` 

### Compiler et lancer l'API

Il faut se situer dans le dossier `api`.

Pour compiler :

```bash
gradle build
```

Pour exécuter le JAR :

```bash
java -jar build/libs/covid-api-0.0.1-SNAPSHOT.jar
```

### Lancer Angular

On se place dans le dossier `front`.

Il faut dans un premier temps installer les dépendances :

```bash
npm install
```

On peut ensuite lancer le serveur :

```bash
ng serve
```

## Les images docker

Le front et le back ont chacun un Dockerfile dans leur dossier respectif permettant de builder des images docker pour la mise en production. À la base, ils ont été faits pour être buildés au sein de **Jenkins**.

Ce sont des Dockerfile dits "multi-stage build". Ils font intervenir chacun deux images :

- une première permettant de récupérer les dépendances et de builder l'application
- une deuxième plus légère dans laquelle figure seulement un environnement d'exécution et de production

**Pour l'API** :
- on build l'application au sein d'une image comportant **Gradle** et une **JDK**
- puis on place le JAR dans une nouvelle image comportant seulement une **JRE**

**Pour le front** : 
- on build le projet dans une première image comportant **NodeJS**
- puis on met l'application buildée dans une image contenant seulement un serveur **nginx**

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

## Monitoring

### Micrometer

Micrometer a été configuré pour fonctionner avec Prometheus. Deux dépendances ont été ajoutées :
- micrometer-registry-prometheus
- spring-boot-starter-actuator

La première permet d'exposer aisément des métriques au format "Prometheus". La deuxième permet d'exposer des métriques basiques sur la JVM et le serveur Tomcat, à l'adresse `/actuator/prometheus`.

### Prometheus

Une conteneur **prometheus** est d'ailleurs prêt à l'emploi dans le repo et déployable rapidement grâce à un fichier `docker-compose.yml` qui se situe dans le dossier `monitoring`.

Deux docker-compose sont présents :

```
.monitoring
└── prometheus
    ├── dev_linux
    │   ├── config
    │   │   └── prometheus.yml
    │   └── docker-compose.yml
    └── prod
        ├── config
        │   └── prometheus.yml
        └── docker-compose.yml
```

- celui au sein de `dev_linux` : déployer un conteur avec un network en mode host, pour pouvoir intéragir avec l'api lancer en local, en dehors d'un conteneur
- au sein de `prod` : déployer un conteur dans le même network que la stack principale, pour pouvoir intéragir avec l'api lancer dans un conteneur

Il y a même un docker-compose pour démarrer un conteneur **Grafana** et un fichier JSON définissant un dashboard permettant de voir quelque métriques. Cependant, une fois démarré, Grafana demande un peu de configuration.

### Une métrique personnalisée

Une métrique de type *Timer* a été ajoutée. Il s'agit de **saveAppointment_time**, qui mesure le temps que met la fonction **saveAppointment()** à s'exécuter. Cette fonction est appelée pour enregistrer un rendez-vous, lorsqu'une requête **POST** sur la route **/api/public/appointment** est réalisée.

L'ajout de ce Timer ajoute en fait 3 métriques :
- saveAppointment_time_seconds_count (nombre d'appels de la fonction)
- saveAppointment_time_seconds_sum (somme des temps d'éxécution)
- saveAppointment_time_seconds_max (temps d'exécution le plus long sur la dernière minute)

## Api rate limit

Un "rate limit" a été configuré sur l'API, sur l'URL permettant d'obtenir les rendez-vous pour un centre donné.

Le rate limit se base sur le principe de *leaky bucket* et a été implémenté grâce à librairie [bucket4j](https://github.com/bucket4j/bucket4j).

## ETags

Même en s'inspirant grandement de l'exemple du cours, nous ne sommes pas parvenus à faire fonctioner les ETags.

Les champs **IF-NONE-MATCH** ou **IF-MATCH** ne sont pas présents des les en-têtes. 

La configuration se fait dans le fichier `api/src/main/java/org/polytech/covidapi/Configuration/CustomEtagFilter`.

Travail dans la branche etag_back

## Authentification

Un système s'authentifications a été mis en place sur notre application. celle ci permet de différencier un utilisateur lambda ( type patients) des utilisateurs privilégié (docteurs, administrateurs et superadmin).

### Spring-Boot

Tout d'abord, il a fallu ajouter la dépendance SpringSecurity au fichier `build.gradle`

`implementation 'org.springframework.boot:spring-boot-starter-security'`

Ensuite le fichier `api/src/main/java/org/polytech/covidapi/Configuration/SecurityConfig.java` se charge de gérer cette authentification niveau back-end. 

* `SecurityFilterChain` se charge de segmenter l'application pour définir les partie authentifier, la manière d'authentifier ainsi que l'accès au différent type d'utilisateur.
* `PasswordEncoder` permet de mettre en base l'encodage des mot de passe en base de données

Dans la classe UtilisateurServices, la fonction `loadUserByUsername` permet de faire le lien entre l'authentification et la base de donnée. Ici, le nom d'utilisateur fais réference au champ mail, le mot de passe au champ password et le role au champ role. 

Ainsi, lors d'un appel a L'API sur un endpoint authentifié, une pop up apparaitra nous demandant de nous authentifier. Une fois l'authentification réussi, ce sera le token qui fera office d'authentification (partie Authorization du header)

### Angular

Dans la partie front end, nous devont donc récupérer cette pop up sur les appels à API privée. 
Cela se fait grâçe au component interceptor et au component guard. 

La gestion des authentifications passe également par le services login. 

## Frontend

La frontend a été principalement développé avec l'aide d'Angular, TailwindCC et Material.

TailwindCSS permet de gérer le CSS directement avec l'attribut classe des éléments HTML. Tout un tas de classe sont incorporées dans ce framework ce qui nous permet de gérer l'aspect esthétique plus facilement.

`https://tailwindcss.com/`

Material est une bibliothèque Angular qui rajoute beaucoup de composant très utile comme des calendriers, de formulaire ou des grilles.
