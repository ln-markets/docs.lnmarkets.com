# Lightning

## What is the Lightning Network?

The Lightning Network (LN) is a payment protocol that operates on top of Bitcoin: it is a network of Bitcoin nodes whose purpose is to allow the instant transfer of bitcoins between its participants. The Lightning Network leverages Bitcoin smart contracts to minimize the need for blockchain transactions.

Until the deployment of Lightning Network in early 2018, it was only possible to send bitcoins recording each transaction in the Bitcoin blockchain. Though it remains today the most widely used way to transfer bitcoins, it is also the slowest and the most expensive.

On the contrary, a Lightning transaction does not need to be recorded on the Bitcoin blockchain to guarantee its existence, its validity and its issuer’s solvency: transaction fees and execution time are reduced to a minimum.

For more information on the Lightning Network: [Jameson Lopp's Lightning Network Resources](https://www.lopp.net/lightning-information.html)

## How does the Lightning Network work?

Let’s say Alice and Bob want to to start using the Lightning Network for fast and cost-efficient bitcoin payments.

They can first open a bidirectional payment channel following these steps:
- Creating a multi-signature wallet: a wallet that can be accessed by Alice and Bob using their respective private keys
- Doing a funding transaction: a deposit of a certain amount of bitcoin to this wallet by Alice and/or Bob

Alice and Bob’s bidirectional payment channel is now open and Alice and Bob’s Lightning nodes can start sending each other funds, through what are called commitment transactions. The total amount of commitment transactions cannot exceed the amount of the funding transaction.

Alice and Bob’s bidirectional payment channel can remain open as long as they want and the commitment transactions will not affect their bitcoin balances until the channel is closed, through what is called a settlement transaction.

Now how to go from bidirectional payment channels to the Lightning Network ? 

Let’s say Alice wants to send a bitcoin payment to Charlie. Alice does not have an bidirectional payment channel opened with Charlie, but Bob does. If the channel between Alice and Bob is still open, Alice’s Lightning node can route the payment to Charlie through Bob’s node. If Alice and Bob’s payment channel is closed, Alice’s node will try to find another route to Charlie’s node using other connections. And if there is no such route, Alice and Charlie will be required to open a direct bidirectional payment channel between themselves.

For more information: [Lightning Network White Paper](https://lightning.network/lightning-network-paper.pdf)

## What is a Lightning Network node?

A Lightning Network node is a software that connects to the Lightning Network to send and receive bitcoins from other nodes.

The Lightning Network is a peer-to-peer network made up of these nodes connecting to each other. The more nodes in the network, the stronger it is. Indeed, the more nodes open payment channels, the more total network liquidity increases which means that overall more users can send more money to more people.

A Lightning Network node is in charge of monitoring the underlying Bitcoin blockchain and interacting with other nodes to transfer payments.


There are currently three main teams building Lightning Network implementations:
- Lightning Lab’s [lnd](https://github.com/lightningnetwork/lnd) in Go
- Blockstream's [c-lightning](https://github.com/ElementsProject/lightning) in C
- ACINQ's [eclair](https://github.com/ACINQ/eclair) in Scala

All non-custodial Lightning wallets run their own Lightning node.

## What is a Lightning Network wallet?

A wallet is the most common user interface to the Bitcoin and Lightning networks, just like the web browser is the most common interface for the HTTP protocol.

A Bitcoin wallet is an application or a program that that enables you to send and receive bitcoin units. A Lighting-enabled wallet is a Bitcoin wallet that enables you to interact with the Lightning Network.

Wallets manage public and private keys, track balances, and create and sign transactions.

Keys are often stored in a digital wallet on each user’s computer or smartphone. Possession of the key that can sign a transaction is the only prerequisite to spend bitcoins.

Wallets can either be custodial or non-custodial. 

A custodial wallet is one in which private keys are held by a third party, which means that the third-party has full control over the funds. A non-custodial wallet is one in which the user has full control over his private keys, hence over his funds. 

In a nutshell, choosing between a non-custodial and a custodial wallet is often a question of trade-off between security (not your keys, not your bitcoins) and convenience (non-custodial wallets may provide a more simple user experience). 

In our view, sLightning wallets such as [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/) or [BLW](https://lightning-wallet.com/) combine great user experience and control over your keys.

There are multiple types of Lightning wallets, the most used are:
- Desktop wallets (on Windows, macOS, Linux, etc.)
- Mobile wallets (on iOS, Android, etc.)
- Hardware wallets (self-hosted Bitcoin and Lightning node)

## How to get a Lightning Network wallet?

The most simple way to get your first Lightning wallet is to download a software on your desktop or mobile. More advanced users may prefer hardware wallets (self-hosted Bitcoin and Lightning nodes).

Here is a (non-exhaustive) table summarizing the most popular software Lightning wallets and their main characteristics:

Wallet | Type | Environment | Direct authentication | Direct withdraw
-------| ---- | ----------- | --------------------- | ---------------
[Blue Wallet](https://bluewallet.io/)	| Custodial	| Desktop iOS Android	| x	| √
[BLW](https://lightning-wallet.com/)	| Non-custodial	| Android	| √	| √
[Breez](https://breez.technology/)	| Non-custodial	| iOS Android	| √	| √
[Electrum](https://electrum.org/#home)	| Non-custodial	| Desktop	| x	| x
[Joule](https://lightningjoule.com/)	| Non-custodial	| Browser Extension	| x	| x
[Phoenix](https://phoenix.acinq.co/)	| Non-custodial	| iOS Android	| √	| √
[Wallet of Satoshi](https://www.walletofsatoshi.com/)	| Custodial	| iOS Android	| x	| √
[ZAP](https://zaphq.io/)	| Non-custodial	| Desktop iOS Android	| x	| √
[Zeus](https://zeusln.app/)	| Non-custodial	| iOS Android	| x	| √
[@lntxbot](https://t.me/lntxbot)	| Custodial	| Telegram	| √	| √

Direct authentication: on LN Markets with [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl)

Direct withdrawal: of your funds on LN Markets with [lnurl-withdraw](https://github.com/fiatjaf/awesome-lnurl)

## How can I get bitcoins?

There are several ways to acquire bitcoins:
- The most common way is through a Bitcoin exchange. Be careful before choosing one, here is a [comparison](https://en.bitcoin.it/wiki/Comparison_of_exchanges) you may want to refer to to minimize risks 
- Browse a peer-to-peer directory: here is a [list](https://bitcoin.org/en/exchanges#p2p) of P2P directories by country where sellers have reviews and feedback to help you choose
- Use a Bitcoin ATM: they allow you to deposit and withdraw money so that you can you buy and sell bitcoin. Here is an [interactive map](https://coinatmradar.com/) to find the closest near you
- Accept bitcoins as payment for goods and services

## How to receive your first sats to your Bitcoin wallet?

You have to receive sats to your Lightning wallet through a Bitcoin transaction.

Though the exact terminology may depend on the wallet you are using, you generally need to click on Receive Funds, through a Bitcoin transaction. Your wallet should then generate a QR Code and/or a Bitcoin address that you can use to send your bitcoins to.

## How to send payments on the Lightning Network?

Though the exact terminology may depend on the Lightning wallet you are using, you generally need to click on Send Funds, through a Lightning payment. You can then either paste a payment request for a certain amount of satoshis, which is called an invoice, or scan a QR Code of this invoice.

## How to receive payments on the Lightning Network?

Though the exact terminology may depend on the Lightning wallet you are using, you generally need to click on Receive Funds, through a Lightning payment. You can then enter the amount of satoshis you want to receive and generate a payment request, called an invoice, that you can send to party you want to receive funds from.

## How are payments routed on the Lightning Network?

If a bidirectional payment channel is open with another party, payments will be direct and will be capped to the amount deposited in the channel.

Else, your Lightning wallet will try to find a payment route to the other party through other Lightning Nodes.

## How to open a bidirectional payment channel with another party?

Though the exact terminology may depend on the Lightning wallet you are using, in order to open a channel with another party on the Lightning Network, you generally need to click on Open New Channel. You can then either paste the other party’s node URI or PubKey or use a QR Code to scan it.