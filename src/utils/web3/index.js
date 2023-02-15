import Web3 from 'web3'

/* eslint-disable */
class Web3Context {
  static web3 = null
  account // wallet account address
  isUnlocked // Wallet is locked

  constructor() {
    this.initWeb3()
  }

  // init web3
  initWeb3() {
    if (Web3Context.web3) return
    console.log('==========init web3===========')
    if (typeof window.ethereum === 'undefined' || !window.ethereum) {
      console.error('The lack of MetaMask')
      return false
    }
    Web3Context.web3 = new Web3(window.ethereum)
  }

  // get web3
  web3() {
    if (!Web3Context.web3) {
      alert('please install the metamask in the browser')
      return false
    }
    return Web3Context.web3
  }

  async loginMetaMask() {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const account = accounts[0]
    const isUnlocked = await window.ethereum._metamask.isUnlocked()
    this.account = account
    return { account, isUnlocked }
  }

  getBalance() {
    return new Promise((resolve, reject) => {
      this.web3()
        .eth.getBalance(this.account)
        .then(res => {
          let a = this.web3().utils.fromWei(res, 'ether')
          resolve(a)
        })
    })
  }

  async getGasPrice() {
    const _web3 = this.web3()
    const gas = await _web3.eth.getGasPrice()
    return parseInt(gas * 1.2)
  }

  async getContract(abi, address, options) {
    if (!abi || !address) return
    const _web3 = this.web3()
    // let gasPrice = await this.getGasPrice()
    let Contract = await new _web3.eth.Contract(abi, address, options)
    return Contract
  }
}

const MyWeb3 = new Web3Context()
export default MyWeb3
