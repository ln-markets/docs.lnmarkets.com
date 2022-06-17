# Step-by-Step Guide

In this guide, we will show you how to create an account on LN Markets, make your first trades, and leverage LN Markets functionalities!

<img :src="$withBase('/assets/lnm.png')" alt="LN Markets">

LN Markets is an alpha software under active development.

Please use with care, preferably on [Testnet](https://testnet.lnmarkets.com/) or with small amounts.

LN Markets comes with no guarantees, use at your own risk.

## Connection to LN Markets

On [LN Markets](https://lnmarkets.com/), click on Sign In in the upper right hand corner:

<img :src="$withBase('/assets/login.png')" alt="login">

There are four methods to connect to LN Markets:

- Sign in with LNURL: instant with any wallet which supports [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) like [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. This is a seamless and efficient way to log in and trade on LN Markets: your wallet can sign a message with its Private Key. Hence, identification can be done just with your wallet’s Public Key and no other information is needed.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Sign in with Credentials: you can create an account directly, entering your login and password.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

You have the option to enter an email address for account recovery.

- Sign in with [Alby](https://getalby.com/) and [Joule](https://lightningjoule.com/): they are Bitcoin Lightning Browser extensions that connects to different wallet interfaces and brings deep lightning integration to the web.

## Fund your account

Click on the button Deposit on the lower left hand corner.

You can either deposit with a Lightning transaction or with a regular Bitcoin transaction

For a Lightning transaction, you can scan the QR Code with your wallet or copy the invoice and paste it to your wallet.

<img :src="$withBase('/assets/deposit.png')" alt="deposit">

For an on-chain transaction, you can scan the QR Code with your wallet or copy and paste it to your wallet.

<img :src="$withBase('/assets/deposit_onchain.png')" alt="deposit_onchain">

Your deposit is now confirmed and you can see it in your balance.

<!-- <img :src="$withBase('/assets/depositqr.png')" alt="depositqr"> -->

## Trade Futures

We quote a bid-offer (in the upper bar) and we are direct counterparty to all trades.

In the Futures section, the first contract we list is a CFD (Contract for Difference) on BTCUSD price with leverage up to x100.

Opening a long position is at the Offer price and conversely, opening a short position is a the Bid price.

<img :src="$withBase('/assets/trade.png')" alt="trade">

To enter a position, you first have to define a side (buy or sell) and the order type: market order or limit order.

Then, you can define your position with a parameter, either the quantity or the margin.

This deposit will be added to the margin available for entering positions in the future.

The quantity is the number of contracts you want to trade (1 contract = 1 USD). For a given quantity and leverage, margin and liquidation are automatically computed.

The margin is the amount in sats you want to use for this position. For a given margin and leverage, quantity and liquidation are automatically computed.

You can also add optional take profit and stop loss orders, expressed in BTC/USD.

After confirming your order, the position is open and you can see it in the Running blotter in the lower section:

<img :src="$withBase('/assets/running_blotter.png')" alt="running_blotter">

### Go All In

For a given side (buy or sell), the All in button generates a market order which maximizes the leverage and use of margin available.

### Edit a trade

For each position, you can add a Stop Loss and a Take Profit.

<img :src="$withBase('/assets/stop_loss.png')" alt="stop_loss">

You can also take the following Actions: remove margin (-) to cash-in P&L, increase margin (+) to decrease the probability of a liquidation event and close the position.

<img :src="$withBase('/assets/add_margin.png')" alt="add_margin">

And you can close each position imdividually or click on the Close All button.

<img :src="$withBase('/assets/close_all.png')" alt="close_all">

You can find all your closed positions in the Closed blotter in the lower section.

## Trade Options

We quote a bid-offer (in the upper bar) and we are direct counterparty to all trades.

In the Options section, you can trade two types of Options on BTCUSD forward price: calls (options to buy), puts (options to sell) and straddles (combination of a call and a put for the same strike).

<img :src="$withBase('/assets/options_trading.png')" alt="options_trading">

We want to demystify options trading and make them accessible to all. That’s why we have made the following choices:
- You can only buy options. If you’re a bull, buy calls. If you’re a bear, buy puts. If you expect volatility but are not sure of the direction, buy straddles.
- They are 24-hour options: they expire 1 day after opening the position (you can close them at any time before expiry).
- There are 3 strikes for calls (next thousand down and 2 next thousands up) and for puts (next thousand up and two next thousands down), and two strikes for straddles (the two common to calls and puts).
- As with futures you have to pay a margin to open the option contract (which corresponds to the option premium).
- For the delivery at expiry, you can choose cash delivery (PL of the option) or physical delivery: you get a futures contract running for the given strike.

<img :src="$withBase('/assets/options_conf.png')" alt="options_conf">

After confirming your order, the position is open and you can see it in the Running blotter in the lower section:

<img :src="$withBase('/assets/running_blotter_options.png')" alt="running_blotter_options">

## Withdraw funds to your wallet

Click on the button Withdraw on the lower left hand corner and choose the amount you want to deposit to your account.

<img :src="$withBase('/assets/withdraw.png')" alt="withdraw">

If you have a wallet with [LNURL](https://github.com/fiatjaf/awesome-lnurl#wallets), you can just scan the QR code to receive the payment immediately. Else, you can just copy the invoice to your wallet.

## Edit your account

Click on your Profile section en la esquina superior derecha to edit your username, your leaderboard settings, update your password and generate your API keys tokens:

<img :src="$withBase('/assets/profile.png')" alt="profile">

You can also see your history of deposits and withdrawals.

## Use LN Markets API

The [LN Markets API reference](https://docs.lnmarkets.com/api/v1/) provides information on all available endpoints.

Here are two Python and JavaScript packages to easily interact with the API:
- [Python package](https://pypi.org/project/ln-markets/)
- [JavaScript package](https://www.npmjs.com/package/@ln-markets/api)
