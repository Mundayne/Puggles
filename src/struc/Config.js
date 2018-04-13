class Config {
  constructor (args = {}) {
    this.prefix = args.prefix || 'p!'
  }

  setPrefix (prefix) {
    if (typeof prefix !== 'string') return false
    this.prefix = prefix
  }
}
module.exports = Config
