#!/bin/bash

#make dir
dirname="/home/ubuntu/workspace/itunes-topsong-rss/"
mkdir -p $dirname

#echo filepath
filename="${dirname}/hourly-topsong-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"

curl -s -o $filename -H "User-Agent: NYobikou2-10TestBot; prog@d2deck.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml