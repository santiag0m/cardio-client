npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:santiag0m/cardio-client.git master:gh-pages

cd -