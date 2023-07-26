# LN Markets

[LN Markets](https://lnmarkets.com/) es un nuevo tipo de plataforma de negociación de derivados de Bitcoin, a la que solo se puede acceder a través de la red Lightning, un protocolo de canales de pago que se ejecuta sobre Bitcoin.

El comercio se realiza directamente desde cualquier billetera Lightning y permite un acceso súper rápido a los mercados de derivados. Abra una posición haciendo una transacción Lightning, cierre la posición y reciba el dinero directamente en su billetera, ¡así de fácil!

## ¿Existe una versión Testnet de LN Markets?

Sí, existe una red de prueba de LN Markets: [LN Markets Testnet](https://testnet.lnmarkets.com/).

La cadena Bitcoin es la red original y principal para transacciones de Bitcoin con valores económicos reales. Bitcoin Testnet es una cadena de bloques alternativa que se utiliza para realizar pruebas. Las monedas de Testnet están separadas y son distintas de las monedas de la cadena principal y nunca se supone que tengan ningún valor.

El uso de LN Markets en Testnet le permite experimentar sin tener que usar bitcoin reales. [Aquí](https://bitcointalk.org/index.php?topic=5237763.0) hay una lista de grifos de Bitcoin Testnet para obtener monedas de Testnet.

## ¿Existe algún requisito previo para utilizar LN Markets por primera vez?

Solo necesita una billetera Lightning con algunas fracciones de unidades de bitcoin.

De hecho, Bitcoin es altamente divisible: la unidad más pequeña de Bitcoin es un satoshi y 1 bitcoin = 100.000.000 satoshis. De hecho, satoshis o sats es la unidad de referencia en la red Lightning y en LN Markets.

Algunas billeteras Lightning fáciles de usar incluyen [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), [Blue Wallet](https://bluewallet.io/ ), [BLW](https://lightning-wallet.com/), etc.

Si ejecuta un nodo de Lightning Network, puede abrir un canal directo al [nodo de LN Market](https://lnmarkets.com/lightning).

Consulte la sección: [¿Cómo obtener una billetera Lightning?](./lightning.md#¿Cómo-obtener-una-billetera-Lightning?) y [¿Cómo obtener bitcoin en mi billetera Lightning?](./lightning.md#¿Cómo-obtener-bitcoin-en-mi-billetera-Lightning?) para poder utilizar LN Markets por primera vez. 


## ¿Cómo iniciar sesión en LN Markets?

No se requiere correo electrónico ni datos privados para acceder a LN Markets.

El único requisito previo es financiar una billetera Lightning con una ruta o un canal directo con el nodo de LN Market en la red Lightning.

Financiar una billetera Lightning se puede comparar con una transferencia de fondos a un banco custodial para una inversión futura. Pero con una diferencia importante: aquí uno mantiene la propiedad total sobre sus fondos en el canal Lightning antes de la inversión.

Existen varios métodos de inicio de sesión:

- Iniciar sesión con LNURL: inicio de sesión instantáneo con cualquier monedero que soporte [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) como [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. Se trata de una forma sencilla y eficaz de iniciar sesión y operar en LN Markets: su monedero puede firmar un mensaje con su llave privada. Por lo tanto, la identificación se puede hacer sólo con la llave pública de su monedero y no se necesita ninguna otra información.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Iniciar sesión con credenciales: puede crear una cuenta directamente, introduciendo su nombre de usuario y contraseña.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

Tiene la opción de introducir una dirección de correo electrónico para recuperar su cuenta.

- Iniciar sesión con  [Alby](https://getalby.com/) y [Joule](https://lightningjoule.com/): son extensiones de browser web Bitcoin/Lightning  que se conectan a diferentes interfaces de billetera y brindan una profunda integración de Lightning a la web.

- Iniciar sesión con[Ligthning Node Connect](https://github.com/lightninglabs/lightning-node-connect): un protocolo para conectar su nodo de manera fácil y segura a una aplicación web o móvil como LN Markets.

## ¿Cómo puedo depositar fondos en LN Markets?

Solo necesitas una billetera Lightning con algunas fracciones de unidades de bitcoin.

Puedes depositar satoshis en tu cuenta de operaciones antes de ingresar a una posición.

Este depósito se agregará al margen disponible para ingresar posiciones en el futuro.

Haga clic en el botón Depositar y puede depositar con una transacción Lightning o con una transacción normal de Bitcoin [On Chain].

¿Cuál es el precio de los Futuros?
El precio de los Futuros es el precio de referencia BTC/USD.

## ¿Cómo puedo definir una posición?

Para ingresar a una posición, primero debe definir un lado (compra o venta) y el tipo de orden: orden de mercado u orden limitada.

Luego, puede definir su posición con un parámetro, ya sea la cantidad o el margen.

Este depósito se agregará al margen disponible para ingresar posiciones en el futuro.

La cantidad es la cantidad de contratos que desea negociar (1 contrato = 1 USD). Para una determinada cantidad y apalancamiento, el margen y la liquidación se calculan automáticamente.

El margen inicial es el depósito en sats exigido como garantía para abrir una posición. Para un margen inicial y un apalancamiento dados, la cantidad y la liquidación se calculan automáticamente.

También puede agregar órdenes opcionales de toma de ganancias y ‘‘detener pérdidas’’ (stop loss), expresadas en BTC/USD.

## ¿Cómo ingresar una posición en LN Markets?

Para abrir una posición, debe pagar el margen. Al pulsar el botón para confirmar, aparece un resumen de la nueva posición para su confirmación.

Si ha depositado fondos suficientes para cubrir el pago del margen, su posición se abre inmediatamente.

De lo contrario, se genera una factura Lightning para que pague el monto restante del margen. La nueva posición solo se confirma después del pago de la factura.

## ¿Qué es el botón ‘‘Ir con todo’’?

Para un lado determinado (comprar o vender), el botón ‘‘Ir con todo’’ genera una orden de mercado que maximiza el apalancamiento y el uso del margen disponible.


## ¿Existe algún límite en LN Markets?

Sí, hay un margen máximo disponible para operar por nodo. Este límite de saldo se ha establecido actualmente en 0.1 BTC = 10,000,000 sats de Margen por posición y 1 BTC = 100,000,000 sats de Margen usada para posiciones abiertas por cuenta.

## ¿Existe un apalancamiento máximo en LN Markets?

Sí, hay un apalancamiento máximo que puede tomar, actualmente está establecido en x100.

## ¿Qué es margen?

Cuando los compradores y vendedores quieren entrar en una posición de derivados de Bitcoin, para asegurarse de que cumplen con sus obligaciones contractuales, las bolsas y plataformas de trading les exigen que depositen y mantengan una cuenta financiada con Bitcoin como garantía: esto se llama margen.

Para un margen y apalancamiento dados, la cantidad y la liquidación se calculan automáticamente (margen = cantidad / (precio * apalancamiento)).

En LN Markets, cada margen se dedica a una posición específica. Por lo tanto, un operador puede tener diferentes posiciones con una política de margen específica para cada una.

El margen se expresa en sats (1 BTC = 100.000.000 satoshis o sats).

## ¿Qué es margen inicial?

El margen inicial es la cantidad en sats que hay que depositar en garantía para abrir una posición. 

El margen inicial es igual a un margen más un margen de mantenimiento, que es la cantidad mínima para mantener su posición abierta (incluye las comisiones de cierre).

## ¿Qué es margen de mantenimiento?

El margen de mantenimiento representa el saldo mínimo necesario para mantener activa su posición u orden. Engloba una reserva para cubrir los costes asociados a la apertura y cierre de la posición.

Cuando se ejecuta una orden (ya sea de apertura o de cierre), las comisiones se restan del margen de mantenimiento. En el caso de las órdenes ‘’a mercado’’, esta deducción se produce inmediatamente después de colocar la orden, ya que la ejecución es instantánea.

## ¿Cómo se calculan las comisiones de trading?

Inicialmente, (Comisión total pagada) = 0 y (margen de mantenimiento) = comisión de apertura reservada + comisión de cierre reservada, con comisión de apertura reservada = cantidad / precio de entrada * comisión de nivel 1 y comisión de cierre reservada = cantidad / precio de liquidación inicial * comisión de nivel 1.

En el momento de la operación, Comisión total pagada = comisión de apertura y margen de mantenimiento = comisión de apertura reservada + comisión de cierre reservada - comisión de apertura. La comisión de apertura reservada y la comisión de apertura pueden ser diferentes en caso de cambio de las comisiones dependiendo del nivel.

Al cerrar una posición, la comisión total pagada = comisión de apertura + comisión de cierre y margen de mantenimiento = comisión de apertura reservada + comisión de cierre reservada - comisión de apertura - comisión de cierre.

Los usuarios recibirán P&L + margen + margen de mantenimiento.

## ¿Qué es liquidación?

La liquidación es el cierre forzoso de una posición corriente. Se produce si el precio de los Futuros cae por debajo del nivel de liquidación para las posiciones largas, o sube por encima del nivel de liquidación para las posiciones cortas.

## ¿Qué es coeficiente de margen?

Cuando el coeficiente de margen alcanza el 100%, su posición se liquida. Coeficiente de margen = margen de mantenimiento / (margen inicial + P&L - comisión).

## ¿Cómo puedo añadir o restar márgen a las posiciones abiertas?

En cualquier momento, puede añadir margen (+) a las posiciones abiertas, haciendo clic en la parte de "acciones" del registro de "Posiciones Abiertas".
De este modo, reducirá el apalancamiento de la posición abierta y disminuirá la probabilidad de un evento de liquidación.

Para las posiciones abiertas con "pérdidas y ganancias" (P&L) en positivo, también puede reducir el margen (-), haciendo clic en la parte de "acciones" del registro de "Posiciones Abiertas".

De esta manera, aumentará el apalancamiento de la posición abierta, pero esto también aumentará su margen disponible para otras posiciones. También puede cobrar y retirar instantáneamente este "P&L" a su monedero.

## ¿Qué es una posición cerrada?

Un evento cerrado ocurre cuando se ejecuta una orden de toma de ganancias, stop loss o liquidación. Cuando sucede, la posición de estado cambia de abierto a cerrado y se puede ver en la tabla de posiciones cerradas.

También es posible activar un evento de cierre presionando el botón de cierre de una posición específica en la tabla de posiciones abiertas. Este proceso cancela todas las órdenes abiertas y deshace las órdenes completadas con una orden de mercado.

## ¿Cómo puedo retirar fondos de LN Markets?

Puede retirar parte o su saldo total en cualquier momento con solo una factura global Lightning.

Haga clic en retirar y seleccione una cantidad preestablecida (25%, 50%, 75%, 100%) o ingrese manualmente.

Si tiene una billetera con lnurl, puede escanear el código QR para recibir el pago de inmediato. De lo contrario, puede simplemente copiar la factura en su billetera.

## ¿Cuáles son las tarifas de financiación (funding fees)?

Las posiciones de CFD están sujetas a un cargo de financiación. Esto se debe a que cuando compra o vende un CFD, LN Markets efectivamente le presta BTC.

La tarifa de financiación se actualiza cada 8 horas, de acuerdo con las condiciones del mercado y se aplica a las posiciones activas (las órdenes límite se vuelven activas una vez que se ejecutan).

La tarifa de financiación se aplica a la cantidad expresada en BTC, calculada y retirada de cada posición de margen a las 4:00 am, 12:00 pm y 8:00 pm UTC. Puede ver las tarifas nocturnas anteriores y las tarifas nocturnas siguientes en su página de negociación en Trading info.

Ejemplo de cálculo de tarifa nocturna: con una tasa de financiación (funding rate) de 0.01%, para una posición larga de Cantidad = 10, con tasa BTC/USD = $ 30.000, la tarifa de financiamento es = (10/30.000) * 0,01% * 100.000.000 = 3 satoshis.

## ¿Cuál es el costo de operar en LN Markets?

Su comisión (tasa) de trading depende del nivel de comisión a la que pertenezca. Cuanto mayor sea su volumen, menor será su tasa de trading.

Tier | Volumen de trading acumulado de 30 días | Tasa de trading
------------ | ------------- | ------------
Tier 1 | < $250.000 | 0.1%
Tier 2 | < $1.000.000 | 0.08%
Tier 3 | < $2.500.000 | 0.07%
Tier 4 | < $5.000.000 | 0.06%

El Volumen de trading acumulado de 30 días se calcula a cada hora a partir de las posiciones cerradas. Las posiciones en curso no se incluyen en el cómputo.

## ¿Cuáles son las especificaciones de contrato de los productos enumerados en LN Markets?

Fuente BTCUSD | XBTUSD Index (BitMEX)
------------ | -------------
Pérdidas y ganancias (P&L) | Cantidad * (1/Precio de entrada -1/Precio de referencia)
Nivel de liquidación | (1 / Precio de entrada + (Margen Inicial - Margen de Mantenimiento) / Cantidad) ^-1
Indicador de disparador | Precio de referencia
Apalancamiento máximo | x100
Margen máximo (por posición) | 10.000.000 sats

## ¿Cómo puedo utilizar la API de LN Markets?

La [referencia de la API de LN Markets](https://docs.lnmarkets.com/api/v2/) proporciona información sobre todos los extremos disponibles.

El punto final de la API para mainnet es: <https://api.lnmarkets.com/v2>

El punto final de la API para testnet es: <https://api.testnet.lnmarkets.com/v2>

Aquí hay dos paquetes de Python y JavaScript para interactuar fácilmente con la API:
- [Paquete Python](https://pypi.org/project/ln-markets/)
- [Paquete de JavaScript](https://www.npmjs.com/package/@ln-markets/api)

## ¿Cuáles son los límites de la API de LN Markets?

Hay dos tipos de límites: posiciones y tasa.

Hay un máximo de 50 posiciones abiertas por cuenta.

Las solicitudes a nuestra REST API están limitadas a 1 solicitud por segundo. Los puntos finales que no requieren autenticación están limitados a 30 solicitudes por minuto.

Las conexiones a nuestro websocket están limitadas a 60 por hora.

Si una dirección IP arroja demasiados errores, podría prohibirse durante un cierto período de tiempo.

## ¿Existe alguna restricción geográfica para utilizar LN Markets?

Sí, un bloqueo de dirección IP para residentes de Estado Unidos (EE.UU.) es implementado en [LN Markets](https://lnmarkets.com/).

## ¿Qué es la Trollbox?

La Trollbox es la sala de chat de LN Markets que se encuentra en la página principal. Es un lugar de reunión para personas apasionadas por Bitcoin, Lightning y LN Markets.
Para mantener esta comunidad productiva e inclusiva para todos, hemos establecido algunos estándares comunitarios que pedimos a todos los participantes que cumplan.

Puedes usar comandos especiales en Trollbox para compartir tus posiciones con la comunidad:
- /help muestra todos los comandos disponibles
- /futures comparte información sobre la última operación de futuros que realizó
- /options comparte información sobre la última operación de opciones que realizó
- /futures (pid) comparte información sobre operaciones de futuros para una identificación de posición específica (obtenga la identificación de posición o pid haciendo clic en el número de posición en el trade blotter)
- /options (pid) comparte información sobre operaciones de opciones para una identificación de posición específica (obtenga la identificación de la posición o el pid haciendo clic en el número de posición en el trade blotter)