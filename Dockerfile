FROM node:16.17.0-alpine3.15

RUN apk add --no-cache libc6-compat
RUN npm i -g npm

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY apps/www/package.json .
COPY package-lock.json .

RUN npm install --omit=optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

# need to install linux specific swc builds
RUN npm install -D @swc/cli @swc/core

COPY apps/www .

RUN npm run build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

CMD [ "npm", "start" ]
