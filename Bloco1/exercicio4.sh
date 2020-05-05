#!/bin/zsh

echo "Qual o caminho:"
read FILE

if [ -e "$FILE" ]
    then
    echo "O caminho $FILE está habilitado!"
    if [ -w "$FILE" ]
        then
        echo "Você tem permissão para editar $FILE."
        else
        echo "Você NÃO foi autorizado a editar $FILE"
fi

    else 
    echo "O caminho $FILE não está habilitado!" 
fi

