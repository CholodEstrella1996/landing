import { useAppContext } from 'context/appContext'

import GuestUser from './components'
import { UserAvatar } from './user.component'

const UserContainer = () => {
  const { user } = useAppContext()

  if (!user) return <GuestUser />
  return <UserAvatar user={user} />
}

export default UserContainer
