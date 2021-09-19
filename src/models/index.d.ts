import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Category {
  WEB_DEV = "WEB_DEV",
  MOBILE_DEV = "MOBILE_DEV",
  CLOUD = "CLOUD",
  SERVERLESS = "SERVERLESS",
  TECH_SECTOR = "TECH_SECTOR",
  BUSINESS = "BUSINESS",
  OTHER = "OTHER"
}



export declare class ContactFormEntry {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly emailAddress?: string;
  readonly website?: string;
  readonly message?: string;
  constructor(init: ModelInit<ContactFormEntry>);
  static copyOf(source: ContactFormEntry, mutator: (draft: MutableModel<ContactFormEntry>) => MutableModel<ContactFormEntry> | void): ContactFormEntry;
}

export declare class Post {
  readonly id: string;
  readonly category: Category | keyof typeof Category;
  readonly title: string;
  readonly body?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}