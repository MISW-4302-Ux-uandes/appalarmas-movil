# Appalarmas

This project was generated with [Ionic CLI](https://ionicframework.com/docs/intro/cli) and [NodeJS](https://nodejs.org/en/) V18.13.0

## Development server

Run `npm install -g @ionic/cli` to install Ionic CLI

Run `npm install` to install all dependencies

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The application will automatically reload if you change any of the source files.

## Generate APK

Run next commands as follow:

1. `ionic build`

2. `ionic capacitor add android`

3. From [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQjw2cWgBhDYARIsALggUhrjKH6QiQOqavhrOAwUoHP4XyPfrzXiIbMDycu3w6HnPlPTGmoWZmEaAruKEALw_wcB&gclsrc=aw.ds) open `android` directory that was genereted in the previous step and from menu go to Build -> Build bundle(s) / APK(s) and select Build APK(s) option. Once you finish generating the APK, it will be hosted in the path `appalarmas/android/app/build/outputs/apk/app-debug.apk`
## Code scaffolding

Run `ionic generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|page|service|class|guard|interface|enum|module`.

## Build

Run `ionic build` to build the project. The build artifacts will be stored in the `dist/` directory.


