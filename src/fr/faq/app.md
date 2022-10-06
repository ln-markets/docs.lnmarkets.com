# LN Markets

[LN Markets](https://lnmarkets.com/) est la première plate-forme de trading de futures et options Bitcoin accessible via le Lightning Network, un protocole de paiement fonctionnant sur Bitcoin.

Le trading se fait directement depuis n’importe quel portefeuille Lighnting et permet un accès instantané aux marchés dérivés. Ouvrez une position via une transaction Lightning, fermez-la et retirez immédiatement vos bitcoins sur votre 'wallet' (portefeuille numérique), c’est aussi simple que ça !

## LN Markets est disponible sur le réseau Testnet de Bitcoin ?

Oui, il existe un réseau de test pour LN Markets : [LN Markets Testnet](https://testnet.lnmarkets.com/).

Alors que le réseau Bitcoin 'Mainnet' est le vrai réseau des transactions Bitcoin, le le réseau 'Testnet' est une blockchain alternative utilisée principalement pour des tests.

Les jetons bitcoins du réseau Testnet sont bien distincts des jetons du réseau 'Mainnet'. Vous pouvez obtenir des jetons Bitcoin 'Testnet' sur des [faucets](https://bitcointalk.org/index.php?topic=5237763.0).

## Des prérequis ?

Vous avez simplement besoin d’un 'Wallet' (portefeuille) compatible avec le réseau Lightning Network, avec quelques fractions de bitcoins. En effet, un jeton bitcoin est largement divisible : la plus petite unité est le satoshi ou sat. 1 bitcoin = 100 000 000 satoshis. Les sats sont l'unité de référence sur le réseau Lightning et sur LN Markets. 

[Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), [Blue Wallet](https://bluewallet.io/) (liste non-exhaustive), sont des exemples de 'wallets' simples d’utilisation.

Si vous gérez un nœud du réseau Lightning Network, vous pouvez également ouvrir un canal direct avec le [nœud de LN Markets](https://lnmarkets.com/node).

## Comment se connecter à LN Markets ?

Pas besoin de communiquer un email ou des données personnelles !

le seul pré-requis est un 'wallet' Lightning avec une route ou un canal vers le [nœud de LN Markets](https://lnmarkets.com/node).

Transférer fractions de bitcoins vers un wallet Lightning peut se comparer à un transfert de fonds vers une banque dépositaire pour un investissement futur. Mais avec une différence de taille : dans le cas du réseau Lightning, vous avec le contrôle total sur vos fonds avant d'effectuer votre investissement.

Il existe quatre méthodes de connexion :

-  Se connecter avec LNURL : connexion instantanée avec n'importe quel 'wallet' (portefeuillle numérique) Lightinng qui supporte [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) comme [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. Il s'agit d'une méthode transparente et efficace de connexion. En effet, votre portefeuille peut signer un message avec sa clé privée. Ainsi, l'identification peut se faire uniquement avec la clé publique de votre portefeuille et aucune autre information n'est nécessaire.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Se connecter avec des 'Credentials' (identifiants) : vous pouvez créer un compte directement, en entrant votre 'login' et votre mot de passe.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

Vous avez également la possibilité d'entrer une adresse électronique pour la récupération du compte.

- Se connecter avec [Alby](https://getalby.com/) and [Joule](https://lightningjoule.com/): ce sont des extensions Bitcoin/Lightning pour navigateur web  qui se connectent à différentes interfaces pour une intégration et une inteaction directe avec ces réseaux.

## Comment puis je déposer des fonds sur LN Markets ?

Vous pouvez envoyer des satoshis sur votre compte de trading avant d’entrer dans une position. Ce dépôt va être ajouté à la marge disponible pour rentrer dans des positions dans le futur.

Cliquez sur le bouton 'Deposit' dans le coin inférieur gauche et choisissez le montant que vous souhaitez déposer sur votre compte.

Vous pouvez faire un 'Deposit' avec une transaction Lightning ou avec une transaction Bitcoin classique 'On Chain'.

## Qu’est-ce que la fourchette 'bid-offer' ?

LN Markets propose une fourchette 'bid-offer' ou fourchette de prix à l’achat (position longue) et à la vente (position courte) pour une quantité définie de contrats (1 contrat = 1 USD).

## Quels sont les paramètres d’une position ?

Vous devez d’abord à définir un sens (achat ou vente) et le type d’ordre : ordre au marché ou ordre à cours limité.

Ensuite, vous pouvez définir votre position avec un paramètre, soit la quantité, soit la marge.

La quantité est le nombre de contrats que vous voulez traiter (1 contrat = 1 USD). Pour une quantité et un levier donnés, la marge et la liquidation sont automatiquement calculées.

Vous pouvez aussi ajouter en option des ordres de 'take profit' (prise de profit) et de 'stop loss' (arrêt des pertes), exprimés en BTC/USD.

## Comment puis je ouvrir une position ?

Pour rentrer dans une position, vous devez payer votre 'margin' (marge).

En cliquant sur le bouton 'Submit', un récapitualtif de la nouvelle position apparaît pour confirmation.

Si vous avez déposé assez de fonds pour couvrir le paiement de la marge, votre position est ouverte immédiatemment.

Sinon, vous devez déposer plus de fonds sur votre compte.

## Qu’est-ce que le bouton 'All In' ?

Pour un sens donné (achat ou vente), le bouton 'All In' génère un ordre au marché qui maximise le levier et l’utilisation de la marge disponible.

## Quelles sont les limites de trading sur LN Markets ?

Il y a une marge maximum par nœud.

Cette limite est actuellement fixée à 0.1 BTC = 10,000,000 sats pour la marge utilisée pour les positions ouvertes.

## Quel est l’effet de levier maximum sur LN Markets ?

Le levier maximum que vous pouvez prendre est actuellement fixé à x100.

## Quel est le prix de référence ?

Le prix de référence d’une position est le prix pour lequel la position peut être rachetée à tout moment.

Par exemple, pour qu’une position longue soit débouclée, quelqu’un doit vendre le contrat. Le prix pour cet ordre de vente est le prix 'bid' de la fourchette 'bid-offer', donc le prix de référence pour cette position est le prix 'bid'.

Inversement, pour qu’une position courte soit débouclée, quelqu’un doit acheter le contrat. Le prix pour cet ordre d’achat est le prix 'offer' de la fourchette 'bid-offer', donc la prix de référence pour cette position est le prix de l’offre.

Cette règle s’applique dans le calcul du 'PL' (pertes et profits), du 'take profit', du 'stop loss', et de la liquidation.

## Qu’est-ce qu’un évènement de liquidation ?

Dans le cas où votre 'margin' (marge) ne peut plus couvrir votre perte en 'PL', votre position doit être liquidée avec un ordre de liquidation.

Nous ne facturons pas une marge supplémenatire pour la liquidation et le niveau de liquidation est exactement celui pour lequel la marge est égale à zéro.

## Comment changer la marge de mes positions ?

A tout moment, vous pouvez ajouter de la marge (+) à vos positions ouvertes, en cliquant sur la partie Actions de la table des positions ouvertes. 
Ce faisant, vous allez réduire le levier de cette position et faire diminuer la probabilité d’un évènement de liquidation.

Pour les positions ouvertes avec un 'PL' positif, vous pouvez aussi réduire la marge (-), en cliquant sur la partie Actions de la table des positions ouvertes. 
Ce faisant, vous allez augmenter le levier de cette position, mais cela va aussi augmenter votre marge disponible pour d’autres positions. Vous pouvez aussi encaisser et retirer instantanément ce bénéfice sur votre portefeuille.

## Quels évènements déclenchent la fermeture d’une position ?

Une fermeture automatique se produit lorsqu’un 'take profit', un 'stop loss' ou un ordre de liquidation est rempli. Des détails sur la position sont ensuite disponibles dans la table des positions fermées.

Une fermeture manuelle se produit en appuyant sur le bouton 'Close' d’une position spécifique, ou le bouton 'Close All' de la table des positions ouvertes. Ceci annule tous les ordres ouverts et déboucle les ordres remplis avec un ordre au marché.

## Comment retirer des fonds de LN Markets ?

Vous pouvez retirer une partie ou tout votre solde à tout moment avec une 'invoice' (facture) Lightning.

Cliquez sur le bouton 'Withdraw' dans le coin inférieur gauche et choisissez le montant que vous voulez retirer vers votre compte.

Si vous avez un portefeuille avec LNURL, vous pouvez simplement scanner le QR code pour recevoir le paiement immédiatement. Sinon, vous pouvez copier la facture sur votre portefeuille.

## Qu’est-ce que la 'funding fee' (frais de financement)?

Les positions sur CFD sont sujettes à un 'funding fee' ou frais de financement. Car quand vous achetez ou vendez un CFD, LN Markets vous prête effectivement une certaine quantité de BTC.

Le 'funding fee' est mis à jour toutes les 8 heures en fonction des conditions de marché et ces frais s’appliquent aux positions 'running' (les ordres à cours limité deviennent 'running' une fois qu’il sont exéutés).

Le frais de financement est calculé avec la quantité exprimée en BTC et retiré de la marge de chaque position toutes les 8 heures à 4:00, 12:00 et 20:00 UTC.

Un exemple de calcul de frais de financement : pour un 'carry fee' de 0.01%, une position longue de quantité 10, avec le taux BTCUSD = 30,000$, le frais de financement est égal à (10/30,000)*0.01%*100,000,000 = 3 satoshis.

## Quels sont les frais sur LN Markets ?

Contrat | Bid-Offer | Maintenance Margin | Funding Fee
------------ | ------------- | ------------ | -------------
CFD BTC/USD | 20bp | 0bp | Voir LN Markets

## Quelle sont les spécifications du contrat CFD BTCUSD listé sur LN Markets ?

Source BTCUSD | XBTUSD Index (BitMEX)
------------ | -------------
Prix de Référence | Bid Price (pour une position longue) / Offer Price (pour une position courte)
Profit & Loss (P&L) | Quantity * (1/Entry Price -1/Price Ref)
Niveau de liquidation | (1 / Entry Price + Margin / Quantity)^-1
Déclencheur d'événements | Prix de Référence
Levier Max | x100
Marge Max (par compte) | 10.000.000 sats

## Comment utiliser l'API de LN Markets?

La [documentation de l'API LN Markets](https://docs.lnmarkets.com/api/v1/) fournit des informations sur toutes les routes disponibles.

L'endpoint de l’API sur le réseau Bitcoin Mainnet est : https://api.lnmarkets.com/v1

L'endpoint de l’API sur le réseau Bitcoin Testnet est : https://api.testnet.lnmarkets.com/v1

Voici deux librairies Python et JavaScript pour interagir facilement avec l'API :
- [Librairie Python](https://pypi.org/project/ln-markets/)
- [Librairie JavaScript](https://www.npmjs.com/package/@ln-markets/api)

## Quelles sont les limites de l’API LN Markets ?

Il y a deux types de limites : en nombre de positions et en nombre de requêtes.

Il y a un maximum de 50 positions par compte.

Les requêtes vers notre API REST sont limitées à une requête par seconde. Les points de terminaisons qui ne requièrent pas d’authentification sont limités à 30 requêtes par minute.

Les connexions à notre 'websocket' sont limitées à 60 par heure.

Si une adresse IP lance trop d’erreurs, elle pourrait être bannie pour une certaine période.

## Y a-t-il des réstrictions géographiques pour utiliser LN Markets ?

Oui, un bloqueur d’adresses IP pour les résidents américains est en place sur [LN Markets](https://lnmarkets.com/).

## Qu'est-ce que la trollbox ?

La Trollbox est la chat room de LN Markets qui se trouve sur la page principale. C'est un lieu de rassemblement pour les passionnés de Bitcoin, Lightning et de LN Markets.
Afin de maintenir cette communauté productive et inclusive pour tous, nous avons établi des règles auxquelles nous demandons à tous les participants de se conformer.