#!/bin/bash

echo "Digite o caminho desejado: "
read Path
if [ -d $Path ]
    then
    echo "Esse caminho é um diretório!"
elif [ -f $Path ]
    then
    echo "Esse caminho é um arquivo!"
else
    echo "Esse caminho é outro tipo de arquivo!"
fi
ls -l $Path
