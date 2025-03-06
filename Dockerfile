FROM node:18-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda etapa

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/clinicaveterinariafront/browser /usr/share/nginx/html