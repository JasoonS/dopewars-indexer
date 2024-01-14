cd "$(dirname "$0")"
cp ./TrackTables.res ../../generated/src
cp ./docker-compose.yaml ../../generated

cd ../../generated
pnpm rescript build -with-deps

