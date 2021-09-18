import { getSelectedItems, getItem, getItems } from './items';

describe('array utils', () => {
  describe('getItems', () => {
    it('should return an array of strings if an array of string is provided as source', () => {
      const items = ['a', 'b', ''];

      expect(getSelectedItems(items).every((item) => typeof item === 'string')).toBe(true);
    });

    it('should return 10 items from the array if no options are passed', () => {
      const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

      expect(getSelectedItems(items).length).toBe(10);
      expect(getSelectedItems(items)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    it('should sort items when sort options are passed', () => {
      const items = ['ab', 'ag', 'z', 'd', 'dd', 'ac'];

      expect(getSelectedItems(items, { sort: '' })).toEqual(items);
      expect(getSelectedItems(items, { sort: 'asc' })).toEqual(['ab', 'ac', 'ag', 'd', 'dd', 'z']);
      expect(getSelectedItems(items, { sort: 'desc' })).toEqual(['z', 'dd', 'd', 'ag', 'ac', 'ab']);
    });

    it('should return the proper amount of random items if a number is passed as the length option', () => {
      const items = ['a', 'b', 'c'];

      expect(getSelectedItems(items, { length: 2 }).length).toBe(2);
    });

    it('should return default amount of random items if a number is passed as not a number (string, float, min value)', () => {
      const items = ['a', 'b', 'c'];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(getSelectedItems(items, { length: 'ddfsdf' }).length).toBe(3);
      expect(getSelectedItems(items, { length: -3 }).length).toBe(3);
      expect(getSelectedItems(items, { length: 1.1 }).length).toBe(3);
    });

    it('should return only unique items if the option unique is set to true', () => {
      const items = ['a', 'b', 'b', 'd', 'e', 'a'];

      expect(getSelectedItems(items, { unique: true })).toEqual(['a', 'b', 'd', 'e']);
    });

    it('should return proper items with option startWith', () => {
      const items = ['Abc', 'Bcc', 'Aaa', 'Ca'];

      expect(getSelectedItems(items, { startsWith: 'A' })).toEqual(['Abc', 'Aaa']);
    });
  });

  describe('getItems', () => {
    it('should return an array of strings if an array of string is provided as source', () => {
      const items = ['a', 'b', ''];

      expect(getItems(items)().every((item) => typeof item === 'string')).toBe(true);
    });

    it('should return an array and return proper data when option object passed', () => {
      const items = ['bx', 'ba', 'cb', 'ax', 'ba'];

      expect(getItems(items)({ startsWith: 'b', sort: 'desc', unique: true })).toEqual([
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
