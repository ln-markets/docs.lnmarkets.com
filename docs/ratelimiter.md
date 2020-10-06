# Rate Limiter

Requests to our REST API are rate limited to 1 requests per second.

Endpoint who does not require authentication are limited to 30 requests per minute.

If you throw too much error such as 4XX or 5XX we could ban your IP for a certain amount of time.


### Headers
```python
"retry-after": "14",
"x-ratelimit-remaining": "0",
"x-ratelimit-reset": "1601997680244",
```

retry-after will tell you how many seconds you need to wait to call this endpoint

x-ratelimit-remaining is how many request do you have left
