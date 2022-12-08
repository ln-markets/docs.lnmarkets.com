# Ledger

## How to connect to LN Markets using your Ledger wallet?

First, make sure that you use a web browser on which the WebUSB API is
available. You can go
[here](https://developer.mozilla.org/en-US/docs/Web/API/USB#browser_compatibility)
to check the list of compatible browsers.

Then simply connect your Ledger wallet to your computer, unlock it and run the
Bitcoin application.

Once it's done you can go to LN Markets' home page and click on the 'Ledger'
button in the register or login menu. LN Markets will then proceed to generate a
one-time challenge that you will have to sign with your wallet.

## How to verify the message sent to your device?

When logging in, or registering with a Ledger wallet, the challenge to be signed
will be showed to you so that you can verify it before signing. The string you
will see represents 32 bytes of random binary data that will be hashed and
signed by your hardware wallet.

To check that the message hash showed by the Ledger when signing indeed matches
the one you see on the site you will have to convert the string to binary data
and hash it with the sha256 function.

Here's how to do it in nodejs:

```js
const crypto = await import('crypto')

const binaryMessage = Buffer.from('message', 'hex')
const hash = crypto.createHash('sha256').update(binaryMessage).digest('hex')
console.log(hash)
```

or in shell:

```shell
echo 'message' | xxd -r -p | sha256sum
```

> In both cases replace the 'message' string by the hexadecimal string provided
> to you when connecting with your Ledger (use the 'Copy' button to get it to
> your clipboard).
