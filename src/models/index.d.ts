import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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
  readonly category: string;
  readonly title: string;
  readonly body?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}