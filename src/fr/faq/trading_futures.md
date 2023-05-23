# Trading Futures

## Qu’est-ce qu’un CFD ?

CFD signifie 'Contract For Difference'. Un CFD est un contrat financier de gré-à-gré (Over The Counter - OTC), généralement entre un client et un courtier. La différence entre les prix d’ouverture et de fermeture du trade est réglée en cash. Avec les CFD, il n’y a pas de livraison de biens physiques ou de titres financiers.

## Qu’est-ce que le sens d’une position ?

Le sens d’une position est long pour un ordre d’achat et court pour un ordre de vente.

Sur LN Markets, vous pouvez trouvez le sens global de toutes les positions ouvertes dans la section Risk.

## Qu’est-ce qu’un ordre d’achat ?

Un ordre d’achat est un ordre pour acheter une quantité spécifique d’un produit financier. Un ordre d’achat est exécuté au prix 'offer' de la fourchette 'bid-offer'. Après avoir ouvert un ordre d’achat, on dit que vous êtes dans une position longue.

## Qu’est-ce qu’un ordre de vente ?

Un ordre de vente est un ordre pour vendre une quantité spécifique d’un produit financier. Un ordre de vente est exécuté au prix 'bid' de la fourchette 'bid-offer'. Après avoir rentré un ordre de de vente, on dit que vous êtes dans une position courte.

## Qu’est-ce que le 'bid' ?

Le prix 'bid' de la fourchette 'bid-offer' est le prix auquel vous pouvez vendre.

Sur LN Markets, c’est le prix auquel vous pouvez prendre une position courte sur un produit donné.

## Qu’est-ce que le prix 'offer' ?

Le prix 'offer' de la fourchette 'bid-offer' est le prix auquel vous pouvez acheter.

Sur LN Markets, c’est le prix auquel vous pouvez prendre une position longue sur un produit donné.

## Qu’est-ce que le prix de l’index?

Le prix de l’index est une moyenne pondérée du prix de l’actif sous-jacent constaté sur chaque place de marché qui constitue l’index.

## Qu’est-ce que l’entry price ?

L'entry price ou prix d’entrée d’une position est le prix auquel une position est ouverte.

## Qu’est-ce que l’exit price ?

L'exit price ou prix de sortie d’une position est le prix auquel elle est fermée.

## Qu’est-ce que le prix de référence ?

Le prix de référence d’une position est le prix pour lequel la position peut être rachetée à tout moment. 

Par exemple, pour qu’une position longue soit débouclée, quelqu’un doit vendre le contrat. Le prix pour cet ordre de vente est le prix 'bid', donc le prix de référence pour cette position est le prix 'bid'. 

Inversement, pour qu’une position courte soit débouclée, quelqu’un doit acheter le contrat. Le prix pour cet ordre d’achat est le prix 'offer', donc la prix de référence pour cette position est le prix 'offer'.

Cette règle s’applique dans le calcul du bénéfice, du 'take profit', du 'stop loss', et des ordres de liquidation.

Exemple d’une position longue : nous ouvrons un ordre long au marché à un prix égal à 38,541.5. Quelques minutes plus tard, le 'bid-offer' est : 38,427.5 – 38,504.5. Comme c’est une position longue, notre prix de référence est 38,427.5. 

Exemple d’une position courte : nous ouvrons un ordre court au marché à un prix égal à 38,419.0. Quelques minutes plus tard, le 'bid-offer' est : 38,396.5 – 38,473.5. Comme c’est une position courte, notre prix de référence est 38,473.5.

## Qu’est-ce que la quantité ?

La quantité est le nombre de contrats que vous souhaitez traiter.

Sur LN Markets, chaque contrat vaut 1 USD. La marge et le bénéfice sont exprimés en sats (1 BTC = 100,000,000 satoshis ou sats).

## Qu’est-ce que la 'margin' (marge) ? 

Quand les acheteurs et vendeurs veulent entrer dans une position de produits dérivés Bitcoin, pour être sûr  qu’ils honorent leurs obligations contractuelles, les échanges et plateformes de trading exigent d’eux qu’ils déposent et maintiennent un compte avec des fonds en Bitcoin en tant que collatéral : on l’appelle la 'margin' (marge).

Sur LN Markets, chaque marge est dédiée à une position spécifique. Par conséquent, un trader peut avoir différentes positions avec une gestion spécifique de sa marge pour chacune d’elles.

