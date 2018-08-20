## Installed modules and changed settings:

- Installed owl.carousel.scss for sliders.
- Changed settings of bootstrap in node_modules/bootstrap/scss/_variables.scss
<pre>
$container-max-widths: (
  sm: 1145px,
  md: 1145px,
  lg: 1145px,
  xl: 1145px
) !default;
</pre>

# Barebones
Barebones starter template for static site integrations.

## Requirements
- NodeJS must be installed.
- Yarn globally installed.
- A PHP server.

## Installation
- Clone the repo and run `yarn`
- Run php server. Recommended `valet link`
- Enter your site URL in `webpack.mix.js`

## watch

This build provides you with a compiler that watches your files and serves up your domain on localhost with Browsersync enabled.

- Run `yarn watch` and open `http://localhost:3000`

## Dev / Structure
- All sass files and assets should go under `./src`
- There is some simple page routing under `./pages` with a `partial()` function to help grab common elements. Markup should be built under `/pages` and `/partials`
- When assets are compiled, they become versioned under a mix-manifest.json file, so there's a `asset()` helper (seen in `/partials/head.php`) that you can use for any assets (images, css, js, etc).

## build

When going live, building the project will compile and optimize all assets and put them in `/dist`.

Note: `/dist` isn't versioned. So to deploy you need two steps:
1. `git pull`
2. `yarn production`

However, if you can't run yarn or npm on the production server, simply add `/dist` to versioning.

## Third Party Librairies

To install third party libraries, use `yarn add {package name}`. You can include sass from `node_modules` with `~package/path.scss`.

Use the ES6 syntax `import` to import libraries into your `main.js`.

For more documentation, refer to [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme).

## App

The php involved is very minimal. You can repurpose or add to what's already there, which is just a simple include of a function that get's the manifest file - that way you can grab assets with the `asset()` function.
