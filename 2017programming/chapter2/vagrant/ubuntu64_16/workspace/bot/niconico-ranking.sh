#!/bin/bash

# make dir
dirname="/home/ubuntu/workspace/niconico-ranking-rss"
mkdir -p $dirname

#echo filepath
filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"

# get xml
curl -s -o $filename -H "User-Agent: NYobikou2-10TestBot; prog@d2deck.com" http://www.nicovideo.jp/ranking/fav/hourly/all?rss=2.0&lang=ja-jp