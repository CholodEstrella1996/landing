import { useRouter } from 'next/router'

import Error from 'components/modules/Error'

const Errors = () => {
  const error = useRouter()
  const { numberError } = error.query

  return <Error errorType={numberError === '500' ? 500 : 404} />
}

export default Errors
