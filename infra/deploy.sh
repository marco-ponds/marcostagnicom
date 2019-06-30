#!/usr/bin/env bash

APP_NAME=marcostagnicom

echo 'stopping previous instance'
pm2 stop $APP_NAME


echo 'starting new instance'
NODE_ENV=production pm2 start server/index --name $APP_NAME

echo 'saving pm2 configuration'
pm2 save
