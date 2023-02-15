import type { Token } from './models/Token'

export interface ChequebookBalance {
  totalBalance: Token
  availableBalance: Token
}

export interface Balance {
  peer: string
  balance: Token
}

export interface Settlement {
  peer: string
  received: Token
  sent: Token
}

export interface Settlements {
  totalReceived: Token
  totalSent: Token
  settlements: Settlement[]
}

export interface HniInfo {
  version: string
  status: number
  publicKey: string
  overlayAddress: string
  pssPublicKey: string
  walletAddress: string
  contractAddress: string
  totalBalance: Token
  pledgeBalance: Token
  rewardBalance: Token,
  balanceUBQ: Token,
  nodeType: number
}

export interface Node {
  id: string
  name: string
  apiHost: string
  debugApiHost: string
  hniDebugApiHost: string
}

export interface Res {
  data: Result
}

interface Result {
  error: string
  result: string
}

export interface HardInfo {
  cpu: number
  bandWidth: number
  ram: number
  ip: string
  storage: number
  gpu: number
}

export interface BaseHardInfo {
  DownloadSpeed: number
  FreeDisk: number
  LogicCores: number
  TotalMemory: number
  UploadSpeed: number
}

export interface SourceHardInfo extends BaseHardInfo {
  HW: number, // 1 normal node 2 stabilize node 3 verify node
  LowHW: BaseHardInfo
  MediumHW: BaseHardInfo
  HighHW: BaseHardInfo
  Status: number,  // 1 completed 0 checking
  [key: string]: any
}

