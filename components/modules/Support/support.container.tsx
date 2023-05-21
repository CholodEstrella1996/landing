import SupportComponent from './support.component'
import { SupportDropDownInfoProps } from './support.model'

const SupportContainer = ({ infoDrop }: SupportDropDownInfoProps) => (
  <SupportComponent infoDrop={infoDrop} />
)

export default SupportContainer
