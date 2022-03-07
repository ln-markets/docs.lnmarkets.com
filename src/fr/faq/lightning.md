# Lightning

## Qu'est-ce que le Lightning Network ?

Une transaction Bitcoin permet le transfert de bitcoins entre membres du réseau Bitcoin. Une transaction contient généralement le montant de bitcoins transférés, l’adresse du destinataire, et surtout la signature de l’émetteur autorisant la transaction. Son inscription dans le registre du Bitcoin (la blockchain) lui confère son caractère officiel.

En réalité, le protocole permet de signer des transactions plus complexes, aussi appelés Bitcoin scripts ou smart contracts. Les transactions spécifient l’adresse du ou des destinataires, mais également les preuves que celui-ci doit fournir pour disposer des bitcoins reçus.
Le Lightning Network (LN) est une extension du Bitcoin, c’est un réseau de noeuds Bitcoin concluant des contrats particuliers et dont le but est de permettre le transfert instantané de bitcoins entre ses participants. Le Lightning Network cherche à tirer profits des transactions complexes du Bitcoin en réduisant au minimum la nécessité de recourir à l’inscription en blockchain.

Jusqu’au déploiement du Lightning Network début 2018, il n’était en effet possible d’envoyer des bitcoins qu’en passant par la blockchain. Si le transfert direct par blockchain demeure aujourd’hui encore la voie la plus sûre, c’est aussi la plus lente et la plus coûteuse.
Le LN ouvre la possibilité d’échanges garantis ou dit autrement la possibilité de faire des chèques en Bitcoin. Ces chèques peuvent être encaissés sur la blockchain du Bitcoin avec une garantie de provision, on pourrait ainsi les assimiler à des chèques de banque pour lesquels on a la certitude que ce ne sont pas des chèques en bois. Une transaction Lightning n’a pas besoin d’être inscrite sur la blockchain du Bitcoin pour garantir son existence, sa validité et la solvabilité de son émetteur. Les frais de transactions et le temps d’exécution sont alors réduits au minimum.

Une transaction Lightning n’a pas besoin d’être inscrite sur la blockchain du Bitcoin pour garantir son existence, sa validité et la solvabilité de son émetteur

