import { Items } from '../types'

export const getItems = (items: Items, options?: any): Items => {
  return items
}

export const createGetItems = (items: Items) => (options: any) => getItems(items, options)





