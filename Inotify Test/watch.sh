#!/bin/bash

### Set initial time of file
LTIME=`stat -c %Z ciao.txt`

while true
do
   ATIME=`stat -c %Z ciao.txt`

   if [[ "$ATIME" != "$LTIME" ]]
   then
       echo "RUN COMMAND"
       more "ciao.txt"
       LTIME=$ATIME
   fi
   sleep 0.1
done
