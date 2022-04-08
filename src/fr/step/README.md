# Guide pas-à-pas

Dans ce guide, nous vous montrerons comment créer un compte sur LN Markets, effectuer vos premières transactions, et l’ensemble des fonctionnalités de LN Markets !

<img :src="$withBase('/assets/lnm.png')" alt="LN Markets">

LN Markets est un logiciel en version alpha (en développement actif).

Veuillez l'utiliser avec précaution, de préférence sur le [Testnet](https://testnet.lnmarkets.com/) (réseau Bitcoin de test) ou avec de petites quantités.

LN Markets n'est assorti d'aucune garantie, utilisez-le à vos propres risques.

## Connexion à LN Markets

Sur [LN Markets](https://lnmarkets.com/), cliquez sur 'Sign In' dans le coin supérieur droit :

<img :src="$withBase('/assets/login.png')" alt="login">

Il existe quatre méthodes de connexion :

-  Se connecter avec LNURL : connexion instantanée avec n'importe quel 'wallet' (portefeuillle numérique) Lightinng qui supporte [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) comme [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. Il s'agit d'une méthode transparente et efficace de connexion. En effet, votre portefeuille peut signer un message avec sa clé privée. Ainsi, l'identification peut se faire uniquement avec la clé publique de votre portefeuille et aucune autre information n'est nécessaire.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Se connecter avec des 'Credentials' (identifiants) : vous pouvez créer un compte directement, en entrant votre 'login' et votre mot de passe.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

Vous avez également la possibilité d'entrer une adresse électronique pour la récupération du compte.

- Se connecter avec [Alby](https://getalby.com/) and [Joule](https://lightningjoule.com/): ce sont des extensions Bitcoin/Lightning pour navigateur web  qui se connectent à différentes interfaces pour une intégration et une inteaction directe avec ces réseaux.

## Créditer votre compte

Cliquez sur le bouton 'Deposit' (Dépôt) dans le coin inférieur gauche et choisissez le montant que vous souhaitez déposer sur votre compte.

<img :src="$withBase('/assets/deposit.png')" alt="deposit">

Le montant maximal est automatiquement calculé pour respecter les limites de dépôt maximales (2 millions de sats - marge disponible - marge utilisée).

Pour confirmer ce dépôt, vous pouvez scanner le QR code avec votre portefeuille. Cliquez dessus (pour les applications WebLN) ou copiez la facture ('invoice') directement.

Votre dépôt est maintenant confirmé et vous pouvez le voir dans votre compte.

<!-- <img :src="$withBase('/assets/depositqr.png')" alt="depositqr"> -->

<!--<img :src="$withBase('/assets/deposit_conf.png')" alt="deposit_conf">

<img :src="$withBase('/assets/deposit_balance.png')" alt="deposit_balance">-->

## Trading Futures

LN Markets indique une fourchette 'bid-offer' (fourchette achat-vente, dans la barre supérieure) et est la contrepartie directe de toutes les opérations.

Dans l'onglet Futures, le premier contrat que nous listons est un CFD (Contract for Difference) sur le prix BTCUSD avec un effet de levier allant jusqu'à x100.

L'ouverture d'une position acheteuse ou longue se fait au prix de l'offre ('Offer') et inversement, l'ouverture d'une position vendeuse ou courte se fait au prix de l’enchère ('Bid').

<img :src="$withBase('/assets/trade.png')" alt="trade">

Pour prendre une position, vous devez d'abord définir un côté (achat ou vente) et le type d'ordre : ordre au marché ou ordre à cours limité.

Ensuite, vous pouvez définir votre position avec un paramètre, soit la quantité, soit la marge.

Ce dépôt sera ajouté à la marge disponible pour entrer des positions dans le futur.

La quantité est le nombre de contrats que vous souhaitez négocier (1 contrat = 1 USD). Pour une quantité et un effet de levier donnés, la marge et la liquidation sont automatiquement calculées.

La marge ('margin') est le montant en sats que vous souhaitez utiliser pour cette position. Pour une marge et un effet de levier donnés, la quantité et la liquidation sont automatiquement calculées.

Vous pouvez également ajouter des ordres optionnels de 'take profit' (prise de profit) et 'stop loss' (arrêt des pertes), exprimés en BTC/USD.

Après avoir confirmé votre ordre, la position est ouvert et vous pouvez le voir dans la table des opérations 'running' (en cours) dans la section inférieure :

<img :src="$withBase('/assets/running_blotter.png')" alt="running_blotter">

### All In

Pour un côté donné (achat ou vente), le bouton 'All In' génère un ordre au marché qui maximise l'effet de levier et l'utilisation de la marge disponible.

### Modifier une opération

Pour chaque position, vous pouvez ajouter un 'Stop Loss' (arrêt des pertes) et un 'Take Profit' (prise de profit).

<img :src="$withBase('/assets/stop_loss.png')" alt="stop_loss">

Vous pouvez également effectuer les actions suivantes : retirer de la marge (-) pour encaisser le P&L ou augmenter la marge (+) pour diminuer la probabilité d'un événement de liquidation et fermer la position.

<img :src="$withBase('/assets/add_margin.png')" alt="add_margin">

Vous pouvez fermer chaque position individuellement ou cliquer sur le bouton "Fermer tout' ('Close All')

<img :src="$withBase('/assets/close_all.png')" alt="close_all">

Vous pouvez trouver toutes vos positions fermées dans la table 'closed'.

## Trading Options

LN Markets indique une fourchette 'bid-offer' (fourchette achat-vente, dans la barre supérieure) et est la contrepartie directe de toutes les opérations.

Dans l'onglet Options, vous pouvez traiter deux types d'options sur le prix forward BTCUSD: des calls (options d'achat) et des puts (options de vente).

<img :src="$withBase('/assets/options_trading.png')" alt="options_trading">

Nous voulons démystifier le trading d'options et le rendre accessible à tous. C'est pourquoi nous avons fait les choix suivants :
- Vous ne pouvez être qu'acheteur d'options. Si vous souhaitez être long, achetez des calls, si vous souhaitez être short, achetez des puts. 
- Ce sont des options de maturité 24 heures : elles expirent 1 jour après l'ouverture de la position.
- Il y a deux prix d'exercice ('strikes') pour les calls (deux prochains milliers à la hausse) et pour les puts (deux prochains milliers à la baisse).
- Comme pour les Futures, il faut payer une marge ('margin') pour acheter l'option (elle correspond à la prime de l'option, la 'premium').
- Pour le règlement de l'option à échéance, vous pouvez choisir soit un règlement en cash du PL de l'option (Cash settlement) soit un règlement physique ('Physical settlement'): vous obtenez livraison d'un Futures ouvert avec le 'strike' de l'option comme niveau de liquidation.

<img :src="$withBase('/assets/options_conf.png')" alt="options_conf">

Après avoir confirmé votre ordre, la position est ouverte et vous pouvez la voir dans la table des opérations 'running' (en cours) dans la section inférieure :

<img :src="$withBase('/assets/running_blotter_options.png')" alt="running_blotter_options">


## Retirer des fonds vers votre portefeuille

Cliquez sur le bouton 'withdraw' dans le coin inférieur gauche et choisissez le montant que vous souhaitez retirer sur votre compte.

<img :src="$withBase('/assets/withdraw.png')" alt="withdraw">

Si vous avez un portefeuille avec [LNURL](https://github.com/fiatjaf/awesome-lnurl#wallets), vous pouvez simplement scanner le QR code pour recevoir le paiement immédiatement. Sinon, vous pouvez simplement copier la facture ('invoice') sur votre portefeuille.

## Modifier votre profil

Cliquez sur la section 'Profile' en haut à droite pour modifier votre nom d'utilisateur, mettre à jour votre mot de passe et générer vos clés API ('API keys') :

<img :src="$withBase('/assets/profile.png')" alt="profile">

Vous pouvez également consulter l'historique de vos dépôts et retraits.

## Utiliser l'API de LN Markets

La [documentation de l'API LN Markets](https://docs.lnmarkets.com/api/v1/) fournit des informations sur toutes les routes disponibles.

Voici deux librairies Python et JavaScript pour interagir facilement avec l'API :
- [Librairie Python](https://pypi.org/project/ln-markets/)
- [Librairie JavaScript](https://www.npmjs.com/package/@ln-markets/api)
