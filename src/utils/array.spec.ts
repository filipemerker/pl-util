import { getItems } from './array'

describe('array utils', () => {
  describe('getItems', () => {
    it('should return an array of strings if an array of string is provided as source', () => {
      const items = ['', '', '']

      expect(getItems(items).every(item => typeof item === 'string')).toBe(true)
    })
    it.todo('should return ten random items from the array if no options are passed')
    it.todo('should return the proper amount of random items if a number is passed as the length option')
    it.todo('should return only unique items if the option unique is set to true')
  })
  describe('getItem', () => {
    
  })
})
