ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:${NODE_VERSION}-alpine
WORKDIR /app

COPY package.json ./
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder app/dist ./dist

ENV NODE_ENV=production PORT=3000
EXPOSE 3000

CMD ["node","dist/app.js"]
