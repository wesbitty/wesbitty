# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

# set working directory
WORKDIR /app

# Copy package and lockfile
COPY package.json package-lock.json ./
COPY wesbitty/database ./prisma/
RUN apt-get -qy update && apt-get -qy install openssl

# install deps
RUN npm ci

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# build project
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=bloguser:bloggroup /app/.next/standalone ./
COPY --from=builder --chown=bloguser:bloggroup /app/.next/static ./.next/static

USER bloguser

EXPOSE 3000
ENV PORT 3000

# enable run as production
ENV NODE_ENV=production

# start app
CMD ["node", "server.js"]
