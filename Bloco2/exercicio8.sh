    #!/bin/bash

Paths=$*

for Path in $Paths
do
if [ -d $Path ]
    then
    echo "Esse caminho é um diretório!"
elif [ -f $Path ]
    then
    echo "Esse caminho é um arquivo!"
else
    echo "Esse caminho é outro tipo de arquivo!"
fi
done
ls -l $Paths
