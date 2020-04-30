#!/bin/bash

FILE=$1

if [ -d $FILE ]
    then
    cd $FILE
    FILECOUNT="$(find . -type f -printf x | wc -c)"
    DIRCOUNT="$(find . -type d  -printf x | wc -c)"
    DIR=`echo "$DIRCOUNT - 1" | bc`
        echo "O $FILE tem $FILECOUNT arquivos."
        echo "O $FILE tem $DIR diretórios"
    else
    echo "O argumento $FILE não é um diretório!"
fi