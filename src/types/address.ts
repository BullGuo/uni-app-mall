export interface AddressParams {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
}

export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}