Pour [en savoir plus sur le Lightning Network](https://www.lopp.net/lightning-information.html).

## Comment fonctionne le Lightning Network ?

Son fonctionnement est décrit dans le [Livre Blanc du Lightning Network](https://lightning.network/lightning-network-paper.pdf)


Partons d’une transaction simple. Alice souhaite transférer des bitcoins à Bob, elle signe donc une transaction autorisant le transfert vers l’adresse de Bob. Pour une transaction Bitcoin classique, Alice doit la diffuser à travers le réseau du Bitcoin afin que celle-ci soit incluse dans la blockchain. Après un certain temps (dit de confirmation), Bob peut considérer que la transaction est inscrite de façon irrévocable dans la blockchain. Il possède alors pleinement les bitcoins envoyés par Alice.

Le Lightning Network cherche à donner à Bob le même niveau de garantie sans devoir recourir à l’inscription coûteuse et lente dans la blockchain.
Imaginons qu’Alice envoie directement sa transaction à Bob sans la diffuser dans le réseau. Celui-ci, vérifiant la validité de la transaction, pourrait se dire qu’il suffira de la diffuser quand il souhaitera lui-même dépenser les bitcoins. Le problème est qu’Alice peut entre temps diffuser une autre transaction envoyant ses bitcoins à Charlie. Lorsque Bob diffusera la transaction pourtant signée par Alice, elle sera alors rejetée par le réseau. C’est le fameux problème de la double dépense ou double spending. Pour contourner cette difficulté, Alice doit d’abord inscrire une transaction particulière dans la blockchain : un verrou avec une date d’expiration et des règles définies à l’avance.

Ainsi, l’idée fondatrice du LN est de verrouiller temporairement les bitcoins d’Alice dans un canal. Ce canal stipule que seul Bob peut recevoir les bitcoins verrouillés. Le verrou permet à Bob d’être sûr que les bitcoins envoyés par Alice ne pourront pas être transférés avant que Bob ne diffuse la transaction d’Alice. A partir de ce mécanisme de base, Joseph Poon a imaginé la formation d’un réseau de canaux, le Lightning Network. Dans ce réseau, on s’échange des transactions Bitcoin sans les diffuser immédiatement sur la blockchain. Le temps de confirmation devient quasi-instantané. Les membres de ce réseau se mettent d’accord sur les transferts à effectuer, et, en cas de désaccord, le différend est résolu par la voie classique de la blockchain.

### La brique de base : le canal de micro-paiement

Alice commence donc par verrouiller ses bitcoins en diffusant une première transaction sur la blockchain, étape inévitable. Cette transaction stipule deux choses :
1. Si Bob présente une transaction signée par Alice sur la blockchain, les bitcoins verrouillés dans le canal seront envoyés à Bob.
2. Si aucun transfert n’a lieu jusqu’à l’expiration du verrou, les bitcoins seront déverrouillés et retourneront à Alice.
À partir de cette transaction, Bob est certain que seules deux choses peuvent arriver : soit il récupère les bitcoins d’Alice, soit le verrou expire. Voilà le problème du double spending résolu de façon extrême : Alice ne peut qu’envoyer ses bitcoins à Bob et à personne d’autre. Si le canal seul n’est pas suffisant pour envoyer des bitcoins à quiconque, il offre une possibilité fondamentale à Alice et Bob : ils peuvent réécrire la transaction autant de fois qu’ils le souhaitent, car celle-ci n’est justement pas encore inscrite sur la blockchain.

Par exemple,
0. Alice verrouille 1 bitcoin dans le canal
1. Alice achète une part de pizza à Bob et signe une transaction envoyant 0.1 bitcoin à Bob depuis le canal
Bob sait qu’il peut diffuser cette transaction dans la blockchain à tout moment, mais comme les fonds sont verrouillés rien ne presse, il peut considérer que le transfert est effectif.
2. Supposons qu’Alice souhaite acheter une autre part de Pizza à Bob. Alice et Bob peuvent alors annuler la transaction précédente et Alice signe une nouvelle transaction de 0.2 bitcoin vers Bob.
L’invalidation de la première transaction, et son remplacement, est la fonctionnalité clef du LN. Elle permet aux membres du réseau de négocier des échanges sans passer par la blockchain, sauf en cas de litige. L’invalidation repose sur le principe de pénalité, Alice et Bob signent un engagement à ne pas diffuser la transaction invalide, si l’un deux le fait, l’autre pourra alors diffuser une transaction infligeant une pénalité au tricheur. La pénalité choisie est supérieure au montant de la transaction, ainsi Alice n’aura aucun intérêt à diffuser l’ancienne version de la transaction (cela lui coûterait plus cher), Bob n’a quant à lui aucun intérêt en premier lieu, car la nouvelle version lui attribue plus de bitcoins.

### Du canal au réseau

Le canal de micro-paiement est très pratique, mais il ne permet pas à Alice d’envoyer ses bitcoins à Charlie (qui lui vend des boissons).

La première option est qu’Alice ouvre aussi un canal vers Charlie, reproduisant le schéma mis en place avec Bob. Toutefois, cela lui coûterait des frais de transactions et l’obligerait à verrouiller d’autres bitcoins.

La seconde option, à la base du LN, est d’imaginer que Bob et Charlie ont ouvert un canal de micro-paiement entre eux. Ainsi, tout client ayant un canal avec l’un pourra envoyer des bitcoins à l’autre. S’il faut également une transaction initiale dans la blockchain, elle aura l’avantage d’être réutilisable par n’importe quel client de Bob ou de Charlie : c’est ainsi que le LN nous fait économiser des frais de transactions.

Il manque cependant un outil essentiel pour qu’Alice passe par Bob, sans que celui-ci ne puisse conserver les bitcoins initialement destinés à Charlie. Il s’agit du Hash Timelock Contract (HTLC). Dans la version simple du canal, il suffit à Bob de disposer d’une transaction signée par Alice pour effectuer le transfert. Dans le cas du HTLC, on ajoute une règle liée à la connaissance d’un secret.
Initialement, seule Alice a connaissance du secret. Celle-ci signe alors une transaction d’envoi de 0.1 bitcoin à Bob sous réserve que le secret soit connu. 

Si Bob a connaissance du secret, il sera à même de déclencher la transaction. Notons que si Alice ne revèle jamais le secret, les bitcoins seront déverrouillés après expiration du canal et retourneront à Alice. Bob, sans connaître le secret à ce stade, signe une transaction qui envoie 0.1 bitcoin à Charlie, sous la même réserve liée au secret. Alice prenant connaissance de cette transaction, peut alors révéler le secret en toute sécurité. Bob reçoit donc 0.1 bitcoin d’Alice, et Charlie reçoit 0.1 bitcoin de Bob. Les deux transactions sont soit toutes les deux possibles soit toutes les deux impossibles.

Le réseau LN a pour ambition de créer un grand nombre de canaux entre tous les acteurs du Bitcoin. On pourra envoyer des bitcoins quasi-instantanément à n’importe quel participant en s’appuyant sur les membres du réseaux.


## Qu'est-ce qu'un nœud Lightning ?

Un nœud Lightning est un logiciel qui se connecte au Lightning Network pour envoyer et recevoir des bitcoins d'autres nœuds.

Le Lightning Network est un réseau pair-à-pair composé de ces nœuds qui se connectent les uns aux autres. Plus il y a de nœuds dans le réseau, plus il est robuste. En effet, plus les nœuds ouvrent des canaux de paiement, plus la liquidité totale du réseau augmente, ce qui signifie que globalement, plus d'utilisateurs peuvent envoyer plus d'argent à plus de personnes.

Un nœud Lightning Network est chargé de surveiller la blockchain Bitcoin sous-jacente et d'interagir avec d'autres nœuds pour transférer les paiements.

Il existe actuellement trois équipes principales qui élaborent les implémentations de Lightning Network :
- [lnd](https://github.com/lightningnetwork/lnd) de Lightning Lab en Go
- [c-lightning](https://github.com/ElementsProject/lightning) de Blockstream en C
- [eclair](https://github.com/ACINQ/eclair) de ACINQ en Scala

Tous les portefeuilles Lightning non-custodiaux font tourner leur propre nœud Lightning.

## Qu'est-ce qu'un 'wallet' Lightning Network ?

Un 'wallet' (portefeuille) est l'interface utilisateur la plus courante pour les réseaux Bitcoin et Lightning, tout comme le navigateur Web est l'interface la plus courante pour le protocole HTTP.

Un portefeuille Bitcoin est une application ou un programme qui vous permet d'envoyer et de recevoir des unités de bitcoins. Un portefeuille compatible avec Lightning est un portefeuille Bitcoin qui vous permet d'interagir avec le Lightning Network.

Les portefeuilles gèrent les clés publiques et privées, suivent les soldes et créent et signent des transactions.

Les clés sont souvent stockées dans un portefeuille numérique sur l'ordinateur ou le smartphone de chaque utilisateur. La possession de la clé qui peut signer une transaction est la seule condition préalable pour dépenser des bitcoins.

Les portefeuilles peuvent être custodiaux ou non-custodiaux.

Un portefeuille custodial est un portefeuille dans lequel les clés privées sont détenues par un tiers, ce qui signifie que le tiers a un contrôle total sur les fonds. Un portefeuille non-custodial est un portefeuille dans lequel l'utilisateur a un contrôle total sur ses clés privées, donc sur ses fonds.

En un mot, choisir entre un portefeuille non-custodial et un portefeuille custodial est souvent une question de compromis entre la sécurité (pas vos clés, pas vos bitcoins) et la commodité (les portefeuilles non-custodiaux peuvent offrir une expérience utilisateur plus simple).

À notre avis, les portefeuilles Lightning tels que [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), [Simple Bitcoin Wallet](https://play.google.com/store/apps/details?id=com.btcontract.wallet&hl=en&gl=US) combinent une expérience utilisateur exceptionnelle et le contrôle de vos clés.

Il existe plusieurs types de portefeuilles Lightning, les plus utilisés sont :
    - Desktop wallets (sur Windows, macOS, Linux, etc.)
    - Mobile wallets (sur iOS, Android, etc.)
    - Hardware wallets (nœud Bitcoin et Lightning auto-hébergé)

## Comment obtenir un wallet Lightning Network ?

Le moyen le plus simple d'obtenir votre premier portefeuille Lightning est de télécharger un logiciel sur votre ordinateur de bureau ou votre mobile. Les utilisateurs plus avancés peuvent préférer les portefeuilles matériels (nœuds Bitcoin et Lightning auto-hébergés).

Voici un tableau (non exhaustif) récapitulant les portefeuilles Lightning les plus populaires et leurs principales caractéristiques :

Wallet | Type | Ecosystème | Authentification directe | Retrait direct
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


Authentification directe : sur LN Markets avec [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl)

Retrait direct : de vos fonds sur LN Markets avec [lnurl-withdraw](https://github.com/fiatjaf/awesome-lnurl)

## Comment puis-je obtenir des bitcoins ?

Il existe plusieurs manières d'acquérir des bitcoins :
- Le moyen le plus courant consiste à passer par une plate-forme de marché Bitcoin. Attention avant d'en choisir une, voici un [comparatif](https://en.bitcoin.it/wiki/Comparison_of_exchanges) auxquel vous pourrez peut-être vous référer pour minimiser les risques.
- Par un réseau pair-à-pair : voici une [liste](https://bitcoin.org/en/exchanges#p2p) de plate-formes pair-à-pair par pays où les vendeurs sont notés pour vous aider à choisir.
- Par  un guichet automatique Bitcoin : ils vous permettent de déposer et de retirer de l'argent afin que vous puissiez acheter et vendre des bitcoins. Voici une [carte interactive](https://coinatmradar.com/) pour trouver le plus proche de chez vous
- En acceptant le bitcoin comme moyen de paiement pour des biens et services

## Comment recevoir vos premiers sats sur votre portefeuille Bitcoin ?

Vous devez recevoir des sats sur votre portefeuille Lightning via une transaction Bitcoin.

Bien que la terminologie exacte puisse dépendre du portefeuille que vous utilisez, vous devez généralement cliquer sur Recevoir des fonds, via une transaction Bitcoin. Votre portefeuille devrait alors générer un QR Code et/ou une adresse Bitcoin que vous pourrez utiliser pour envoyer vos bitcoins.

## Comment envoyer des paiements sur le Lightning Network ?

Bien que la terminologie exacte puisse dépendre du portefeuille Lightning que vous utilisez, vous devez généralement cliquer sur Envoyer des fonds, via un paiement Lightning. Vous pouvez ensuite soit coller une demande de paiement d'un certain montant de satoshis, qui s'appelle une facture, soit scanner un QR Code de cette facture.

## Comment recevoir des paiements sur le Lightning Network ?

Bien que la terminologie exacte puisse dépendre du portefeuille Lightning que vous utilisez, vous devez généralement cliquer sur Recevoir des fonds, via un paiement Lightning. Vous pouvez ensuite entrer le montant de satoshis que vous souhaitez recevoir et générer une demande de paiement, appelée facture, que vous pouvez envoyer à la partie dont vous souhaitez recevoir des fonds.

## Comment les paiements sont-ils acheminés sur le Lightning Network ?

Si un canal de paiement bidirectionnel est ouvert avec une autre partie, les paiements seront directs et plafonnés au montant déposé dans le canal.

Sinon, votre portefeuille Lightning essaiera de trouver une voie de paiement vers l'autre partie via d'autres nœuds Lightning.

## Comment ouvrir un canal de paiement bidirectionnel avec une autre partie ?

Bien que la terminologie exacte puisse dépendre du portefeuille Lightning que vous utilisez, pour ouvrir un canal avec une autre partie sur le réseau Lightning, vous devez généralement cliquer sur Ouvrir un nouveau canal. Vous pouvez ensuite soit coller l'URI ou la clé PubKey du nœud de l'autre partie, soit utiliser un code QR pour le scanner.
