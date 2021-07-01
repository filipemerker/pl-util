/**
 * shuffleArray - function to shuffle elements in array
 */
export const shuffleArray = <T>(items: T[]) => items.sort(() => Math.random() - 0.5);