Il y a trois moyens de définir la marge :
    • La fixer directement
    • La calculer en utlisant le levier
    • La calculer en utilisant le prix de liquidation

La marge est exprimée en sats (1 BTC = 100,000,000 satoshis ou sats).

## Qu’est-ce que le levier ?

Dans le trading, l’effet de levier est une stratégie d’investissement qui permet une exposition à un actif financier avec un plus petit capital initial, la 'margin' (marge).

L’effet de levier est une épée à double tranchant. Avec un levier de 1, vous êtes exposé aux variations de l’actif sous-jacent. Avec un levier de 2, pour une position longue, quand l’actif sous-jacent augmente de 1, votre bénéfice augmente de 2. Mais quand l’actif sous-jacent diminue de 1, votre vénéfice diminue de 2. Et vice versa pour une position courte.

Sur LN Markets, le levier est limité à 100.

## Qu’est-ce que la liquidation ?

La liquidation est la fermeture forcée de vos positions ouvertes.

Sur LN Markets, si la marge ne peut plus couvrir le déficit en 'P&L', la position doit être liquidée par un ordre de liquidation.

## Qu’est-ce qu’un ordre au marché ?

Un ordre au marché est un ordre d’achat ou de vente destiné à être exécuté immédiatement au prix 'offer' ou 'bid'.

## Qu’est-ce qu’un ordre à cours limité ?

Un ordre à cours limité est un ordre d’achat ou de vente à un prix spécifique. 

Un ordre à cours limité d’achat ne peut être exécuté qu’au prix du marché ou plus bas. Un ordre de vente ne peut être exécuté qu’au prix du marché ou plus haut.

Un ordre à cours limité n’est pas garanti d’être exécuté et vous pouvez l’annuler à tout moment avant son exécution.

## Qu’est-ce qu’un 'take profit' (prise de profit) ?

Un 'take profit' (prise de profit) est un ordre optionnel qui spécifie le prix exact auquel fermer une position ouverte pour faire du profit. 

Si le prix de l’actif sous-jacent n’atteint pas le prix du 'take profit', l’ordre n’est pas exécuté.

Pour un ordre d’achat, le 'take profit' doit être supérieur au prix de l’actif sous-jacent.

Pour un ordre de vente, le 'take profit' doit être inférieur au prix de l’actif sous-jacent.

## Qu’est-ce qu’un 'stop loss' ?

Un 'stop loss' est un ordre optionnel qui spécifie le prix exact auquel fermer une position ouverte pour limiter une perte. 

Si le prix de l’actif sous-jacent n’atteint pas le prix du 'stop loss', l’ordre n’est pas exécuté.

Pour un ordre d’achat, le 'stop loss' doit être inférieure au prix de l’actif sous-jacent.

Pour un ordre de vente, le 'stop loss'  doit être supérieure au prix de l’actif sous-jacent.

## Qu’est-ce que la 'balance' (solde) ?

Sur LN Markets, la 'balance' (solde) est égale à la somme de votre marge disponible (pour rentrer dans de futures positions), de la marge utilisée (dans les positions ouvertes) et du P&L des positions ouvertes.

## Qu’est-ce que la 'margin available' (marge disponible) ?

Sur LN Markets, la marge disponible est le montant que vous pouvez utiliser pour rentrer dans des positions de trading future.

## Qu’est-ce que la 'margin used' (marge utilisée) ?

Sur LN Markets, la marge utilisée est le montant utilisé dans les positions actuellement ouvertes.

La marge utilisée maximale est actuellement limitée à 0.1 BTC ou 10 millions de satoshis.

## Qu’est-ce que la quantité ouverte ?

Sur LN Markets, la quantité ouverte est le nombre de contrats actuellement ouverts.

## Qu’est-ce que la table des positions ouvertes ?

Le table des positions ouvertes est un récapitulatif des positions en cours.

Vous pouvez vouloir fermer une position en cliquant sur le bouton 'Close' pour une position spécifique de la table. 
Ce processus annule les ordres optionnels de 'take profit', 'stop loss' et de liquidation et déboucle les positions  par un ordre au marché. 
Une position peut aussi être automatiquement fermée quand un ordre de 'take profit', 'stop loss' ou de liquidation est exécuté. 
La position passe d’ouverte à fermée.

## Qu’est-ce que la table des positions fermées ?

La table des positions fermées est un récapitulatif de toutes les positions fermées précédemment.

