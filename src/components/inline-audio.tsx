import config from "@/sanity/config/client-config"
import { ConfigContext } from "sanity"

type audioAsset = {
    asset: {
        _ref: string
    }
}

const AudioUrlBuilder = (config: {projectId: string, dataset: string}, value: audioAsset) => {
    const assetRefParts = value.asset._ref.split('-') // ["file", "ff7...", "m4a"]
    const id = assetRefParts[1] // "ff7..."
    const format = assetRefParts[2] // "m4a"
    return `https://cdn.sanity.io/files/${config.projectId}/${config.dataset}/${id}.${format}`
  }
  
export const AudioComponent = ({
    value, 
    isInline
  }: {
      value: audioAsset,
      isInline: boolean
  }) => {
  
  const audioUrl = AudioUrlBuilder(config, value)
  return (
    <div className="justify-items-center">
      <audio className="w-2/4" controls src={audioUrl}></audio>
      { isInline }
    </div>
  ) 
  
}