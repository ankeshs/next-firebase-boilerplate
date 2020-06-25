# NextJS - Firebase - Express Boilerplate

A fully functional boilerplate with NextJS / React that can be deployed on Firebase Cloud functions + Firebase hosting setup. Supports NextJS service render, API only routes using express and static file serving.

The project has 3 parts:
- NextJS app: *src/app*
- Express APIs + dynamic routes for nextjs: *src/server*
- Static files: *src/static*

Can also be hosted independently without Firebase on any nodejs environment.

## How to use

```bash
git clone https://github.com/ankeshs/next-firebase-boilerplate
cd next-firebase-boilerplate
yarn install
```

Set up firebase:
- create a project through the [firebase web console](https://console.firebase.google.com/)
- grab the projects ID from the web consoles URL: https://console.firebase.google.com/project/<projectId>
- update the `.firebaserc` default project ID to the newly created project

Install project
```bash
yarn install
```

Start development server - static files are served by express
```bash
yarn dev
```

Create production build to serve on a node server
```bash
yarn build:prod
```

Run production build on a node server (without using Firebase)
```bash
yarn start
```

Run Firebase locally for testing - static files are served by hosting emulator, express / nextjs served by cloud functions emulator
```bash
yarn serve
```

Deploy it to the cloud with Firebase
```bash
yarn deploy
```

Extends on the example: [Next.js with Firebase Hosting Rewrites](https://github.com/firebase/functions-samples/tree/master/nextjs-with-firebase-hosting)
