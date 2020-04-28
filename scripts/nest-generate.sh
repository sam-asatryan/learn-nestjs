#!/bin/bash

NAME=${1}

printf "Generating module: %s\n" "${NAME}"
nest g module "${NAME}" && printf "Done!\n" || printf "Failed!\n"

printf "Generating controller: %s\n" "${NAME}"
nest g controller "${NAME}" --no-spec && printf "Done!\n" || printf "Failed!\n"

printf "Generating service: %s\n" "${NAME}"
nest g service "${NAME}" --no-spec && printf "Done!\n" || printf "Failed!\n"
