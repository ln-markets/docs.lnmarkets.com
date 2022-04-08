# Trading Options

## Qu'est-ce qu'une option?

Une option est un contrat financier qui donne à son acheteur l'option d'acheter ou de vendre un actif sous-jacent. Le contrat d'option précise le prix d'exercice (le 'strike'), c'est-à-dire le prix auquel l'actif sous-jacent peut être acheté ou vendu lorsqu'il est exercé et la date d'expiration.

Le prix d'une option s'appelle la prime. Il est généralement calculé avec le modèle Black-Scholes, qui ne nécessite que deux paramètres de marché (prix à terme de l'actif sous-jacent à l'expiration de l'option et volatilité) pour évaluer correctement cette prime.

## Pourquoi faire du trading d'options ?

Le trading d'options peut être très utile dans un marché agité. En effet, une position sur un contrat Future peut être liquidée assez rapidement dans un marché volatil même si la position initiale s'est révélée correcte sur le long terme : elle est dépendante du chemin parcouru par l'actif sous-jacent.
Mais un acheteur d'option ne se soucie pas de la trajectoire suivie par le marché, seul compte le niveau du sous-jacent au moment de l'expiration !

## Quelles sont les caractéristiques des options listées sur LN Markets?

Lorsque nous avons conçu notre offre de trading d'options, nous avons veillé à la rendre simple et accessible à tous. C'est pourquoi, pour notre première itération, nous avons fait plusieurs choix :
- On ne peut qu'acheter des options, pas les vendre. On peut acheter deux types d'options : des calls et des puts. Acheter un call donne à son détenteur le droit d'entrer dans une position longue. Acheter un put donne à son détenteur le droit d'entrer dans une position courte.
- Ce sont des options de maturité 24h : elles expirent une journée après l'ouverture de la position.
- Le sous-jacent des options est le Future perpetuel LNM. Le Forward (prix à terme) est le prix de ce future actualisé au moment de l'expiration. A noter que le Forward est très proche pour ne pas dire égal au prix du future car l'expiration n'est que de 24h.
- Nous utilisons le BTC comme devise domestique, comme c'est le cas pour les contrats Futures inversés ('inverse Futures'). Ce qui signifie que le prix Forward est exprimé en BTC/USD. Cependant, nous l'affichons en BTC/USD pour des raisons pratiques.
- Le prix d'exercice ('strike') est exprimé en USD/BTC, puisque le BTC est la devise domestique. Cependant, nous l'affichons en BTC/USD pour des raisons de simplicité. Nous listons deux 'strikes' pour les calls (deux prochains milliers à la hausse) et deux strikes pour les puts (deux prochains milliers à la baisse).
 Par exemple, si le bid price = 45,684.5 et l'offer price = 45,749.86:
    pour les calls: Strike 1 = K1 = 46,000; Strike 2 =  K2 = 47,000
    pour les puts: Strike 1 = K1 = 45,000; Strike 2 =  K2 = 44,000
- Pour le règlement de l'option à échéance, vous pouvez choisir soit un règlement en cash du PL de l'option (Cash settlement) soit un règlement physique ('Physical settlement'): vous obtenez livraison d'un Futures ouvert avec le 'strike' de l'option comme niveau de liquidation.
Avec le 'cash settlement', vous recevez le PL de l'option à l'expiration = Max(Xt - K, 0), où Xt est la valeur du sous-jacent à l'heure exacte de l'expiration. En d'autres termes, si l'option est 'In-The-Money' à l'expiration (si son prix d'exercice est favorable par rapport au prix de marché du sous-jacent à l'expiration), vous recevez le PL de l'option.
Avec le 'Physical settlement', si l'option est 'In-The-Money' à l'expiration, vous recevez la livraison d'un contrat à terme en cours pour le prix d'exercice donné. Ce contrat à terme peut être géré dans la section Futures.
- Pour le paramètre Volatilité (%), nous calculons une volatilité implicite à partir des prix du marché, qui donne une indication du mouvement attendu du sous-jacent.
- Le Delta est une mesure de risque qui estime la variation du prix de l'option, compte tenu d'une variation d'une unité de son actif sous-jacent. Il est calculé avec la formule de Black Scholes. Avec BTC comme devise domestique, le Delta est exprimé en USD. Il correspond au nombre de contrats à terme BTCUSD que vous devriez vendre ou acheter pour être couvert en delta.
- La marge ('margin') est la prime de l'option, exprimée en sats. La prime our prix de l'option est calculée avec la formule de Black Scholes et dépend de la volatilité et du prix Forward du sous-jacent. La marge ('margin') correspond au montant que vous devez payer pour acheter un call ou un put. Ce montant est déduit de votre marge disponible et ajouté à votre marge utilisée.
- La maturité de l'option ('expiry') est l'heure exacte à laquelle l'option expire, 1 jour après l'ouverture de la position.

## Comment acheter des options ?

Pour acheter des options, les étapes sont les suivantes :
1. Décider si vous souhaitez acheter un call (être long) ou un put (être short) 
2. Choisir le montant notionnel des options que vous souhaitez traiter, la 'Quantity' exprimée en USD.
3. Choisir le prix d'exercice ('strike')
4. Choisir entre un règlement 'cash' ou 'physical'
5. Cliquez sur 'buy' pour payer la marge (en sats) et le tour est joué !

## Comment suivre la vie de l'option ?

Après avoir acheté une option, vous pouvez la voir dans la table des opérations 'running' (en cours) dans la section inférieure. Chaque ligne correspond à une option, avec :
- Expiry: expiration de l'option
- Type: Call or Put
- Quantity: en USD
- Strike
- Volatility en %
- Margin
- PL = Mark-to-Market - margin (le Mark-to-Market de l'option est son prix avec le niveau de volatilité actuel, les autres paramètres restant les mêmes)
- Delta (le Delta d'un portefeuille d'options est la somme de tous ses Deltas)
- Settlement: Cash ou Physical

Dans la section Risk, en bas à gauche de l'écran, vous pouvez voir dans la section PL votre PL global (somme des PL de vos options) et votre Delta global (somme des Deltas de vos options).

## Que se passe-t-il à l'expiration de l'option ?

A l'expiration de l'option en 'Cash settlement', si vous êtes dans la monnaie ('In-The-Money'), c'est-à-dire si son prix d'exercice est favorable par rapport au prix de marché du sous-jacent à l'expiration, vous recevez le PL de l'option + la marge initiale ('initial margin') payée pour l'option. Cette somme est ajoutée à votre marge disponible ('margin available').

A l'expiration de l'option en 'Cash settlement', si vous êtes dans la monnaie ('In-The-Money'), vous recevez la livraison d'un contrat à terme en cours pour le prix d'exercice donné, une marge ('margin') égale à la marge initiale payée pour l'option et un PL du contrat Futures égal au PL de l'option à l'expiration.

