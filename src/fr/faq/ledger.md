# Ledger

## Comment se connecter à LN Markets en utilisant votre Ledger ?

Tout d'abord, assurez-vous que vous utilisez un navigateur Web sur lequel l'API
WebUSB est disponible. Vous pouvez vérifier
[ici](https://developer.mozilla.org/en-US/docs/Web/API/USB#browser_compatibility)
si votre navigateur est compatible.

Ensuite connectez simplement votre portefeuille Ledger à votre ordinateur,
déverrouillez-le et exécutez l'application Bitcoin.

Vous pourrez ensuite aller sur la page d'accueil de LN Markets et cliquer sur le
bouton 'Ledger' dans le menu d'inscription ou de connexion. LN Markets procédera
alors à la génération d'un message unique que vous devrez signer avec votre
portefeuille.

## Comment vérifier le message envoyé à votre appareil ?

Lors de la connexion ou de l'inscription avec un portefeuille Ledger, le message
à signer vous sera montré afin que vous puissiez le vérifier avant de le signer.
Le message que vous verrez représente 32 octets de données binaires aléatoires
qui seront hachées et signées par votre Ledger.

Pour vérifier que le hash du message affiché par le Ledger lors de la signature
correspond bien à celui que vous voyez sur le site, vous devrez convertir le
texte en données binaires et le hacher avec la fonction sha256.

Voici comment le faire en nodejs:

```js
const crypto = await import('crypto')

const binaryMessage = Buffer.from('message', 'hex')
const hash = crypto.createHash('sha256').update(binaryMessage).digest('hex')
console.log(hash)
```

ou en shell:

```shell
echo 'message' | xxd -r -p | sha256sum
```

> Dans les deux cas vous devrez remplacer le texte 'message' par la chaîne
> hexadécimale affichée au moment ou vous vous connecterez avec votre Ledger
> (utilisez le bouton 'Copier' pour le recupérer dans votre presse-papiers).
