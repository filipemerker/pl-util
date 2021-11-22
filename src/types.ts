export type Currency = 'PLN' | 'zł';

export type Gender = 'man' | 'woman';

export type Item = string;

export type Items = Item[];

export interface ItemsOptions {
  length?: number;
  unique?: boolean;
  shuffle?: boolean;
  sort?: '' | 'asc' | 'desc';
  startsWith?: string;
}

export type ItemOptions = Omit<ItemsOptions, 'length' | 'unique' | 'sort'>;

export type Pesel = string;
