# ionicRugbyV2
Menggunakan framework ionic versi 2. Jangan samain framework versi 1 karena uda beda struktur folder sama file

## Setup Project

Download zip project: http://xxx.xxx.xxx/
Install terlebih dahulu ionic
```
npm install -g cordova ionic
```
Rebuild project
```
npm rebuild node-sass
```

## Running Project

```
ionic serve
```

## Running Project on Android Device
Add platform android at project folder
```
$ cordova platform add android
```
Add ionic plugin to project folder
```
$ ionic plugin add cordova-plugin-camera
$ ionic plugin add cordova-plugin-file
$ ionic plugin add cordova-plugin-file-transfer
$ ionic plugin add cordova-plugin-filepath
```
Run on android device
```
$ cordova run android --device
```
