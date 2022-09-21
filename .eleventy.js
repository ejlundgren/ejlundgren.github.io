module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('images');
    
    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}