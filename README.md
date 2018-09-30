# ShirtStoreUi

Shirt Store UI is a Angular project generated with Angular CLI. 

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
shirt-store-ui calls a HTTP service in order to retrieve a list of shirts from a backend. To avoid CORS `npm start` will also setup a `proxy-config`.

## Development server proxy

The proxy used to avoid CORS while retrieving data trhough HTTP is configured in `proxy.config.json`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Development notes

- Only some unit tests were created to demonstrate ability with *Jasmine*.
- The angular Pipe: `filter.pipe` was created to apply a custom filter in the list of shirts in `list.component`.
- To avoid issues with CORS while in development, a proxy was created to route requests to the API.
- Bootstrap was used to help with the development of the layout and CSS.
- The `modal.component` was created with dependencies to the `cart.component`. It may be used in the future in case different modals are necessary.
- Routing was built in a different module as this is a good practice.