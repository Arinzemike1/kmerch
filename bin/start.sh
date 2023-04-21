#!/usr/bin/env bash

cp ./bin/nginx.conf /etc/nginx/sites-available/default
# chown -R www-data:www-data /src

service nginx start
npm install
npm rebuild

if [ $APPLICATION_ENV == "staging" -o $APPLICATION_ENV == "production" ]; then
   npm run build && npm run start
else
     npm run build && npm run dev
fi