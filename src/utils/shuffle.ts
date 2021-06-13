/**
 * shuffle - function to shuffle elements in array
 */
export const shuffle = <T>(items: T[]) => items.sort(() => Math.random() - 0.5);
