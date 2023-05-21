import { LANDING_BASE_URL, USER_SERVICE } from 'constants/api.constants'
import api from 'services/api.client'
import { UserRequest } from 'services/models/user/request.model'
import { UserResponse } from 'services/models/user/response.model'

export const userService = {
  getUser: () => api.get<UserResponse['getUser']>(`${USER_SERVICE}/auth/user/profile`),

  getAllUsers: (id: number) => api.get<UserResponse['getAllUsers']>(`${LANDING_BASE_URL}/${id}`),

  createUser: (body: UserRequest['createUser'], id: number) =>
    api.post<UserResponse['createUser']>(`user/${id}`, body),

  deleteUser: (id: number) => api.delete<UserResponse['deleteUser']>(`${LANDING_BASE_URL}/${id}`),
}
