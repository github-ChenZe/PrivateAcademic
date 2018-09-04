#!/bin/bash

NAME=$((RANDOM))

echo "Content-type: text/html"
echo "Access-Control-Allow-Origin: *"
echo ""

eval "cat tmp/head.tex > tmp/${NAME}.tex"

while read line
  do eval "echo $line | grep -o -P \"TEX:(.*)\" | cut -c5- >> tmp/${NAME}.tex"
done

eval "cat tmp/end.tex >> tmp/${NAME}.tex"

eval "latex -output-directory=tmp tmp/${NAME}.tex > /dev/null"
eval "dvisvgm --output="tmp/%f" tmp/${NAME}.dvi"
eval "cat tmp/${NAME}.svg"

exit 0

