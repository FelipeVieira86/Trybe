    #!/bin/bash

Path=$1

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
