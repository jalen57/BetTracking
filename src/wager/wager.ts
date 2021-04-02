export type Wager = {
  id: string,
  league: string,
  betType: string,
  team?: string,
  period: string,
  line?: number,
  odds: number,
  amount: number,
  complete: boolean,
  result?: string,
  grossReturn?: number,
  netReturn?: number
}

