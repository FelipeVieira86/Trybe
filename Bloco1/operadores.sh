#!/bin/bash

read -p "digite  o primeiro numero: " num1

read -p "digite o segundo numero: " num2

resultadosoma=`echo "scale=2; $num1 + $num2" | bc`
resultadosub=`echo "scale=2; $num1 - $num2" | bc`
resultadomul=`echo "scale=2; $num1 * $num2" | bc`
resultadodiv=`echo "scale=2; $num1 / $num2" | bc`
echo $num1 "+" $num2 "=" $resultadosoma 
echo $num1 "-" $num2 "=" $resultadosub
echo $num1 "*" $num2 "=" $resultadomul
echo $num1 "/" $num2 "=" $resultadodiv
