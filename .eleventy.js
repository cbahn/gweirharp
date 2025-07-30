module.exports = function(eleventyConfig) {

    
    eleventyConfig.addPassthroughCopy("./assets/");
    eleventyConfig.addWatchTarget("./assets/");

    eleventyConfig.addPassthroughCopy("./images/");
    eleventyConfig.addWatchTarget("./images/");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }

}