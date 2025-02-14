cd ..
mkdir -p .site/public && rsync -a --exclude='/.site/' ./ .site/public/
