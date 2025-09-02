module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("njk");

  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("views/assets");

  // Set input directory to views folder
  return {
    dir: {
      input: "views"
    }
  };
};
