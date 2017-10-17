#!/bin/bash

read -p "some question ? [y/n]" yn

if [ $yn = "n" ]; then
  echo success!!
else 
  echo incorrect...
fi
