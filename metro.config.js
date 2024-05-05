const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs"],
    assetExts: ["glb", "gltf", "mtl", "obj", "png", "jpg"],
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
