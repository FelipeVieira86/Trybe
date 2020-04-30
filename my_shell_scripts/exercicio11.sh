#!/bin/bash

RNAME=`date +%F`
DIR=$1
cd $DIR
FINDFILES=`find *.$2`
for FILES in $FINDFILES
    do
    mv $FILES $RNAME-$FILES
    echo "Arquivo $FILES foi renomeado para $RNAME-$FILES"
    done
