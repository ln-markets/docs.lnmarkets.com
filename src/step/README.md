# Step-by-Step Guide

In this guide, we will show you how to create an account on LN Markets, make your first trades, and leverage LN Markets functionalities!

<img :src="$withBase('/assets/lnm.png')" alt="LN Markets">

LN Markets is an alpha software under active development.

Please use with care, preferably on [Testnet](https://testnet.lnmarkets.com/) or with small amounts.

LN Markets comes with no guarantees, use at your own risk.

## Login

On [LN Markets](https://lnmarkets.com/), click on Login in the upper right hand corner:

<img :src="$withBase('/assets/login.png')" alt="login">

There are three methods for authentication:

- Log in with LNURL: instant login with any wallet which supports [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) like [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. This is a seamless and efficient way to log in and trade on LN Markets: your wallet can sign a message with its Private Key. Hence, identification can be done just with your wallet’s Public Key and no other information is needed.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Log in with WebLN: [WebLN](https://webln.dev/#/) is a way of interacting with a user's Lightning node via the browser. [Joule](https://lightningjoule.com/) is for example a WebLN-enabled browser extension that uses your own node.

<img :src="$withBase('/assets/joule.png')" alt="joule">

- Log in with Credentials: you can create an account directly, entering your login and password.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

You have the option to enter an email address for account recovery.

## Fund your account

Click on the button Deposit on the lower left hand corner and choose the amount you want to deposit to your account.

<img :src="$withBase('/assets/deposit.png')" alt="deposit">

Maximum amount is automatically computed to respect maximum deposit limits (1 million sats - margin available - margin used).

To confirm this deposit, you can scan the QR Code with your wallet, click on it (for WebLN apps) or copy the invoice and paste it directly:

<img :src="$withBase('/assets/depositqr.png')" alt="depositqr">

Your deposit is now confirmed and you can see it in your balance.

<!--<img :src="$withBase('/assets/deposit_conf.png')" alt="deposit_conf">

<img :src="$withBase('/assets/deposit_balance.png')" alt="deposit_balance">-->

## Open a trade

LN Markets quotes a bid-offer (in the upper bar) and is direct counterparty to all trades.

The first contract we list is a CFD (Contract for Difference) on BTCUSD price with leverage up to x50.

Opening a long position is at the Offer price and conversely, opening a short position is a the Bid price.

<img :src="$withBase('/assets/trade.png')" alt="trade">

To enter a position, you first have to define a side (buy or sell) and the order type: market order or limit order.

Then, you can define your position with a parameter, either the quantity or the margin.

This deposit will be added to the margin available for entering positions in the future.

The quantity is the number of contracts you want to trade (1 contract = 1 USD). For a given quantity and leverage, margin and liquidation are automatically computed.

The margin is the amount in sats you want to use for this position. For a given margin and leverage, quantity and liquidation are automatically computed.

You can also add optional take profit and stop loss orders, expressed in BTC/USD.

After confirming your oder, the position is open and you can see it in the Running blotter in the lower section:

<img :src="$withBase('/assets/running_blotter.png')" alt="running_blotter">

## Go All In

For a given side (buy or sell), the All in button generates a market order which maximizes the leverage and use of margin available.

## Edit a trade

For each position, you can add a Stop Loss and a Take Profit.

<img :src="$withBase('/assets/stop_loss.png')" alt="stop_loss">

You can also take the following Actions: remove margin (-) to cash-in P&L, increase margin (+) to decrease the probability of a liquidation event and close the position.

<img :src="$withBase('/assets/add_margin.png')" alt="add_margin">

And you can close each position imdividually or click on the Close All button.

<img :src="$withBase('/assets/close_all.png')" alt="close_all">

You can find all your closed positions in the Closed blotter in the lower section.

## Withdraw funds to your wallet

Click on the button Deposit on the lower left hand corner and choose the amount you want to deposit to your account.

<img :src="$withBase('/assets/withdraw.png')" alt="withdraw">

If you have a wallet with [LNURL](https://github.com/fiatjaf/awesome-lnurl#wallets), you can just scan the QR code to receive the payment immediately. Else, you can just copy the invoice to your wallet.

## Edit your profile

Click on your Profile section under your Login name to edit your username, your leaderboard settings, update your password and generate your API keys tokens:

<img :src="$withBase('/assets/profile.png')" alt="profile">

You can also see your history of deposits and withdrawals.

## Use LN Markets API

The [LN Markets API reference](https://docs.lnmarkets.com/api) provides information on available endpoints and how to interact with them.

Here are some step-by-step tutorials on how to use LN Markets API with:

- [Python](https://research.ito.am/ln-markets-api-python-tutorial/)
- [Node.js](https://research.ito.am/ln-markets-api-nodejs-tutorial/)
- [cURL](https://research.ito.am/ln-markets-api-curl-tutorial/)
