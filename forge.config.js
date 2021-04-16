const path = require('path')

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, 'images', 'icon.ico')
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://doggo.ninja/PKktPb.ico'
      }
    }
  ]
}