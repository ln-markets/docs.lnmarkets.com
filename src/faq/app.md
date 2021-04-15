# LN Markets

[LN Markets](https://lnmarkets.com/) is a new type of Bitcoin derivatives trading platform, one that can only be accessed via the Lightning Network, a payment protocol running on top of Bitcoin.

Trading is done directly from any Lightning wallet and enables super fast access to derivatives markets. Open a position by making a Lightning transaction, close the position and receive the money directly in your wallet, as easy as that!

## Can I try LN Markets on Bitcoin Testnet?

Yes: [LN Markets Testnet](https://testnet.lnmarkets.com/).

While Bitcoin Mainnet is the original and main network for Bitcoin transactions, Bitcoin Testnet is an alternative blockchain used for testing. 

Testnet coins are separate and distinct from Mainnet coins and are never supposed to have any value. You can get Tesnet coins on [Bitcoin Testnet faucets](https://bitcointalk.org/index.php?topic=5237763.0).

## Any prerequisites?

You just need a Lightning Network wallet loaded with some fractions of bitcoins.

Some user-friendly Lightning wallets include [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), [Blue Wallet](https://bluewallet.io/), [BLW](https://lightning-wallet.com/), etc.

If you run a Lightning Network node, you can open a direct channel to [LN Market's node](https://lnmarkets.com/node).


## How to login to LN Markets?

No email or private data is required to access LN Markets.

There are three methods for authentication:
- Log in with LNURL: instant login with any wallet which supports [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) like [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. This is a seamless and efficient way to log in and trade on LN Markets: your wallet can sign a message with its Private Key. Hence, identification can be done just with your wallet’s Public Key and no other information is needed.

- Log in with WebLN: [WebLN](https://webln.dev/#/) is a way of interacting with a user's Lightning node via the browser. [Joule](https://lightningjoule.com/) is for example a WebLN-enabled browser extension that uses your own node.

- Log in with Credentials: you can create an account directly, entering your login and password. 

For account recovery, you have the option to enter an email address in your profile section.

## How can I deposit funds on LN Markets?

You can deposit satoshis to your trading account before entering a position. This deposit will be added to the margin available for entering positions in the future.

Maximum deposit is currently limited to 0.01 BTC or 1 million satoshis.

Click on the button Deposit and choose the amount you want to deposit to your account: your can select a preset amount (250k sats, 500k sats, 750k sats, Max Amount) or enter it manually.

Maximum amount is automatically computed to respect maximum deposit limits (1 million sats - margin available - margin used).

## What are the bid and offer prices?

LN Markets provides a bid price and an offer price for a defined quantity of contracts (1 contract = 1 USD).

## What are the parameters of a position?

You first have to define a side (buy or sell) and the order type: market order or limit order.

Then, you can define your position with a parameter, either the quantity or the margin. 

The quantity is the number of contracts you want to trade (1 contract = 1 USD). For a given quantity and leverage, margin and liquidation are automatically computed.


The margin is the deposit in sats required as collateral to open a position. For a given margin and leverage, quantity and liquidation are automatically computed.

You can also add optional take profit and stop loss orders, expressed in BTC/USD.

## How can I open a trading position?

To enter in a position, you must pay for your margin.

When clicking on the button Submit, a summary of the new position pops up for confirmation. 

If you had deposited enough funds to cover the margin payment, your position is immediately opened.

Else, you need to deposit more funds to your account.


## What is the All In button?

For a given side (buy or sell), the All In button generates a market order which maximizes the leverage and use of margin available.

## What are the trading limits on LN Markets?

There is a maximum margin available for trading per node. 

This limit is currently set to 0.01 BTC = 1,000,000 sats per account for Deposits (1 Mio sats - Margin Available - Margin Used) and Margin Used for open positions.

## What is the maximum leverage on LN Markets?

The maximum leverage you can take is currently set at x50.

## What is the price reference?

The price reference of a position is the price at which the position can be bought back at any time. 

For instance, for a long position to be unwind, one needs to sell the contract. Price for this sell order is the bid price, then price reference for this position is the bid price. 

Conversely, for a short position to be unwind, one needs to buy the contract. Price for this buy order is the offer price, then the price reference for this position is the offer price.

This rule applies to P&L computation, take profit, stop loss and liquidation orders.

## What is a liquidation event?

In case your margin can not cover the P&L, your position has to be liquidated with a liquidation order.

We do not charge extra margin for liquidation and the liquidation level is the exact level where the margin is equal to zero.

## How can I cross-margin positions?

At any time, you can add (+) or reduce margin (-) to open positions, clicking on the Actions part of the Open Positions blotter.

Adding margin to an open position, you reduce its leverage and decrease the probability of a liquidation event.

Removing margin from an existing position, you increase its leverage, but this will also increase your margin available for other positions and/or you can cash in and withdraw instantly this PL back to your wallet.

## What events trigger the closing of a position?

An automatic closing event occurs when a take profit or stop loss or liquidation order is filled. Details of the position are then available in the closed positions table.

A manual closing event occurs by pushing the button close of a specific position, or the Close All button on the open positions table. This cancels all the open orders and unwinds the filled orders with a market order.

## How can I withdraw funds from LN Markets?

You can withdraw part or your whole balance at any time with a Lightning invoice.

Click on withdraw and select a pre-set amount (25%, 50%, 75%, 100%) or enter it manually.

If you have a wallet with lnurl, you can just scan the QR code to receive the payment immediately. Else, you can just copy the invoice to your wallet.

## What are the overnight fees?

CFD Positions held overnight are subject to an overnight fee. This is because when you buy or sell a CFD, LN Markets is effectively lending you BTC.

The overnight fee is updated frequently according to market conditions and applies to running positions (limit orders become running once they are executed).

The overnight fee applies to the quantity expressed in BTC, computed and withdrawn from each margin position by 8:00 am UTC every day.

Example of overnight fee calculation: for a long position of Quantity = 10, with BTCUSD rate = $30,000, the overnight fee is = (10/30,000)*0.05%*100,000,000 = 16 satoshis.

## What is the cost of trading on LN Markets?

Contract | Bid-Offer | Maintenance Margin | Overnight Fee
------------ | ------------- | ------------ | -------------
CFD BTCUSD | 20bp | 0bp | See LN Markets

## What is the contract specification of the CFD BTCUSD listed on LN Markets?

BTCUSD Source | XBTUSD Index (BitMEX)
------------ | -------------
Price Ref | Bid Price (for long position) / Offer Price (for short position)
P&L | Quantity * (1/Entry Price -1/Price Ref)
Liquidation Level | (1 / Entry Price + Margin / Quantity)^-1
Trigger Indicator | Price Ref
Leverage Max | x50
Margin max (per account) | 1,000,000 sats

## How to use LN Markets API?

The [LN Markets API reference](https://docs.lnmarkets.com/api) provides information on available endpoints and how to interact with them.

The API endpoint for mainnet is: <https://api.lnmarkets.com>

The API endpoint for testnet is: <https://api.testnet.lnmarkets.com>

For authentication, we are currently using JSON Web Token (JWT). The token can be generated with various scopes: user, positions, deposit, withdraw. It can be valid for a period of time or indefinitely.

There is also a websocket endpoint where you can gather real time data from LN Markets such as bid, offer, index and last price.

The websocket endpoint for mainnet is: <wss://api.lnmarkets.com/realtime>

Here are some step-by-step tutorials on how to use LN Markets API with:
- [Python](https://research.ito.am/ln-markets-api-python-tutorial/)
- [Node.js](https://research.ito.am/ln-markets-api-nodejs-tutorial/)
- [cURL](https://research.ito.am/ln-markets-api-curl-tutorial/)

## What are LN Markets API limits?

There are two types of limits: positions and rate.

There is a maximum of 50 open positions per account.

Requests to our REST API are limited to 1 request per second. Endpoints which do not require authentication are limited to 30 requests per minute.

Connections to our websocket are limited to 60 per hour.

If an IP address throws too many errors, it could be banned for a certain period of time.

## Are there any geographical restictions to use LN Markets?

Yes, an IP address blocking for US residents is effective on [LN Markets](https://lnmarkets.com/).