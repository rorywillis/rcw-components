module.exports = function () {
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = ["macros"];

  return {
    presets,
    plugins,
  };
};
