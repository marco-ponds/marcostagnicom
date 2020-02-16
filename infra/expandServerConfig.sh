#!/usr/bin/env bash

echo 'saving env variables'

JSON_STRING='{
    "TELEGRAM_TOKEN": "'"$TELEGRAM_TOKEN"'",
    "TELEGRAM_CHAT_ID": "'"$TELEGRAM_CHAT_ID"'"
}'

echo $JSON_STRING > server/config.json

cat server/config.json
