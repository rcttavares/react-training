const fs = require('fs');
const path = require('path');

const webpackConfigPath = path.join(
  __dirname,
  '../node_modules/react-scripts/config/webpackDevServer.config.js'
);

if (fs.existsSync(webpackConfigPath)) {
  let content = fs.readFileSync(webpackConfigPath, 'utf8');

  if (
    content.includes(
      "server: {\n      type: 'https',\n      options: getHttpsConfig(),\n    },"
    )
  ) {
    content = content.replace(
      "server: {\n      type: 'https',\n      options: getHttpsConfig(),\n    },",
      `server: (() => {
      const httpsConfig = getHttpsConfig();
      if (httpsConfig === true) {
        return { type: 'https' };
      } else if (httpsConfig === false || !httpsConfig) {
        return { type: 'http' };
      } else {
        return { type: 'https', options: httpsConfig };
      }
    })(),`
    );

    fs.writeFileSync(webpackConfigPath, content, 'utf8');
    console.log('✅ Server configuration fixed for webpack-dev-server v5');
  } else {
    console.log('ℹ️  Server configuration not found or already correct');
  }
} else {
  console.log('⚠️  Webpack config file not found');
}
