MODULE=${1}

printf "Generating module: %s\n", "${MODULE}"
nest g module "${MODULE}" && printf "Done!\n" || printf "Failed!"
