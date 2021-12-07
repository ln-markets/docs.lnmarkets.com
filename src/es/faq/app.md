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

Consulte la sección: [¿Cómo obtener una billetera Lightning?](./lightning.md#¿Cómo-obtener-una-billetera-Lightning?) y [¿Cómo obtener bitcoin en mi billetera Lightning?](./lightning.md#¿Cómo-obtener-bitcoin-en-mi-billetera-Lightning?) para poder utilizar LN Markets por primera vez. 


## ¿Cómo iniciar sesión en LN Markets?

No se requiere correo electrónico ni datos privados para acceder a LN Markets.

El único requisito previo es financiar una billetera Lightning con una ruta o un canal directo con el nodo de LN Market en la red Lightning.

Financiar una billetera Lightning se puede comparar con una transferencia de fondos a un banco custodial para una inversión futura. Pero con una diferencia importante: aquí uno mantiene la propiedad total sobre sus fondos en el canal Lightning antes de la inversión.

Hay dos métodos de autenticación:
- Directamente con una billetera Lightning que admita lnurl-auth como Phoenix (lista completa [aquí](https://github.com/fiatjaf/awesome-lnurl#wallets) ) o WebLN (obtenga más información [aquí](https://webln.dev/#/)): una forma fluida y eficiente de iniciar sesión y operar en LN Markets. Su billetera puede firmar un mensaje con su clave privada. Por lo tanto, la identificación se puede realizar solo con la clave pública de su billetera. No se necesita ninguna otra información.

Creación de cuenta (billetera móvil o de escritorio): Puede definir su nombre de usuario y contraseña. Puede también definir tu email en caso de pérdida de su nombre de usuario y/o contraseña.

## ¿Cómo puedo depositar fondos en LN Markets?

Solo necesitas una billetera Lightning con algunas fracciones de unidades de bitcoin.

Puedes depositar satoshis en tu cuenta de operaciones antes de ingresar a una posición.

Este depósito se agregará al margen disponible para ingresar posiciones en el futuro.

El depósito máximo está actualmente limitado a 0.01 BTC o 1 millón de satoshis.

Haga clic en el botón Depositar y elija la cantidad que desea depositar en su cuenta: puede seleccionar una cantidad preestablecida (250k sats, 500k sats, 750k sats o monto máximo) o ingresarla manualmente.

La cantidad máxima se calcula automáticamente para respetar los límites máximos de depósito (1 millón de sats — margen disponible — margen utilizado).

## ¿Cuáles son los precios de puja y oferta?

LN Markets proporciona un precio de oferta y un precio de oferta para una cantidad definida del contrato. Dentro de este diferencial se incluye el costo de cobertura y el margen de LN Markets.

## ¿Cómo puedo definir una posición?

Para ingresar a una posición, primero debe definir un lado (compra o venta) y el tipo de orden: orden de mercado u orden limitada.

Luego, puede definir su posición con un parámetro, ya sea la cantidad o el margen.

Este depósito se agregará al margen disponible para ingresar posiciones en el futuro.

La cantidad es la cantidad de contratos que desea negociar (1 contrato = 1 USD). Para una determinada cantidad y apalancamiento, el margen y la liquidación se calculan automáticamente.

El margen es la cantidad en sats que desea utilizar para esta posición. Para un margen y un apalancamiento determinados, la cantidad y la liquidación se calculan automáticamente.

También puede agregar órdenes opcionales de toma de ganancias y ‘‘detener pérdidas’’ (stop loss), expresadas en BTC/USD.

## ¿Qué es el botón ‘‘Ir con todo’’?

Para un lado determinado (comprar o vender), el botón ‘‘Ir con todo’’ genera una orden de mercado que maximiza el apalancamiento y el uso del margen disponible.

## ¿Cómo ingresar una posición en LN Markets?

Para ingresar en una posición, debe pagar su margen.

Al hacer clic en el botón Enviar, aparece un resumen de la nueva posición y, si ya ha depositado fondos suficientes para cubrir el pago del margen en su cuenta de operaciones, su posición está confirmada.

Este depósito se agregará al margen disponible para ingresar posiciones en el futuro.

De lo contrario, se genera una factura Lightning para que pague el monto restante del margen. La nueva posición solo se confirma después del pago de la factura.

## ¿Existe algún límite en LN Markets?

Sí, hay un margen máximo disponible para operar por nodo. Este límite de saldo se ha establecido actualmente en 0.01 BTC = 1,000,000 sats por nodo y se revisará según la actividad.

## ¿Existe un apalancamiento máximo en LN Markets?

Sí, hay un apalancamiento máximo que puede tomar, actualmente está establecido en x50.

## ¿Por qué mi posición ha sido liquidada?

En caso de que su margen no pueda cubrir las pérdidas y ganancias, la posición debe liquidarse con una orden de liquidación.

No cobramos margen extra por liquidación y el nivel de liquidación es el nivel exacto donde el margen es igual a cero.

## ¿Cuál es la referencia de precio?

El precio de referencia de una posición es el precio al que se puede volver a comprar la posición en cualquier momento. Por ejemplo, para que una posición larga/compra se deshaga, es necesario vender el contrato.

El precio de esta orden de venta es el precio de oferta, luego el precio de referencia para esta posición es el precio de oferta. Por el contrario, para que una posición corta se deshaga, es necesario comprar el contrato. El precio de esta orden de compra es el precio de oferta, luego la referencia de precio para esta posición es el precio de oferta.

Esta regla se aplica al cálculo de ganancias y pérdidas (P & L), tomar ganancias (take profit), detener pérdidas (stop loss) y órdenes de liquidación.

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

Contrato | Puja-Oferta | Manutención de margen | Taza nocturna
------------ | ------------- | ------------ | -------------
Contrato por diferencia BTC/USD | 20bp | 0bp | ver info de la operación

## ¿Cuáles son las especificaciones de contrato de los productos enumerados en LN Markets?

Fuente BTCUSD | XBTUSD Index (BitMEX)
------------ | -------------
Precio de referencia | Precio de puja (para posición largas/de compra) y Precio de oferta (para posiciones cortas/de venta)
Pérdidas y ganancias (P&L) | Cantidad * (1/Precio de entrada -1/Precio de referencia
Nivel de liquidación | (1 / Precio de entrada + Margen / Cantidad) ^-1
Indicador de disparador | Precio de referencia
Apalancamiento máximo | x50
Margen máximo (por cuenta) | 1.000.000 sats

## ¿Cómo puedo utilizar la API de LN Markets?

Esta [referencia de API](https://docs.lnmarkets.com/api/v1/)  proporciona información sobre los puntos finales disponibles y cómo interactuar con ellos.

El punto final de la API para mainnet es: <https://api.lnmarkets.com/v1>

El punto final de la API para testnet es: <https://api.testnet.lnmarkets.com/v1>

Para la autenticación, actualmente utilizamos JSON Web Token (JWT). El token se puede generar con varios alcances: usuario, posiciones, depósito, retiro. Puede ser válido por un período de tiempo o indefinidamente.

También hay un punto final de websocket donde puede recopilar datos en tiempo real de LN Markets, como la oferta, la oferta, el índice y el último precio.

El punto final de websocket para mainnet es: wss://api.lnmarkets.com/realtime

Aquí hay tutoriales paso a paso sobre cómo usar la API de LN Markets:
- [Python](https://research.ito.am/ln-markets-api-python-tutorial/)
- [Node.js](https://research.ito.am/ln-markets-api-nodejs-tutorial/)
- [cURL](https://research.ito.am/ln-markets-api-curl-tutorial/)

## ¿Cuáles son los límites de la API de LN Markets?

Hay dos tipos de límites: posiciones y tasa.

Hay un máximo de 50 posiciones abiertas por cuenta.

Las solicitudes a nuestra REST API están limitadas a 1 solicitud por segundo. Los puntos finales que no requieren autenticación están limitados a 30 solicitudes por minuto.

Las conexiones a nuestro websocket están limitadas a 60 por hora.

Si una dirección IP arroja demasiados errores, podría prohibirse durante un cierto período de tiempo.

## ¿Existe alguna restricción geográfica para utilizar LN Markets?

Sí, un bloqueo de dirección IP para residentes de Estado Unidos (EE.UU.) es implementado en [LN Markets](https://lnmarkets.com/).