// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Wager } = initSchema(schema);

export {
  Wager
};