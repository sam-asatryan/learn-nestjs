SERVICE=${1}

printf "Generating service: %s\n", "${SERVICE}"
nest g service "${SERVICE}" --no-spec && printf "Done!\n" || printf "Failed!"
