const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) { 
    const imageShortcode = async (src, alt) => {
        if (!alt) {
          throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }
      
        let options = {
          widths: [500, 1000],
          formats: ["webp", "jpeg", null],
          urlPath: "/assets/optimized-images/",
          outputDir: "./_site/assets/optimized-images/"
        }
      
        let stats = await Image(src, options);
        let lowestSrc = stats["jpeg"][0];
      
        const srcset = Object.keys(stats).reduce(
          (acc, format) => ({
            ...acc,
            [format]: stats[format].reduce(
              (_acc, curr) => `${_acc} ${curr.srcset} ,`,
              ""
            ),
          }),
          {}
        );
      
        const source = `<source type="image/webp" srcset="${srcset["webp"]}">`;
      
        const img = `<img
          alt="${alt}"
          src="${lowestSrc.url}"
          sizes='50vw'
          srcset="${srcset["jpeg"]}">`;
        
        const stringReturn = `<picture> ${source} ${img} </picture>`;
        return stringReturn;
    };

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    
    eleventyConfig.addCollection("orderedPages", function (collection) {
      return collection.getFilteredByTag("page").sort((a, b) => {
        return a.data.order - b.data.order;
      });
    });

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');

    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}