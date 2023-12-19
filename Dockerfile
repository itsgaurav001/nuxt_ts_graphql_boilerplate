FROM node:18-alpine as frontend-build

# Copy the frontend code and the related dependencies
WORKDIR /frontend
COPY frontend/package.json ./
COPY frontend/yarn.lock ./
COPY frontend/tsconfig.json ./

# Install frontend dependencies
RUN yarn

# Build the frontend
COPY ./frontend .
RUN yarn build

FROM node:18-alpine as api

# Copy the API code and the realated dependencies
WORKDIR /api
COPY api/package.json ./
COPY api/yarn.lock ./

# Install API dependencies
RUN apk add --no-cache vips-dev fftw-dev build-base gcc autoconf automake zlib-dev libpng-dev nasm bash
RUN yarn install
COPY ./api .
RUN yarn build

# Install the sharp package
RUN apk add --no-cache vips-dev

# Expose port 1337 and run the API server
EXPOSE 1337
CMD ["yarn", "start"]

# Create the frontend image
FROM node:18-alpine AS frontend

WORKDIR /app
COPY --from=frontend-build /frontend/.output ./

# Expose port 3000 and run the frontend server
EXPOSE 3000
CMD ["node", "server/index.mjs"]