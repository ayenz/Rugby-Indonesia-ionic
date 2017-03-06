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

1. Add platform android at project folder
```
$ cordova platform add android
```

2. Add ionic plugin to project folder
```
$ ionic plugin add cordova-plugin-camera
```

3. Run on android device
```
$ cordova run android --device
```
