CONTROLLER=${1}

printf "Generating controller: %s\n", "${CONTROLLER}"
nest g controller "${CONTROLLER}" --no-spec && printf "Done!\n" || printf "Failed!"
