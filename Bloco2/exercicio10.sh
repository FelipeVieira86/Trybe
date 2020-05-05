#!/bin/bash

RNAME=`date +%F`
FINDPNG=`find *.png`
for PNG in $FINDPNG
    do
    mv $PNG $RNAME-$PNG
    done
