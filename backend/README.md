# Restaurant Suggestion API

We want to have a RESTful Restaurant Suggestion JSON API.
If you use our existing one as intended it kind of works, but it's unreliable.

## How to install and run:

```sh
npm install
npm run dev
```

## Currently we support the following endpoints:

```sh
curl http://localhost:3000/get-restaurants
```

```sh
curl http://localhost:3000/get-suggested-restaurant
```

```sh
curl -XPOST http://localhost:3000/add-restaurant -d '{"restaurant": "1990 Vegan Living"}'
```

```sh
curl -XPOST http://localhost:3000/remove-restaurant -d '{"restaurant": "Pizza Zola"}'
```

## Questions

- What would you change?
- How would you structure this? How would each endpoint look like?
- Can you identify any security issue?
- What kind of databases have you used and which one would you use in this case?