module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211'
            }
        }
    }
}