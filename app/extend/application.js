const path = require('path')

const CHAIN = Symbol('eqpay.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.eqpayinfo.lib.Chain.get(this.config.eqpay.chain)
    return this[CHAIN]
  },
  get eqpayinfo() {
    return {
      lib: require(path.resolve(this.config.eqpayinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.eqpayinfo.path, 'rpc'))
    }
  }
}
