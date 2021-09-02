// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContactFormEntry, Post } = initSchema(schema);

export {
  ContactFormEntry,
  Post
};