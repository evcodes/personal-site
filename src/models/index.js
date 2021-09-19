// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "WEB_DEV": "WEB_DEV",
  "MOBILE_DEV": "MOBILE_DEV",
  "CLOUD": "CLOUD",
  "SERVERLESS": "SERVERLESS",
  "TECH_SECTOR": "TECH_SECTOR",
  "BUSINESS": "BUSINESS",
  "OTHER": "OTHER"
};

const { ContactFormEntry, Post } = initSchema(schema);

export {
  ContactFormEntry,
  Post,
  Category
};