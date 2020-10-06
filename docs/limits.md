# Limits

## Positions

There is a maximum of 50 open positions per account.

## Rate

Requests to our REST API are rate limited to 1 requests per second.

Endpoint who does not require authentication are limited to 30 requests per minute.

If you throw too much error such as 4XX or 5XX we could ban your IP for a certain amount of time.


### Headers

Header | Value
---------- | -------
Retry-After | 14
X-Ratelimit-Remaining | 0
X-Ratelimit-Reset | 1601997680244

<br/>

Retry-After : Will tell you how many seconds you need to wait to call this endpoint if your limit is down to 0.

X-Ratelimit-Remaining : This is how many request do you have left.

X-Ratelimit-Reset: This is the timestamp in ms when you will be granted new points.
