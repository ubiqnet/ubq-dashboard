import { ReactElement, useContext } from 'react'
import GenerateNFT from '../../components/GenerateNFT'
import { Context as BeeContext } from '../../providers/Bee'
import TroubleshootConnectionCardHNI from '../../components/TroubleshootConnectionCardHNI'

export default function MintNFT(): ReactElement {
  const { hniInfo } = useContext(BeeContext)
  if (hniInfo?.status !== 1) return <TroubleshootConnectionCardHNI />
  return (
    <div style={{ paddingLeft: 100 }}>
      <GenerateNFT></GenerateNFT>
    </div>
  )
}
