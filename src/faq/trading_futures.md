# Trading Futures

## What is a CFD?

CFD stands for Contract For Difference. A CFD is an Over The Counter (OTC) financial contract, generally between a client and a broker, where the difference in the settlement between the open and closing trade prices are cash-settled. With CFDs, there is no delivery of physical goods or securities.

## What is the side?

The side of a position is long for a buy order and short for a sell order.

On LN Markets, you can find the global side of all open positions in the Risk blotter.

## What are buy & sell orders?

A buy order is an order to purchase a specified quantity of a financial product. A buy order is executed at the offer price. After entering a buy order, we say that you are in a long position.

A sell order is an order to sell a specified quantity of a financial product. A sell order is executed at the bid price. After entering a sell order, we say that you are in a short position.

## What is the Futures price?

The Futures price is the reference BTC/USD price.

## What is the Index price?

The Index price is a weighted average of the last price of the underlying asset’s market consensus price for each constituent exchange.

## What is the entry price?

The entry price of a position is the price at which a position is opened.

## What is the exit price?

The exit price of a position is the price at which it is closed.

## What is the quantity?

The quantity is the number of contracts you want to trade.

On LN Markets, each contract is worth 1 USD, margin and P&L are expressed in sats (1 BTC = 100,000,000 satoshis or sats).

## What is the leverage?

Leverage in trading is an investment strategy that allows one to gain exposure to a financial asset with a smaller upfront capital, known as margin.

Leverage is a double-edged sword. With a leverage of 1, you are exposed to the variations of the underlying asset. With a leverage of 2, for a long position, when the underlying asset increases by 1, your P&L increases by 2. But when the underlying asset decreases by 1, your P&L decreases by 2. And vice versa for a short position.

On LN Markets, leverage is limited to x100.

## What is the margin?

When buyers and sellers want to enter a Bitcoin derivatives position, to make sure they honor their contractual obligations, exchanges and trading platforms require them to deposit and maintain an account funded with Bitcoin as collateral: this is called the margin.

For a given margin and leverage, quantity and liquidation are automatically computed (margin = quantity / (price * leverage)).

On LN Markets, each margin is dedicated to a specific position. Hence, a trader can have different

 positions with a specific margin policy for each one.

Margin is expressed in sats (1 BTC = 100,000,000 satoshis or sats).

## What is the initial margin?

The initial margin is the amount in sats to deposit in collateral to open a position. 

The initial margin is equal to a margin plus a maintenance margin, which is the minimum amount to keep your position open (it includes closing fees).

## What is the maintenance margin?

The maintenance margin represents the lowest required balance to keep your position or order active. It encompasses a reserve to cover the costs associated with opening and closing the position. 

When an order is executed (whether it's an opening or closing order), the fees are subtracted from the maintenance margin. For market orders, this deduction occurs immediately upon placing the order, as the execution is instantaneous.

## What are the trading fees?

Your trading fee depends on the Tier in which you belong. The higher your trading volume, the lower your trading fees. Check your Profile to know your Tier.

## How are computed trading fees?


Initially, Total fee paid = 0 and maintenance margin = opening fee reserved + closing fee reserved, with opening fee reserved = quantity / entry price * Tier1 fee and closing fee reserved = quantity / initial liquidation price * Tier 1 fee. 

At the time of trading, Total fee paid = opening fee and maintenance margin = opening fee reserved + closing fee reserved - opening fee. Opening fee reserved and opening fee can be different in case of change of Tier fee.

When closing a position, Total fee paid = opening fee + closing fee and maintenance margin = opening fee reserved + closing fee reserved - opening fee - closing fee.

And users will receive P&L + margin + maintenance margin.

## What are the funding fees?

CFD Positions are subject to a funding fee. This is because when you buy or sell a CFD, LN Markets is effectively lending you BTC.

The funding fee is updated every 8 hours according to market conditions and applies to running positions (limit orders become running once they are executed).

The funding fee is computed with the quantity expressed in BTC and withdrawn from each margin position every 8 hours at 4:00 am, 12:00 pm and 8:00pm UTC.

Example of funding fee calculation: for a funding rate of 0.01%, a long position of Quantity = 10, with BTCUSD rate = $30,000, the funding fee is = (10/30,000)*0.01%*100,000,000 = 3 satoshis.

## What is the liquidation?

Liquidation is the forced closure of a running position. It occurs If the Futures price falls below the liquidation level for long positions, or rises above the liquidation level for short positions

## What is the margin ratio?

When the margin ratio reaches 100% your position is liquidated. Margin ratio = maintenance margin / (initial margin + P&L - Fee).

## What is a market order?

A market order is a buy or sell order to be executed immediately at the offer or bid price.

## What is a limit order?

A limit order is an order to buy or sell at a specific price. A limit order is not guaranteed to execute and you can cancel this order at any time before it is executed.

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

Maximum margin used is currently limited to 0.1 BTC or 10 million satoshis.

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