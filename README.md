Pour lancer une base de donnée postgreSQL : 

```
docker-compose up -d
```

Installer les dépendances :

```
npm install
```

Initier les variables d'environnement :

```
cp .env.example .env
```

Lancer les migrations de better-auth : 

```
npx @better-auth/cli@latest generate
```

Mettre à jour les migrations avec drizzle et les appliquer :

```
npx drizzle-kit generate && npx drizzle-kit migrate
```

Documentation Better-Auth && Better-auth-ui:

https://www.better-auth.com/

https://better-auth-ui.com/