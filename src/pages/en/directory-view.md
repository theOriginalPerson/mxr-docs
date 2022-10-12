---
title: Project Directory View
description: This is what your overall Astro + Strapi project directory should look like
layout: ../../layouts/MainLayout.astro
---

```markdown
main_project_folder/
    frontend_astro_folder/
        ├── src/
        │   ├── components/
        │   │   ├── Header.astro
        │   │   └-─ Button.jsx
        │   ├── layouts/
        │   │   └-─ PostLayout.astro
        │   └── pages/
        │   │   ├── posts/
        │   │   │   ├── post1.md
        │   │   │   ├── post2.md
        │   │   │   └── post3.md
        │   │   └── index.astro
        │   └── styles/
        │       └-─ global.css
        ├── public/
        │   ├── robots.txt
        │   ├── favicon.svg
        │   └-─ social-image.png
        ├── astro.config.mjs
        ├── package.json
        └── tsconfig.json
    
    backend_strapi_folder/
        ├──── .cache # files used to build the admin panel
        ├──── .tmp
        ├──── build # build of the admin panel
        ├──── config # API configurations
        │     ├ api.js
        │     ├ admin.js
        │     ├ cron-tasks.js
        │     ├ database.js
        │     ├ middlewares.js
        │     ├ plugins.js
        │     └ server.js
        ├──── database
        │     └──── migrations
        ├──── node_modules # npm packages used by the project
        ├──── public # files accessible to the outside world
        │     └──── uploads
        ├──── src
        │     ├──── admin # admin customization files
        │           ├──── extensions # files to extend the admin panel
        │     │     ├ app.js
        │     │     └ webpack.config.js
        │     ├──── api # business logic of the project split into subfolders per API
        │     │     └──── (api-name)
        │     │           ├──── content-types
        │     │           │     └──── (content-type-name)
        │     │           │           └ lifecycles.js
        │     │           │           └ schema.json
        │     │           ├──── controllers
        │     │           ├──── middlewares
        │     │           ├──── policies
        │     │           ├──── routes
        │     │           ├──── services
        │     │           └ index.js
        │     ├──── components
        │     │     └──── (category-name)
        │     │           ├ (componentA).json
        │     │           └ (componentB).json
        │     ├──── extensions # files to extend installed plugins
        │     │     └──── (plugin-to-be-extended)
        │     │           ├──── content-types
        │     │           │     └──── (content-type-name)
        │     │           │           └ schema.json
        │     │           └ strapi-server.js
        │     ├──── middlewares
        │     │     └──── (middleware-name).js
        │     ├──── plugins # local plugins files
        │     │     └──── (plugin-name)
        │     │           ├──── admin
        │     │           │     └──── src
        │     │           │           └ index.js
        │     │           ├──── server
        │     │           │     ├──── content-types
        │     │           │     ├──── controllers
        │     │           │     └──── policies
        │     │           ├ package.json
        │     │           ├ strapi-admin.js
        │     │           └ strapi-server.js
        │     ├─── policies
        │     └ index.js # include register(), bootstrap() and destroy() functions
        ├ .env
        └ package.json

```

Notice how the `frontend` and `backend` folders are separated here. This is how you will normally structure any Strapi-as-a-backend app, along with many other non-Strapi apps.