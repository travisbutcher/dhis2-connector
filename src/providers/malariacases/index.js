const provider = {
  type: 'provider',
  version: '0.0.0',
  name: 'malariacases',
  hosts: true,
  disableIdParam: false,
  Model: require('./model')
}

module.exports = provider
