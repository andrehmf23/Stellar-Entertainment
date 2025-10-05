export function randomInt(min: number, max: number): number {
  // Garante que os limites sejam inteiros
  min = Math.ceil(min);
  max = Math.floor(max);

  // Gera número inteiro entre min e max (inclusive ambos)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}