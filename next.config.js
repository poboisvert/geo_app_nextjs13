const moduleExports = {
    // Your existing module.exports
    reactStrictMode: true,
    experimental: { appDir: true },
    trailingSlash: false,
    images: {
        domains: ['combo.staticflickr.com']
    }
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = moduleExports;
