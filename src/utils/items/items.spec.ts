import { getItems, getItem, createGetItems } from './items';

describe('array utils', () => {
  describe('getItems', () => {
    it('should return an array of strings if an array of string is provided as source', () => {
      const items = ['a', 'b', ''];

      expect(getItems(items).every((item) => typeof item === 'string')).toBe(true);
    });

    it('should return proper items with option includes', () => {
      const items = ['abc', 'ab', 'abcd', 'a'];

      expect(getItems(items, { includes: 'abc' })).toEqual(['abc', 'abcd']);
    });

    it('should return 10 items from the array if no options are passed', () => {
      const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

      expect(getItems(items).length).toBe(10);
      expect(getItems(items)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    it('should sort items when sort options are passed', () => {
      const items = ['ab', 'ag', 'z', 'd', 'dd', 'ac'];

      expect(getItems(items, { sort: '' })).toEqual(items);
      expect(getItems(items, { sort: 'asc' })).toEqual(['ab', 'ac', 'ag', 'd', 'dd', 'z']);
      expect(getItems(items, { sort: 'desc' })).toEqual(['z', 'dd', 'd', 'ag', 'ac', 'ab']);
    });

    it('should return the proper amount of random items if a number is passed as the length option', () => {
      const items = ['a', 'b', 'c'];

      expect(getItems(items, { length: 2 }).length).toBe(2);
    });

    it('should return default amount of random items if a number is passed as not a number (string, float, min value)', () => {
      const items = ['a', 'b', 'c'];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(getItems(items, { length: 'ddfsdf' }).length).toBe(3);
      expect(getItems(items, { length: -3 }).length).toBe(3);
      expect(getItems(items, { length: 1.1 }).length).toBe(3);
    });

    it('should return only unique items if the option unique is set to true', () => {
      const items = ['a', 'b', 'b', 'd', 'e', 'a'];

      expect(getItems(items, { unique: true })).toEqual(['a', 'b', 'd', 'e']);
    });

    it('should return proper items with option startWith', () => {
      const items = ['Abc', 'Bcc', 'Aaa', 'Ca'];

      expect(getItems(items, { startsWith: 'A' })).toEqual(['Abc', 'Aaa']);
    });
  });

  describe('createGetItems', () => {
    it('should return an array of strings if an array of string is provided as source', () => {
      const items = ['a', 'b', ''];

      expect(createGetItems(items)().every((item) => typeof item === 'string')).toBe(true);
    });

    it('should return an array and return proper data when option object passed', () => {
      const items = ['bx', 'ba', 'cb', 'ax', 'ba'];

      expect(createGetItems(items)({ startsWith: 'b', sort: 'desc', unique: true })).toEqual([
        'bx',
        'ba',
      ]);
    });
  });

  describe('getItem', () => {
    it('should return string item', () => {
      const items = ['a', 'b', 'c'];

      expect(typeof getItem(items)).toBe('string');
    });
  });
});
