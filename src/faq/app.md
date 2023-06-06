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

## What is the Futures price?

The Futures price is the reference BTC/USD price.

## What are the parameters of a position?

You first have to define a side (buy or sell) and the order type: market order or limit order.

Then, you can define your position with a parameter, either the quantity or the margin. 

The quantity is the number of contracts you want to trade (1 contract = 1 USD). For a given quantity and leverage, margin and liquidation are automatically computed.

The initial margin is the deposit in sats required as collateral to open a position. For a given initial margin and leverage, quantity and liquidation are automatically computed.

You can also add optional take profit and stop loss orders, expressed in BTC/USD.

## How can I open a trading position?

To enter in a position, you must pay for your margin. When clicking on the button Submit, a summary of the new position pops up for confirmation.

If you have deposited enough funds to cover the margin payment, your position is immediately opened.

Else, you need to deposit more funds to your account.

## What is the All In button?

For a given side (buy or sell), the All In button generates a market order which maximizes the leverage and use of margin available.

## What are the trading limits on LN Markets?

There is a maximum margin available for trading per node. 

This limit is currently set to 0.1 BTC = 10,000,000 sats per account for Margin Used for open positions.

## What is the maximum leverage on LN Markets?

The maximum leverage you can take is currently set at x100.

## What is the margin?

When buyers and sellers want to enter a Bitcoin derivatives position, to make sure they honor their contractual obligations, exchanges and trading platforms require them to deposit and maintain an account funded with Bitcoin as collateral: this is called the margin.

For a given margin and leverage, quantity and liquidation are automatically computed (margin = quantity / (price * leverage)).

On LN Markets, each margin is dedicated to a specific position. Hence, a trader can have different positions with a specific margin policy for each one.

Margin is expressed in sats (1 BTC = 100,000,000 satoshis or sats).

## What is the initial margin?

The initial margin is the minimum amount to deposit in collateral to open a trade. It is equal to a margin computed for a given quantity and leverage plus a maintenance margin, which is the minimum amount to keep your position open (it includes closing fees).

## What is the maintenance margin?

The maintenance margin represents the lowest required balance to keep your position or order active. It encompasses a reserve to cover the costs associated with opening and closing the position. 

When an order is executed (whether it's an opening or closing order), the fees are subtracted from the maintenance margin. For market orders, this deduction occurs immediately upon placing the order, as the execution is instantaneous.

## What are the trading fees?

Your opening and closing fee depend on the Tier in which you belong. The higher your trading volume, the lower your trading fees. Check your Profile to know your Tier.

## How are computed fees?

Initially, Total fee paid = 0 and maintenance margin = opening fee reserved + closing fee reserved, with opening fee reserved = quantity / entry price * Tier1 fee and closing fee reserved = quantity / initial liquidation price * Tier1 fee. 

At the time of trading, Total fee paid = opening fee and maintenance margin = opening fee reserved + closing fee reserved - opening fee. Opening fee reserved and opening fee can be different in case of change of Tier fee.

When closing a position, Total fee paid = opening fee + closing fee and maintenance margin = opening fee reserved + closing fee reserved - opening fee - closing fee.
And users will receive P&L + margin + maintenance margin.

## What is the liquidation?

Liquidation is the forced closure of a running position. It occurs If the Futures price falls below the liquidation level for long positions, or rises above the liquidation level for short positions.

## What is the margin ratio?

When the margin ratio reaches 100% your position is liquidated. Margin ratio = maintenance margin / (initial margin + P&L - Fee).

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

Your trading fee depends on the Tier fee in which you belong. The more volume you make, the lower your trading fee will be.

Tier | 30-Day Cumulative Trading Volume | Trading Fee
------------ | ------------- | ------------
Tier 1 | < $250,000 | 0.1%
Tier 2 | < $1,000,000 | 0.08%
Tier 3 | < $2,500,000 | 0.07%
Tier 4 | < $5,000,000 | 0.06%

The 30-Day Cumulative Trading Volume Trading Volume is computed every hour on the closed positions. Running positions are not included in the computation.

## What is the contract specification of the CFD BTCUSD listed on LN Markets?

BTCUSD Source | XBTUSD Index (BitMEX)
------------ | -------------
P&L | Quantity * (1/Entry Price -1/Price Ref)
Liquidation Level | (1 / Entry Price + (Initial Margin - Maintenance Margin) / Quantity)^-1
Leverage Max | x100
Margin max (per trade) | 10,000,000 sats

## How to use LN Markets API?

The [LN Markets API reference](https://docs.lnmarkets.com/api/v2/) provides information on all available endpoints.

The API endpoint for mainnet is: <https://api.lnmarkets.com/v2>

The API endpoint for testnet is: <https://api.testnet.lnmarkets.com/v2>

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

## What is the Trollbox?

The Trollbox is the LN Markets chat-room that lives on the main page. It is a gathering place for people with a passion for Bitcoin, Lightning and LN Markets. 
In order to keep this community productive and inclusive for all, we have set some community standards that we ask all participants to adhere to.

You can use special commands in the Trollbox to share your positions with the community:
- /help show all commands available
- /futures shares info on the last futures trade you made
- /options shares info on the last option trade you made
- /futures (pid) shares info on futures trades for a specific position id (get the position id or pid clicking on the position number in the trade blotter)
- /options (pid) shares info on options trades for a specific position id (get the position id or pid clicking on the position number in the trade blotter)
