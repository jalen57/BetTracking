import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Wager {
  readonly id: string;
  readonly league: string;
  readonly betType: string;
  readonly team?: string;
  readonly period: string;
  readonly line?: number;
  readonly odds: number;
  readonly amount: number;
  readonly complete: boolean;
  readonly result?: string;
  readonly grossReturn?: number;
  readonly netReturn?: number;
  constructor(init: ModelInit<Wager>);
  static copyOf(source: Wager, mutator: (draft: MutableModel<Wager>) => MutableModel<Wager> | void): Wager;
}