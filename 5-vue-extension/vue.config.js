module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.js'
            ]
          }
        }
      },
      extensionReloaderOptions: {
        // 关闭自动更新页面，这会导致 WhatsApp 网页刷新后跳转到扫码登陆页面
        reloadPage: false,
      },
      manifestTransformer: (manifest) => {
        delete manifest.content_security_policy
        return manifest
      },
    }
  }
}
