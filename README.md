This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## How run this project

First, install dependencies

```
npm install

```

To build the project 

```
npm run build
```

To start a development server
```
npm run dev 
```

To start on production
```
npm start
```

To run with PM2 (production process manager for node apps)

first install pm2 globally on server
```
npm install pm2 -g
```

after run the monitor 
```
NODE_ENV=production API_PORT=8080 pm2 start server.js --name monitor
```


