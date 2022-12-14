### BUILD FOR LOCAL DEVELOPMENT
FROM node:18-alpine As development

WORKDIR /usr/src/green-your-look

COPY --chown=node:node package*.json ./

COPY --chown=node:node public/package*.json ./public/

RUN npm ci --legacy-peer-deps

RUN npm --prefix ./public ci

COPY --chown=node:node . .

USER node

### BUILD FOR PRODUCTION
FROM node:18-alpine As build

WORKDIR /usr/src/green-your-look

COPY --chown=node:node package*.json ./

COPY --chown=node:node public/package*.json ./public/

COPY --chown=node:node --from=development /usr/src/green-your-look/node_modules ./node_modules

COPY --chown=node:node --from=development /usr/src/green-your-look/public/node_modules ./public/node_modules

COPY --chown=node:node . .

RUN npx nest build --webpack

RUN npm --prefix ./public run build

ENV NODE_ENV production

RUN npm ci --only=production --legacy-peer-deps

RUN npm --prefix ./public ci --only=production

RUN npm cache clean --force

RUN npm --prefix ./public cache clean --force

USER node

### PRODUCTION
FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/green-your-look/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/green-your-look/public/node_modules ./public/node_modules

COPY --chown=node:node --from=build /usr/src/green-your-look/dist ./dist

COPY --chown=node:node --from=build /usr/src/green-your-look/public/dist ./public/dist

CMD ["node", "dist/main.js"]

EXPOSE 8542
