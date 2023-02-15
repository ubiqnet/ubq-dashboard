import type { ChequebookBalance, Balance, Settlements, HniInfo, HardInfo, SourceHardInfo } from '../types'
import { createContext, ReactChild, ReactElement, useEffect, useState, useContext } from 'react'
import { Token } from '../models/Token'
import semver from 'semver'
import { engines } from '../../package.json'
import { Context as SettingsContext } from './Settings'
import axios from 'axios'

import type {
  NodeAddresses,
  ChequebookAddressResponse,
  LastChequesResponse,
  Health,
  Peer,
  Topology,
  // WalletBalance,
} from '@ethersphere/bee-js'
import { useLatestBeeRelease } from '../hooks/apiHooks'

interface Status {
  all: boolean
  version: boolean
  blockchainConnection: boolean
  debugApiConnection: boolean
  apiConnection: boolean
  topology: boolean
  chequebook: boolean
}

interface ContextInterface {
  status: Status
  latestPublishedVersion?: string
  latestUserVersion?: string
  latestUserVersionExact?: string
  isLatestBeeVersion: boolean
  latestBeeVersionUrl: string
  error: Error | null
  apiHealth: boolean
  debugApiHealth: Health | null
  nodeAddresses: NodeAddresses | null
  topology: Topology | null
  chequebookAddress: ChequebookAddressResponse | null
  peers: Peer[] | null
  chequebookBalance: ChequebookBalance | null
  peerBalances: Balance[] | null
  peerCheques: LastChequesResponse | null
  settlements: Settlements | null
  latestBeeRelease: LatestBeeRelease | null
  isLoading: boolean
  isRefreshing: boolean
  lastUpdate: number | null
  start: (frequency?: number) => void
  stop: () => void
  refresh: () => Promise<void>
  hniDebugApiHealth: boolean
  hniInfo: HniInfo | null
  setHniInfo: any
  hardInfo: HardInfo | null
  setHardInfo: any
  sourceHardInfo: SourceHardInfo | null
}

const initialValues: ContextInterface = {
  status: {
    all: false,
    version: false,
    blockchainConnection: false,
    debugApiConnection: false,
    apiConnection: false,
    topology: false,
    chequebook: false,
  },
  latestPublishedVersion: undefined,
  latestUserVersion: undefined,
  latestUserVersionExact: undefined,
  isLatestBeeVersion: false,
  latestBeeVersionUrl: 'https://github.com/ethersphere/bee/releases/latest',
  error: null,
  apiHealth: false,
  debugApiHealth: null,
  nodeAddresses: null,
  topology: null,
  chequebookAddress: null,
  peers: null,
  chequebookBalance: null,
  peerBalances: null,
  peerCheques: null,
  settlements: null,
  latestBeeRelease: null,
  isLoading: true,
  isRefreshing: false,
  lastUpdate: null,
  start: () => {}, // eslint-disable-line
  stop: () => {}, // eslint-disable-line
  refresh: () => Promise.reject(),
  hniDebugApiHealth: false,
  hniInfo: null,
  setHniInfo: null,
  hardInfo: null,
  setHardInfo: null,
  sourceHardInfo: null,
}

export const Context = createContext<ContextInterface>(initialValues)
export const Consumer = Context.Consumer

interface Props {
  children: ReactChild
}

function getStatus(
  latestBeeRelease: LatestBeeRelease | null,
  debugApiHealth: Health | null,
  nodeAddresses: NodeAddresses | null,
  apiHealth: boolean,
  topology: Topology | null,
  chequebookAddress: ChequebookAddressResponse | null,
  chequebookBalance: ChequebookBalance | null,
  error: Error | null,
): Status {
  const status = {
    version: Boolean(
      debugApiHealth &&
        semver.satisfies(debugApiHealth.version, engines.bee, {
          includePrerelease: true,
        }),
    ),
    blockchainConnection: Boolean(nodeAddresses?.ethereum),
    debugApiConnection: Boolean(debugApiHealth?.status === 'ok'),
    apiConnection: apiHealth,
    topology: Boolean(topology?.connected && topology?.connected > 0),
    chequebook:
      Boolean(chequebookAddress?.chequebookAddress) &&
      chequebookBalance !== null &&
      chequebookBalance?.totalBalance.toBigNumber.isGreaterThan(0),
  }

  return { ...status, all: !error && Object.values(status).every(v => v) }
}

