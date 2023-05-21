/* eslint-disable @typescript-eslint/restrict-template-expressions */
const BASE_URL = process.env.NEXT_PUBLIC_LANDING_URL
const LANDING_BASE_URL = `${process.env.NEXT_PUBLIC_LANDING_GATEWAY}/landing-service`
const PRODUCT_BASE_URL = `${process.env.NEXT_PUBLIC_LANDING_GATEWAY}/product-service`
const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL
const USER_SERVICE = `${process.env.NEXT_PUBLIC_LANDING_GATEWAY}/user-service`
const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL
const STORE_PRODUCT_SERVICE = `${process.env.NEXT_PUBLIC_STORE_GATEWAY}/product-service`
const STORE_GUIDE_SERVICE = `${process.env.NEXT_PUBLIC_STORE_GATEWAY}/guide-service`
const STORE_CUSTOMER_SERVICE = `${process.env.NEXT_PUBLIC_STORE_GATEWAY}/customer-service`

export {
  BASE_URL,
  LANDING_BASE_URL,
  PRODUCT_BASE_URL,
  PLATFORM_URL,
  USER_SERVICE,
  STORE_URL,
  STORE_PRODUCT_SERVICE,
  STORE_GUIDE_SERVICE,
  STORE_CUSTOMER_SERVICE,
}
