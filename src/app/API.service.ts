/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateWagerInput = {
  id?: string | null;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
};

export type ModelWagerConditionInput = {
  league?: ModelStringInput | null;
  betType?: ModelStringInput | null;
  team?: ModelStringInput | null;
  period?: ModelStringInput | null;
  line?: ModelFloatInput | null;
  odds?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  inProgress?: ModelBooleanInput | null;
  result?: ModelStringInput | null;
  grossReturn?: ModelFloatInput | null;
  netReturn?: ModelFloatInput | null;
  and?: Array<ModelWagerConditionInput | null> | null;
  or?: Array<ModelWagerConditionInput | null> | null;
  not?: ModelWagerConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Wager = {
  __typename: "Wager";
  id?: string;
  league?: string;
  betType?: string;
  team?: string | null;
  period?: string;
  line?: number | null;
  odds?: number;
  amount?: number;
  inProgress?: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateWagerInput = {
  id: string;
  league?: string | null;
  betType?: string | null;
  team?: string | null;
  period?: string | null;
  line?: number | null;
  odds?: number | null;
  amount?: number | null;
  inProgress?: boolean | null;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
};

export type DeleteWagerInput = {
  id?: string | null;
};

export type ModelWagerFilterInput = {
  id?: ModelIDInput | null;
  league?: ModelStringInput | null;
  betType?: ModelStringInput | null;
  team?: ModelStringInput | null;
  period?: ModelStringInput | null;
  line?: ModelFloatInput | null;
  odds?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  inProgress?: ModelBooleanInput | null;
  result?: ModelStringInput | null;
  grossReturn?: ModelFloatInput | null;
  netReturn?: ModelFloatInput | null;
  and?: Array<ModelWagerFilterInput | null> | null;
  or?: Array<ModelWagerFilterInput | null> | null;
  not?: ModelWagerFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelWagerConnection = {
  __typename: "ModelWagerConnection";
  items?: Array<Wager | null> | null;
  nextToken?: string | null;
};

export type CreateWagerMutation = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWagerMutation = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWagerMutation = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetWagerQuery = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWagersQuery = {
  __typename: "ModelWagerConnection";
  items?: Array<{
    __typename: "Wager";
    id: string;
    league: string;
    betType: string;
    team?: string | null;
    period: string;
    line?: number | null;
    odds: number;
    amount: number;
    inProgress: boolean;
    result?: string | null;
    grossReturn?: number | null;
    netReturn?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateWagerSubscription = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWagerSubscription = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWagerSubscription = {
  __typename: "Wager";
  id: string;
  league: string;
  betType: string;
  team?: string | null;
  period: string;
  line?: number | null;
  odds: number;
  amount: number;
  inProgress: boolean;
  result?: string | null;
  grossReturn?: number | null;
  netReturn?: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateWager(
    input: CreateWagerInput,
    condition?: ModelWagerConditionInput
  ): Promise<CreateWagerMutation> {
    const statement = `mutation CreateWager($input: CreateWagerInput!, $condition: ModelWagerConditionInput) {
        createWager(input: $input, condition: $condition) {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWagerMutation>response.data.createWager;
  }
  async UpdateWager(
    input: UpdateWagerInput,
    condition?: ModelWagerConditionInput
  ): Promise<UpdateWagerMutation> {
    const statement = `mutation UpdateWager($input: UpdateWagerInput!, $condition: ModelWagerConditionInput) {
        updateWager(input: $input, condition: $condition) {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWagerMutation>response.data.updateWager;
  }
  async DeleteWager(
    input: DeleteWagerInput,
    condition?: ModelWagerConditionInput
  ): Promise<DeleteWagerMutation> {
    const statement = `mutation DeleteWager($input: DeleteWagerInput!, $condition: ModelWagerConditionInput) {
        deleteWager(input: $input, condition: $condition) {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWagerMutation>response.data.deleteWager;
  }
  async GetWager(id: string): Promise<GetWagerQuery> {
    const statement = `query GetWager($id: ID!) {
        getWager(id: $id) {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWagerQuery>response.data.getWager;
  }
  async ListWagers(
    filter?: ModelWagerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWagersQuery> {
    const statement = `query ListWagers($filter: ModelWagerFilterInput, $limit: Int, $nextToken: String) {
        listWagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            league
            betType
            team
            period
            line
            odds
            amount
            inProgress
            result
            grossReturn
            netReturn
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWagersQuery>response.data.listWagers;
  }
  OnCreateWagerListener: Observable<
    SubscriptionResponse<OnCreateWagerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWager {
        onCreateWager {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateWagerSubscription>>;

  OnUpdateWagerListener: Observable<
    SubscriptionResponse<OnUpdateWagerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWager {
        onUpdateWager {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateWagerSubscription>>;

  OnDeleteWagerListener: Observable<
    SubscriptionResponse<OnDeleteWagerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWager {
        onDeleteWager {
          __typename
          id
          league
          betType
          team
          period
          line
          odds
          amount
          inProgress
          result
          grossReturn
          netReturn
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteWagerSubscription>>;
}
