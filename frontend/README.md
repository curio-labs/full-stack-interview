# Frontend interview

This interview has 2 options. If you have used GraphQL please go for option A, otherwise go for option B.

## A: retrieve a list of publication logos from a REST API

In this second part we would like to render a list of publication logos in the path /publications. Here is a sketch of the page:

<img src="https://github.com/curio-labs/frontend-interview/blob/main/docs/publications.png" width="250"/>

In order to retrieve the publications, we need to call a REST API endpoint. If possible, please avoid using any libraries to fetch and cache content.

https://api.curio.io/api/providers?type=publication

Type of the response:

```
export type Response = {
    data?: Publication[];
} | {
    error?: string
}

export interface Publication {
    id:                 string;
    name:               string;
    slug:               string;
    description:        string;
    imageUrl:           string;
    wordImageUrl:       string;
    hidden:             boolean;
    storyAddendum:      null;
    websiteUrl:         null;
    creatorTitle?:       null;
    creatorDescription?: null;
    creatorImageUrl?:    null;
}
```

## B: building a search page for stories using a GraphQL query

We would like to build a small React app where users can search for stories.

Here is a sketch of the page we would like to build:

<img src="https://github.com/curio-labs/frontend-interview/blob/main/docs/stories.png" width="250"/>

In order to retrieve stories, we need to get a field from our GraphQL API. Feel free to use any libraries of your choice.

The GraphQL API to consume:
https://gql.beta.curio.io/

Here’s the Playground URL for our API:

https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Fgql.beta.curio.io%2F

The query to use for the search:

```
query Search(
  $q: String!
) {
  search(
    q: $q
  ) {
    story {
      id
      title
      description
      imageUrl
      thumbnailImageUrl
      publishedAt
      media {
        duration
        mp3Url
      }
      provider {
        ... on Publication {
          name
          imageUrl
        }
        ... on Thinker {
          name
          imageUrl
        }
      }
    }
  }
}
```
