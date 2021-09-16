export type Item = string;

export type Items = Item[];

export interface ItemsOptions {
  includes?: string;
  length?: number;
  unique?: boolean;
  shuffle?: boolean;
  sort?: '' | 'asc' | 'desc';
  startsWith?: string;
}

export type ItemOptions = Omit<ItemsOptions, 'length' | 'unique' | 'sort'>;

export type Pesel = string;
