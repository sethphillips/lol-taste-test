ember build
rm -rf ../public/assets
rsync -av dist/ --exclude='index.html' ../public
cp dist/index.html ../resources/views/ember.php
