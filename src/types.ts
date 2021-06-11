export type Item = string;

export type Items = Item[];

export interface Options {
  includes?: string;
  length?: number;
  unique?: boolean;
  sort?: '' | 'asc' | 'desc';
  startsWith?: string;
}
