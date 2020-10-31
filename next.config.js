const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    trailingSlash: true,
    env: {
        siteTitle: "Jacobs Alumni Association",
        siteDescription: "The Jacobs Alumni Association is the growing network of former Jacobs University students and friends.",
        siteKeywords: "Jacobs Alumni Association, Jacobs University Bremen, Jacobs University, Alumni Association, Jacobs, Alumni, Association, Bremen"
    },
});