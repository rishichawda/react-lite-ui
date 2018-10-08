const config = require('./themeconfig.json');
const path = require('path');

const themeConfig = config.theme.map(themePath => path.resolve(__dirname, themePath));

export default themeConfig;
