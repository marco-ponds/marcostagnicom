#!/usr/bin/env bash

APP_NAME=marcostagnicom

echo 'building'
npm i
npm run build

echo 'removing previous instance'
pm2 delete $APP_NAME || echo 'App is new, no need to remove'

echo 'starting new instance'
pm2 start npm --name $APP_NAME -- start

echo 'saving pm2 configuration'
pm2 save
