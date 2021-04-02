export const round = (exactNumber: number, decimalPlaces: number): number => {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(exactNumber * factorOfTen) / factorOfTen
}
