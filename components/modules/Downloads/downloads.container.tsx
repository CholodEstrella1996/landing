import { useEffect, useState } from 'react'

import { DownloadsResponse } from 'services/models/downloads/response.model'
import { downloadsService } from 'services/services/downloads'

import DownloadsComponent from './downloads.component'

function DownloadsContainer() {
  const [data, setData] = useState<DownloadsResponse['getPlatforms']>(Object)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getdownloadablePlatforms() {
      const { data: response } = await downloadsService.getPlatforms()
      setData(response)
      setLoading(false)
    }
    // eslint-disable-next-line no-console
    getdownloadablePlatforms().finally(() => {})
  }, [])

  return <DownloadsComponent data={data} isLoading={loading} />
}
export default DownloadsContainer
