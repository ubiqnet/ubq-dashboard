import { createContext, ReactChild, ReactElement, useState, useEffect } from 'react'
import { Bee, BeeDebug } from '@ethersphere/bee-js'
import requestApi from '../api/index.js'

interface ContextInterface {
  apiHniDebugUrl: string
  beeApi: Bee | null
  setHniDebugApiUrl: (url: string) => void
  api: any
}

const initialValues: ContextInterface = {
  apiHniDebugUrl:
    sessionStorage.getItem('hni_debug_api_host') || process.env.REACT_APP_HNI_DEBUG_HOST || 'http://127.0.0.1:8080',
  beeApi: null,
  setHniDebugApiUrl: (url: string) => {}, // eslint-disable-line
  api: function (url: string) {
    return requestApi(
      url ||
        sessionStorage.getItem('hni_debug_api_host') ||
        process.env.REACT_APP_HNI_DEBUG_HOST ||
        'http://127.0.0.1:8080',
    )
  },
}

export const Context = createContext<ContextInterface>(initialValues)
export const Consumer = Context.Consumer

interface Props {
  children: ReactChild
}

export function Provider({ children }: Props): ReactElement {
  const [apiHniDebugUrl, setHniDebugApiUrl] = useState<string>(initialValues.apiHniDebugUrl)
  const [beeApi, setBeeApi] = useState<Bee | null>(null)
  const [api, setApi] = useState<any>(initialValues.api)

  useEffect(() => {
    setApi(function () {
      return requestApi(apiHniDebugUrl)
    })
  }, [apiHniDebugUrl])

  useEffect(() => {
    sessionStorage.setItem('hni_debug_api_host', apiHniDebugUrl)
    setHniDebugApiUrl(apiHniDebugUrl)
  }, [apiHniDebugUrl])

  return (
    <Context.Provider
      value={{
        apiHniDebugUrl,
        beeApi,
        setHniDebugApiUrl,
        api,
      }}
    >
      {children}
    </Context.Provider>
  )
}