export function Provider({ children }: Props): ReactElement {
  const { beeApi, apiHniDebugUrl, api } = useContext(SettingsContext)
  const [apiHealth, setApiHealth] = useState<boolean>(false)
  const [debugApiHealth, setDebugApiHealth] = useState<Health | null>(null)
  const [nodeAddresses, setNodeAddresses] = useState<NodeAddresses | null>(null)
  const [topology, setNodeTopology] = useState<Topology | null>(null)
  const [chequebookAddress, setChequebookAddress] = useState<ChequebookAddressResponse | null>(null)
  const [peers, setPeers] = useState<Peer[] | null>(null)
  const [chequebookBalance, setChequebookBalance] = useState<ChequebookBalance | null>(null)
  const [peerBalances, setPeerBalances] = useState<Balance[] | null>(null)
  const [peerCheques, setPeerCheques] = useState<LastChequesResponse | null>(null)
  const [settlements, setSettlements] = useState<Settlements | null>(null)
  const { latestBeeRelease } = useLatestBeeRelease()
  const [hniInfo, setHniInfo] = useState<HniInfo | null>(null)
  const [hniDebugApiHealth, setHniDebugApiHealth] = useState<boolean>(false)
  const [hardInfo, setHardInfo] = useState<HardInfo | null>(null)
  const [sourceHardInfo, setSourceHardInfo] = useState<SourceHardInfo | null>(null)

  const [error, setError] = useState<Error | null>(initialValues.error)
  const [isLoading, setIsLoading] = useState<boolean>(initialValues.isLoading)
  const [isRefreshing, setIsRefreshing] = useState<boolean>(initialValues.isRefreshing)
  const [lastUpdate, setLastUpdate] = useState<number | null>(initialValues.lastUpdate)
  const [frequency, setFrequency] = useState<number | null>(120000)

  const latestPublishedVersion = semver.coerce(latestBeeRelease?.name)?.version
  const latestUserVersion = semver.coerce(debugApiHealth?.version)?.version
  const latestUserVersionExact = debugApiHealth?.version

  // const [walletBalance, setWalletBalance] = useState<WalletBalance | null>(null)

  useEffect(() => {
    setIsLoading(true)

    setApiHealth(false)

    refresh()
  }, [apiHniDebugUrl])

  useEffect(() => {
    setIsLoading(true)

    setDebugApiHealth(null)
    setNodeAddresses(null)
    setNodeTopology(null)
    setPeers(null)
    setChequebookAddress(null)
    setChequebookBalance(null)
    setPeerBalances(null)
    setPeerCheques(null)
    setSettlements(null)
    setHniDebugApiHealth(false)
    setHniInfo(null)

    refresh()
  }, [apiHniDebugUrl])

  const refresh = async () => {
    // Don't want to refresh when already refreshing
    if (isRefreshing) return

    // Not a valid bee api
    if (!apiHniDebugUrl) {
      setIsLoading(false)

      return
    }

    try {
      setIsRefreshing(true)
      setError(null)

      await axios
        .get(`${apiHniDebugUrl}/status`)
        .then(res => {
          setHniDebugApiHealth(true)
          setHniInfo(res.data.result)
        })
        .catch(() => {
          setHniDebugApiHealth(false)
          setHniInfo(null)
        })
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
      setLastUpdate(Date.now())
    }
  }

  const start = (freq = 120000) => setFrequency(freq)
  const stop = () => setFrequency(null)

  useEffect(() => {
    let timeInterval: any = null
    const getHardInfo = async () => {
      let count = 0
      const interval = 5000
      const maxCount = Math.ceil((5 * 60 * 1000) / interval) // five minutes
      await api.checkHardInfo()
      queryHardInfo()
      async function queryHardInfo() {
        count++
        const { result } = await api.hardInfo()
        if (result.Status === 1 || count > maxCount) {
          clearInterval(timeInterval)
        }
        if (result.LogicCores) {
          let gpu = 0
          if (result.GpuInfo && result.GpuInfo.length) {
            gpu = Math.floor(result.GpuInfo[0].totalMemory.split(' ')[0] / 1024)
          }
          const _hardInfo = {
            cpu: Number(result.NumOfCores),
            bandWidth: Math.floor(result.DownloadSpeed),
            ram: Math.floor(result.FreeMemory / 1024 / 1024 / 1024),
            ip: result.Netinfo.ip,
            storage: Math.floor(result.FreeDisk / 1024 / 1024 / 1024),
            gpu,
          }
          setHardInfo(_hardInfo)
          setSourceHardInfo(result)
        }
      }
      timeInterval = setInterval(queryHardInfo, interval)
    }
    getHardInfo()

    return () => clearInterval(timeInterval)
  }, [])

  // Start the update loop
  useEffect(() => {
    refresh()

    // Start autorefresh only if the frequency is set
    if (frequency) {
      const interval = setInterval(refresh, frequency)

      return () => clearInterval(interval)
    }
  }, [frequency, beeApi, apiHniDebugUrl])

  return (
    <Context.Provider
      value={{
        status: getStatus(
          latestBeeRelease,
          debugApiHealth,
          nodeAddresses,
          apiHealth,
          topology,
          chequebookAddress,
          chequebookBalance,
          error,
        ),
        latestUserVersion,
        latestUserVersionExact,
        latestPublishedVersion,
        isLatestBeeVersion: Boolean(
          latestPublishedVersion &&
            latestUserVersion &&
            semver.satisfies(latestPublishedVersion, latestUserVersion, {
              includePrerelease: true,
            }),
        ),
        latestBeeVersionUrl: latestBeeRelease?.html_url || 'https://github.com/ethersphere/bee/releases/latest',
        error,
        apiHealth,
        debugApiHealth,
        nodeAddresses,
        topology,
        chequebookAddress,
        peers,
        chequebookBalance,
        peerBalances,
        peerCheques,
        settlements,
        latestBeeRelease,
        isLoading,
        isRefreshing,
        lastUpdate,
        start,
        stop,
        refresh,
        hniInfo,
        setHniInfo,
        hniDebugApiHealth,
        hardInfo,
        setHardInfo,
        sourceHardInfo,
      }}
    >
      {children}
    </Context.Provider>
  )
}
