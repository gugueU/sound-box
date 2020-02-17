npm run build
rm -rf build/playlist.json
scp -P 8022 -r build/* pi@gugue.fr:/var/www/html/sound-box/ 
