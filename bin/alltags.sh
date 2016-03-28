#!/bin/sh

alltags=""

for i in _posts/*
do
  if test -f "$i" 
  then
    alltags="$alltags `tail -n +2 $i | awk '/---/ {exit} {print}' | shyaml get-value tags`"
  fi
done

echo $alltags | tr - "\n" | tail -n +2 | sort | uniq -c | sort -r
