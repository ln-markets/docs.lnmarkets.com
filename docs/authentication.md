# Authentication

One type of authentication is required, currently we are using a JSON Web Token ([JWT](https://jwt.io/))

The token can be generated with various scopes such as:
- user
- positions
- deposit
- withdraw

The JWT can be valid for a period of time (15m, 30m, 1h,6h ,12h ,24h , ... 30d) or indefinitely.
The JWT must be provided within the header AUTHORIZATION like :

`Authorization: Bearer <token>`

__Note :__ Never share your JWT !

You can revoke any JWT on your profile page
