# Standard Strapi 4 & Nuxt 3 project.



It includes:

- Full docker compose setup for local development.

- Single Dockerfile to build both frontend & api images.

- GraphQL codegen to generate types from the Strapi GraphQL api.



## Commands needed:



Install Frontend Dependencies

```docker compose run --rm frontend yarn```



Install API Dependencies

```docker compose run --rm strapi yarn```



Make sure the API RUNS:

```docker compose up strapi```



Generate Frontend Types (after every change in your graphql queries)

```docker compose run --rm frontend yarn generate-types```



Run the full project

```docker compose up```



## Where to access apps

Frontend

```localhost:3000```



Strapi

```localhost:1337```



Strapi Graphql playground:

```localhost:1337/graphql```

