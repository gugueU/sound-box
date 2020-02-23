npm run build
rm -rf build/playlist.json
scp  -r build/* pi@192.168.5.5:/var/www/html/sound-box/
