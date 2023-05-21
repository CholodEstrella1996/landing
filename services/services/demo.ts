import { STORE_CUSTOMER_SERVICE } from 'constants/api.constants'
import api from 'services/api.client'

export const demoService = {
  postDemoSubscription: () => api.post(`${STORE_CUSTOMER_SERVICE}/demo-subscriptions`),
}
