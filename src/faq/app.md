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

If you run a Lightning Network node, you can open a direct channel to [LN Market's node](https://lnmarkets.com/lightning).


## How to connect to LN Markets?

No email or private data is required to access LN Markets.

There are various methods to connect to LN Markets:

- Sign in with LNURL: instant with any wallet which supports [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) like [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. This is a seamless and efficient way to log in and trade on LN Markets: your wallet can sign a message with its Private Key. Hence, identification can be done just with your wallet’s Public Key and no other information is needed.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Sign in with Credentials: you can create an account directly, entering your login and password.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

You have the option to enter an email address for account recovery.

- Sign in with [Alby](https://getalby.com/) and [Joule](https://lightningjoule.com/): they are Bitcoin Lightning Browser extensions that connects to different wallet interfaces and brings deep lightning integration to the web.

- Sign in with [Ligthning Node Connect](https://github.com/lightninglabs/lightning-node-connect): a protocol to safely and easily connect your node to a web or mobile application like LN Markets.

## How can I deposit funds on LN Markets?

You can deposit satoshis to your trading account before entering a position. This deposit will be added to the margin available for entering positions in the future.

Click on the button Deposit on the lower left hand corner and choose the amount you want to deposit to your account.

You can either deposit funds with a Lightning transaction or with a regular Bitcoin transaction On Chain.

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

This limit is currently set to 0.1 BTC = 10,000,000 sats per account for Margin Used for open positions.

## What is the maximum leverage on LN Markets?

The maximum leverage you can take is currently set at x100.

## What is the price reference?

The price reference of a position is the price at which the position can be bought back at any time. 

For instance, for a long position to be unwind, one needs to sell the contract. Price for this sell order is the bid price, then price reference for this position is the bid price. 

Conversely, for a short position to be unwind, one needs to buy the contract. Price for this buy order is the offer price, then the price reference for this position is the offer price.

This rule applies to P&L computation, take profit, stop loss and liquidation orders.

## What is a liquidation event?

In case your margin can not cover the P&L, your position has to be liquidated with a liquidation order.

We do not charge extra margin for liquidation and the liquidation level is the exact level where the margin is equal to zero.

## How can I cross-margin positions?

At any time, you can add margin (+)  to open positions, clicking on the Actions part of the Open Positions blotter.
This way, you will reduce the leverage of the open position and decrease the probability of a liquidation event.

For open positions with positive P&L, you can also reduce margin (-), clicking on the Actions part of the Open Positions blotter.
This way, you will increase the leverage of the open position, but this will also increase your margin available for other positions. You can also cash in and withdraw instantly this PL back to your wallet.

## What events trigger the closing of a position?

An automatic closing event occurs when a take profit or stop loss or liquidation order is filled. Details of the position are then available in the closed positions table.

A manual closing event occurs by pushing the button close of a specific position, or the Close All button on the open positions table. This cancels all the open orders and unwinds the filled orders with a market order.

## How can I withdraw funds from LN Markets?

You can withdraw part or your whole balance at any time with a Lightning invoice.

Click on the button Withdraw on the lower left hand corner and choose the amount you want to withdraw to your account.

If you have a wallet with LNURL, you can just scan the QR code to receive the payment immediately. Else, you can just copy the invoice to your wallet.

## What are the funding fees?

CFD Positions are subject to a funding fee. This is because when you buy or sell a CFD, LN Markets is effectively lending you BTC.

The funding fee is updated every 8 hours according to market conditions and applies to running positions (limit orders become running once they are executed).

The funding fee is computed with the quantity expressed in BTC and withdrawn from each margin position every 8 hours at 4:00 am, 12:00 pm and 8:00pm UTC.

Example of funding fee calculation: for a funding rate of 0.01%, a long position of Quantity = 10, with BTCUSD rate = $30,000, the funding fee is = (10/30,000)*0.01%*100,000,000 = 3 satoshis.

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
Leverage Max | x100
Margin max (per account) | 10,000,000 sats

## How to use LN Markets API?

The [LN Markets API reference](https://docs.lnmarkets.com/api/v1/) provides information on all available endpoints.

The API endpoint for mainnet is: <https://api.lnmarkets.com/v1>

The API endpoint for testnet is: <https://api.testnet.lnmarkets.com/v1>

Here are two Python and JavaScript packages to easily interact with the API:
- [Python package](https://pypi.org/project/ln-markets/)
- [JavaScript package](https://www.npmjs.com/package/@ln-markets/api)

## What are LN Markets API limits?

There are two types of limits: positions and rate.

There is a maximum of 50 open positions per account.

Requests to our REST API are limited to 1 request per second. Endpoints which do not require authentication are limited to 30 requests per minute.

Connections to our websocket are limited to 60 per hour.

If an IP address throws too many errors, it could be banned for a certain period of time.

## Are there any geographical restictions to use LN Markets?

Yes, an IP address blocking for US residents is effective on [LN Markets](https://lnmarkets.com/).

## What is the trollbox?

The Trollbox is the LN Markets chat-room that lives on the main page. It is a gathering place for people with a passion for Bitcoin, Lightning and LN Markets. 
In order to keep this community productive and inclusive for all, we have set some community standards that we ask all participants to adhere to.