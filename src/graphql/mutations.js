/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactFormEntry = /* GraphQL */ `
  mutation CreateContactFormEntry(
    $input: CreateContactFormEntryInput!
    $condition: ModelContactFormEntryConditionInput
  ) {
    createContactFormEntry(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      website
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateContactFormEntry = /* GraphQL */ `
  mutation UpdateContactFormEntry(
    $input: UpdateContactFormEntryInput!
    $condition: ModelContactFormEntryConditionInput
  ) {
    updateContactFormEntry(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      website
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteContactFormEntry = /* GraphQL */ `
  mutation DeleteContactFormEntry(
    $input: DeleteContactFormEntryInput!
    $condition: ModelContactFormEntryConditionInput
  ) {
    deleteContactFormEntry(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      website
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      category
      title
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      category
      title
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      category
      title
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
