chmod +x scripts/*.sh
ab \
  -n 100000 \
  -c 50 \
  -k -v 1 \
  http://localhost:8080/ > .results \
