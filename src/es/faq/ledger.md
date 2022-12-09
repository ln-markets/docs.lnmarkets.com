# Ledger

## ¿Cómo conectarse a LN Markets usando su billetera Ledger?

En primer lugar, asegúrese de utilizar un navegador web en el que la API de
WebUSB esté  disponible. Se puede ir
[aquí](https://developer.mozilla.org/en-US/docs/Web/API/USB#browser_compatibility)
para consultar la lista de navegadores compatibles.

Luego, simplemente conecte su billetera Ledger a su computadora, desbloquéela y
ejecute la Aplicación de Bitcoin.

Una vez hecho esto, puede ir a la página de inicio de LN Markets y hacer clic en
'Ledger' en el menú de registro o inicio de sesión. LN Markets procederá
entonces a generar un desafío único que tendrás que firmar con tu billetera.

## ¿Cómo verificar el mensaje enviado a su billetera Ledger?

Al iniciar sesión o registrarse con una billetera Ledger, el desafío para firmar
se le mostrará para que pueda verificarlo antes de firmar. La cuerda que tu
verás representa 32 bytes de datos binarios aleatorios que se codificarán y
firmado por su billetera de hardware.

Para comprobar que el hash del mensaje mostrado por el Ledger al firmar
efectivamente coincide el que ves en el sitio tendrás que convertir la cadena a
datos binarios y hash con la función sha256.

Aquí está cómo hacerlo en nodejs:

```js
const crypto = await import('crypto')

const binaryMessage = Buffer.from('mensaje', 'hex')
const hash = crypto.createHash('sha256').update(binaryMessage).digest('hex')
console.log(hash)
```

O en shell:

```shell
echo 'mensaje' | xxd -r -p | sha256sum
```

> En ambos casos, reemplace la cadena de 'mensaje' por la cadena hexadecimal
> provista a usted cuando se conecta con su Ledger (use el botón 'Copiar' para
> obtenerlo en su portapapeles).
