import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    eleventyConfig.addCollection('orderedPages', function (collection) {
        return collection.getFilteredByTag('page').sort((a, b) => {
            return a.data.order - b.data.order;
        });
    });

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('robots.txt');

    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
    };
}
