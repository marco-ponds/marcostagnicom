#!/usr/bin/env bash

echo 'saving env variables'

DEST_FILE = 'server/config.json'

JSON_STRING='{
    "TELEGRAM_TOKEN": "'"$TELEGRAM_TOKEN"'",
    "TELEGRAM_CHAT_ID": "'"$TELEGRAM_CHAT_ID"'"
}'

echo $JSON_STRING > $DEST_FILE
