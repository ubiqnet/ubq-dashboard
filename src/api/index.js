import request from '../utils/request'

export default function requestApi(baseUrl) {
  return {
    walletAddress: () => request.get(`${baseUrl}/address`),
    exportKey: () => request.get(`${baseUrl}/exportKey`),
    walletBalance: () => request.get(`${baseUrl}/wallet/balance`),
    chequebookAddress: () => request.get(`${baseUrl}/chequebook/address`),
    chequebookBalance: () => request.get(`${baseUrl}/chequebook/balance`),
    cashout: () => request.get(`${baseUrl}/harvest/cashout`),
    harvestStatus: () => request.get(`${baseUrl}/harvest/status`),
    withdraw: () => request.get(`${baseUrl}/harvest/withdraw`),
    deposit: amount => request.post(`${baseUrl}/harvest/deposit`, { amount }),
    redeem: () => request.get(`${baseUrl}/harvest/redeem`),
    // nodeType 1 verify node 2 stabilize node 3 normal node
    upgradeNode: nodeType => request.get(`${baseUrl}/upgrade?nodeType=${nodeType}`),
    mintNft: data => request.post(`${baseUrl}/nft/mint`, data),
    checkHardInfo: () => request.post(`${baseUrl}/hardInfo`),
    hardInfo: () => request.get(`${baseUrl}/hardInfo`),
    uploadNft: data => request.post(`${baseUrl}/nft/put`, data),
    downNft: data => request.post(`${baseUrl}/nft/down`, data),
    nftRecord: () => request.get(`${baseUrl}/nft/list`),
  }
}
