# Trading Options

## What is an option?

An option is a financial contract which offers the buyer the opportunity to buy or sell an underlying asset. The option contract specifies the strike price, the price at which the underlying asset can be bought or sold when it is exercised, and the expiry date.

The price of an option is called the premium. It is usually computed with the Black-Scholes model, which only requires two market parameters (Forward price at expiry of the underlying asset and Volatility) to price this premium correctly.

## Why trading options?

Trading options can be very useful in a choppy market. Indeed, a future position can be liquidated quite quickly in a volatile market even if the initial position revealed to be correct in the long term: it is path dependent. However, a buyer of an option does not care about the path followed by the market, the only thing that matters is the level of the underlying at the time of expiry!

## What are the characteristics of the options listed on LN Markets?

When we designed our options trading offering, we paid attention to making it simple and accessible to all. That’s why, for our first iteration, we have made several choices:
- You can only buy options, not sell them. You can buy two types of options: calls and puts. Buying a call option gives the right to enter in a long position and buying a put option gives the right to enter in a short position.
- They are all 24-hour options: they expire 1 day after opening the position.
- The underlying of the option is the LNM perpetual future. The forward is the price of this future discounted at the time of expiry. Note that the forward is very close not to say equal to the price of the future because the expiry is only 24h.
- We quote Bitcoin options with BTC as domestic currency, like is the case for inverse futures. Which means that the forward price parameter is expressed as USD/BTC. However, we display it as BTC/USD for simplicity reasons.
- The Strike price parameter (price at which the option can be exercised) is expressed as USD/BTC, since BTC is the domestic currency. However, we display it as BTC/USD for simplicity reasons. We list two strikes for calls (two next thousands up) and two strikes for puts (two next thousands down).
For example, if bid price = 45,684.5 and offer price = 45,749.86:
    for call: Strike 1 = K1 = 46,000; Strike 2 =  K2 = 47,000
    for put: Strike 1 = K1 = 45,000; Strike 2 =  K2 = 44,000
- For the settlement at expiry, you can choose between Cash delivery and Physical delivery. 
With Cash delivery, you receive the PL of the option at the expiry = Max(Xt - K, 0), where Xt is the value of the underlying at the exact time of expiry. In other words, if the option is “In-The-Money” at expiry (if its strike price is favorable compared to the market price of the underlying at expiry), you receive the PL of the option.
With Physical delivery, if the option is “In-The-Money” at expiry, you receive delivery of a futures contract running for the given strike. This futures contract can be managed in the Futures section.
- For the Volatility (%) parameter, we compute an implied volatility from market prices, which gives an indication of the expected movement of the underlying.
- Delta is a risk metric that estimates the change in price of the option, given a 1 unit change in its underlying asset. It is computed with Black Scholes formula. With Bitcoin as a domestic currency, Delta is expressed in USD. It corresponds to the number of BTCUSD future contracts you would have to sell or buy to be delta hedged.
- Margin is the premium of the option, expressed in sats. It is computed with Black Scholes formula, and depends on the volatility and the forward price. Margin corresponds to the amount you have to pay to buy a call or a put option. This amount is deducted from your Margin Available and added to your Margin Used.
- Expiry is the exact time at which the option expires, 1 day after opening the position.

## How to trade options?

In order to trade options, the steps are:
1. Decide whether to buy a call (go long) or a put (go short)
2. Set up the Quantity (in USD, the notional amount of options you want to trade)
3. Choose your strike price
4. Choose between cash and physical settlement
5. Click on buy to pay the margin (in sats) and you’re done!

## How to follow the life of an option?

After buying an option, you can see it in the Running section of the deal blotter, at the bottom of the screen. Each line corresponds to an option, with:
- Expiry of the option
- Type: Call or Put
- Quantity in USD
- Strike
- Volatility in %
- Margin
- PL = Mark-to-Market - margin (Mark-to-Market of the option is its price with the current volatility level, other parameters remaining the same)
- Delta (the Delta of a portfolio of options is the sum of all its Deltas)
- Settlement: Cash or Physical

In the risk section, on the lower left hand side of the screen, you can see in the PL section your global PL (sum of the PL of your options) and your global Delta (sum of the Deltas of your options).

## What happens at the option expiry?

At expiry of an option with Cash settlement , if you are “In-The-Money”, you receive a PL + the initial margin paid for the option. This sum is added to your Margin Available.

At expiry of an option with Physical settlement, if you are “In-The-Money”, you get a futures contract running with liquidation price equal to the option strike, margin equal to the initial margin paid for the option, and PL of the future contract equal to the PL of the option at expiry.


