# Trading

## What is a CFD?

CFD stands for Contract For Difference. A CFD is an Over The Counter (OTC) financial contract, generally between a client and a broker, where the difference in the settlement between the open and closing trade prices are cash-settled. With CFDs, there is no delivery of physical goods or securities.

## What is the side?

The side of a position is long for a buy order and short for a sell order.

On LN Markets, you can find the global side of all open positions in the Risk blotter.

## What is a buy order?

A buy order is an order to purchase a specified quantity of a financial product. A buy order is executed at the offer price. After entering a buy order, we say that you are in a long position.

## What is a sell order?

A sell order is an order to sell a specified quantity of a financial product. A sell order is executed at the bid price. After entering a sell order, we say that you are in a short position.

## What is the bid price?

The bid price is the price at which you can sell.

On LN Markets, it is the price at which you can take a short position on a given product.

## What is the offer price?

The offer price is the price at which you can buy.

On LN Markets, it is the price at which you can take a long position on a given product.

## What is the index price?

The index price is a weighted average of the last price of the underlying asset’s market consensus price for each constituent exchange.

## What is the entry price?

The entry price of a position is the price at which a position is opened.

## What is the exit price?

The exit price of a position is the price at which it is closed.

## What is the price reference?

The price reference of a position is the price at which the position can be bought back at any time. For instance, for a long position to be unwind, one needs to sell the contract.

Price for this sell order is the bid price, then price reference for this position is the bid price. Conversely, for a short position to be unwind, one needs to buy the contract. Price for this buy order is the offer price, then the price reference for this position is the offer price.

This rule applies to P&L computation, take profit and liquidation orders.

Long position example: We open a long market order at a Price = 38541.5. A few minutes later, Bid-Offer is: 38427.5 - 38504.5. Since it is a long position, our price reference is: 38427.5. Short position example: We open a short market order at a Price = 38419.0. A few minutes later, Bid-Offer is: 38396.5 - 38473.5. Since it is a short position, our price reference is: 38473.5.

## What is the quantity?

The quantity is the number of contracts you want to trade.

On LN Markets, each contract is worth 1 USD, margin and P&L are expressed in sats (1 BTC = 100,000,000 satoshis or sats).

## What is the margin?

When buyers and sellers want to enter a Bitcoin derivatives position, to make sure they honor their contractual obligations, exchanges and trading platforms require them to deposit and maintain an account funded with Bitcoin as collateral: this is called the margin.

On LN Markets, each margin is dedicated to a specific position. Hence, a trader can have different positions with a specific margin policy for each one.

There are 3 ways to define the Margin:
- Set it directly
- Calculate it using the leverage
- Calculate it using the liquidation price

Margin is expressed in sats (1 BTC = 100,000,000 satoshis or sats).


## What is the leverage?

Leverage in trading is an investment strategy that allows to gain exposure to a financial asset with a smaller upfront capital, known as margin.

Leverage is a double-edged sword. With a leverage of 1, you are exposed to the variations of the underlying asset. With a leverage of 2, for a long position, when the underlying asset increases by 1, your P&L increases by 2. But when the underlying asset decreases by 1, your P&L decreases by 2. And vice versa for a short position.

On LN Markets, leverage is limited to x50.

## What is the liquidation?

Liquidation is the forced closure of your open positions.

On LN Markets, if the margin can not cover the P&L, the position has to liquidated with a liquidation order.

## What is a market order?

A market order is a buy or sell order to be executed immediately at the offer or bid price.

## What is a limit order?

A limit order is an order to buy or sell at a specific price. A buy limit order can only be executed at the limit price or lower. A sell limit order can only be executed at the limit price or higher.

A limit order is not guaranteed to execute and you can cancel this order at any time before it is executed.

## What is a take profit?

A take profit order is an optional order that specifies the exact price at which to close out an open position for a profit. If the price of the underlying asset does not reach the take profit price, the take profit order does not get filled.

For a buy order, the take profit must be superior to the price of the underlying asset.

For a sell order, the take profit must be inferior to the price of the underlying asset.

## What is a stop loss?

A stop loss order is an optional order that specifies the exact price at which to close out an open position to limit a loss. If the price of the underlying asset does not reach the stop loss price, the stop loss order does not get filled.

For a buy order, the stop loss must be superior to the liquidation price and inferior to the bid price.

For a sell order, the stop loss must be superior to the offer price and inferior to the liquidation price.

## What is the balance?

On LN Markets, the balance is equal to the sum of your margin available (to enter future positions), margin used (in open positions) and P&L in open positions.

## What is the margin available?

On LN Markets, the margin available is the amount you can use to enter future trading positions.

## What is the margin used?

On LN Markets, the margin used is the amount used in current open positions.

Maximum margin used is currently limited to 0.01 BTC or 1 million satoshis.

## What is the open quantity?

On LN Markets, in the Risk blotter, the open quantity is the number of contracts currently opened.

## What is the P&L?

The P&L of a position is the profit and loss on this position.

On LN Markets, in the Risk blotter, the P&L is the global P&L of positions currently opened.

## What is the open positions blotter?

The open positions blotter is a recap of the running positions.

You may want to close a position by clicking on the button close for a specific position on the table. This process cancels the optional take profit and the liquidation orders and unwinds the filled orders with a market order. A position can also be automatically closed when a take profit order or a liquidation order is filled. The position changes from open to closed.

## What is the closed positions blotter?

The closed positions blotter is a recap of all previously closed positions.

Once a position is closed, you can withdraw his / her funds by clicking on the button Withdraw for a specific position:
- With wallets which support [lnurl-withdraw](https://github.com/fiatjaf/awesome-lnurl#wallets), you can just scan the QR code to receive instant payment.
- With [WebLN](https://webln.dev/#/), the invoice for repayment of the P&L and the margin is automatically computed for you to receive instant payment.
- With other Lightning wallets, you can paste an invoice (for an amount equal to 0) and LN Markets will pay the full amount available for withdraw.