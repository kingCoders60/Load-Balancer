#!/bin/bash

REQUEST=10
URL="http://localhost:3000"

for ((i=0; i<REQUEST; i++)); do
    curl -s $URL &
done

wait
echo "All requests have been sent."
