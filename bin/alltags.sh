#!/bin/sh

alltags=""

for i in _posts/*
do
  if test -f "$i" 
  then
    posttags=$(tail -n +2 $i |               `# remove first line`\
               awk "/---/ {exit} {print}" |  `# display up to ---`\
               shyaml get-value tags |       `# extract tags from remaining YAML`\
               cut -d ' ' -f 2)              `# remove dashes`
    alltags="$alltags $posttags"
  fi
done

echo $alltags | tr ' ' '\n' | sort | uniq -c | sort -r
