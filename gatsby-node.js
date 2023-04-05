const path = require('path');

exports.createPages = () => {};

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    const output = getConfig().output || {};

    actions.setWebpackConfig({
        output,
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                utils: path.resolve(__dirname, 'src/utils'),
                hooks: path.resolve(__dirname, 'src/hooks'),
                styles: path.resolve(__dirname, 'src/styles'),
                state: path.resolve(__dirname, 'src/state'),
            },
        },
    });
};
