const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    // Remove or correct the watcher.unstable_workerThreads option
    watcher: {
      ...defaultConfig.watcher,
      unstable_workerThreads: false,
    },
    // Adjust the entry property to reflect the correct path to your index.js file
    entry: './index.js',
    // Add any additional configuration if needed
  };
})();

