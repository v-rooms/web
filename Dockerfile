FROM node:13.3.0 AS build
RUN npm install -g @angular/cli

WORKDIR /build

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN npm i
RUN ng build --prod

FROM nginx
COPY --from=build /build/dist/vrooms /usr/share/nginx/html