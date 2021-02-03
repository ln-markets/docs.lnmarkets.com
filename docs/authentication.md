# Authentication

One type of authentication is required, currently we are using a JSON Web Token ([JWT](https://jwt.io/))

In order to generate your JWT, go to your Profile on [LN Markets](https://lnmarkets.com/) (click on the menu in the upper right corner) and select API Tokens. 

You can now generate your token for various scopes: user, positions, deposit, withdraw. 

Your JWT can be valid for a given period of time or indefinitely.

The JWT must be provided within the header AUTHORIZATION like :

`Authorization: Bearer <token>`

__Note :__ Never share your JWT !

You can revoke any JWT on your profile page.
