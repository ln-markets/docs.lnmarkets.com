# Guía paso a paso

En esta guía, le mostraremos cómo crear una cuenta en LN Markets, realizar sus primeras operaciones y aprovechar sus funcionalidades.

<img :src="$withBase('/assets/lnm.png')" alt="LN Markets">

LN Markets es un software alfa en pleno desarrollo.

Por favor, utilícelo con cuidado, preferiblemente en [Testnet](https://testnet.lnmarkets.com/) o con pequeñas cantidades.

LN Markets no ofrece ninguna garantía, utilícelo bajo su propia responsabilidad.

## Inicio de sesión

En [LN Markets](https://lnmarkets.com/), haga clic en Registrarse [Register] en la esquina superior derecha:

<img :src="$withBase('/assets/login.png')" alt="login">

Existen varios métodos de inicio de sesión:

- Iniciar sesión con LNURL: inicio de sesión instantáneo con cualquier monedero que soporte [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl#wallets) como [Phoenix](https://phoenix.acinq.co/), [Breez](https://breez.technology/), etc. Se trata de una forma sencilla y eficaz de iniciar sesión y operar en LN Markets: su monedero puede firmar un mensaje con su llave privada. Por lo tanto, la identificación se puede hacer sólo con la llave pública de su monedero y no se necesita ninguna otra información.

<img :src="$withBase('/assets/lnurl_auth.png')" alt="lnurl_auth">

- Iniciar sesión con credenciales: puede crear una cuenta directamente, introduciendo su nombre de usuario y contraseña.

<img :src="$withBase('/assets/credentials.png')" alt="credentials">

Tiene la opción de introducir una dirección de correo electrónico para recuperar su cuenta.

- Iniciar sesión con  [Alby](https://getalby.com/) y [Joule](https://lightningjoule.com/): son extensiones de browser web Bitcoin/Lightning  que se conectan a diferentes interfaces de billetera y brindan una profunda integración de Lightning a la web.

- Iniciar sesión con[Ligthning Node Connect](https://github.com/lightninglabs/lightning-node-connect): un protocolo para conectar su nodo de manera fácil y segura a una aplicación web o móvil como LN Markets.

## Deposite fondos en su cuenta

Haga clic en el botón Depositar [Deposit] en la esquina inferior izquierda.

Puede depositar con una transacción Lightning o con una transacción normal de Bitcoin [On Chain].

Con una transacción Lightning, puede escanear el código QR con su monedero o copiar la factura [invoice] y pegarla directamente.

<img :src="$withBase('/assets/deposit.png')" alt="deposit">

Con una transacción Bitcoin, puede escanear el código QR con su monedero o copiar la factura y pegarla directamente.

<img :src="$withBase('/assets/deposit_onchain.png')" alt="deposit_onchain">

Su depósito está ahora confirmado y puede verlo en su saldo.

## Operar Futuros

LN Markets cotiza una oferta [bid] y una demanda [offer] (en la barra superior) y es la contraparte directa de todas las operaciones.

El primer contrato que enumeramos es un CFD (Contrato por Diferencia) sobre el precio del BTC/USD con un apalancamiento de hasta x100.

La apertura de una posición larga es al precio de la demanda y, a la inversa, la apertura de una posición corta es al precio de oferta.

<img :src="$withBase('/assets/trade.png')" alt="trade">

Para introducir una posición, primero tiene que definir un lado (compra o venta) y el tipo de orden: orden de mercado u orden limitada.

A continuación, puede definir su posición con un parámetro, ya sea la cantidad o el margen.

Este depósito se añadirá al margen disponible para entrar en posiciones en el futuro.

La cantidad es el número de contratos que desea negociar (1 contrato = 1 USD). Para una cantidad y un apalancamiento determinados, el margen y la liquidación se calculan automáticamente.

El margen es la cantidad en sats que desea utilizar para esta posición. Para una cantidad y un apalancamiento determinados, la cantidad y la liquidación se calculan automáticamente.

También puede añadir órdenes opcionales de take profit (tomar ganancias) y stop loss (parar pérdidas), expresadas en BTC/USD.

Después de confirmar su orden, la posición queda abierta y puede verla en la sección inferior de la hoja de operaciones:

<img :src="$withBase('/assets/running_blotter.png')" alt="running_blotter">

### Ir con todo

Para un lado determinado (compra o venta), el botón All in (ir con todo) genera una orden de mercado que maximiza el apalancamiento y el uso del margen disponible.

### Editar una operación

Para cada posición, puede añadir un Stop Loss [parar pérdidas] y un Take Profit [tomar ganancias].

<img :src="$withBase('/assets/stop_loss.png')" alt="stop_loss">

También puede tomar las siguientes acciones: eliminar el margen (-) para cobrar las ganancias y pérdidas, aumentar el margen (+) para disminuir la probabilidad de un evento de liquidación y cerrar la posición.

<img :src="$withBase('/assets/add_margin.png')" alt="add_margin">

Y puede cerrar cada posición individualmente o hacer clic en el botón Cerrar todo.

<img :src="$withBase('/assets/close_all.png')" alt="close_all">

Puede encontrar todas sus posiciones cerradas en el registro cerrado de la sección inferior.


## Operar Opciones

LN Markets cotiza una oferta [bid] y una demanda [offer] (en la barra superior) y es la contraparte directa de todas las operaciones.

En la sección de Opciones, puede negociar dos tipos de Opciones sobre el precio a plazo del BTCUSD: calls (opciones de compra) y puts (opciones de venta).

<img :src="$withBase('/assets/options_trading.png')" alt="options_trading">

Queremos desmitificar las operaciones de opciones y hacerlas accesibles para todos. Por eso hemos tomado las siguientes decisiones:
- Sólo puedes comprar opciones. Si eres alcista, compra opciones de calls. Si eres bajista, compra opciones de puts. Si espera volatilidad pero no está seguro de la dirección, compre straddles.
- Son opciones de 24 horas: expiran un día después de abrir la posición (puede cerrarlos en cualquier momento antes de que expiren).
- Hay 3 strikes para las opciones de compra (el siguiente mil hacia abajo y los dos siguientes miles hacia arriba) y para las opciones de venta (el siguiente mil hacia arriba y los dos siguientes miles hacia abajo), y 2 strikes para las straddles (los dos comunes a call y put).
- Al igual que con los futuros, tiene que pagar un margen para abrir el contrato de opciones (que corresponde a la prima de la opción).
- Para la entrega al vencimiento, puede elegir entre la entrega en efectivo (PL de la opción) o la entrega física: obtiene un contrato de futuros para el strike determinado.

<img :src="$withBase('/assets/options_conf.png')" alt="options_conf">

Después de confirmar su orden, la posición está abierta y puede verla en el historial de posiciones en la parte inferior:

<img :src="$withBase('/assets/running_blotter_options.png')" alt="running_blotter_options">


## Swap

Haga clic en ‘Swap’ para convertir fácilmente su saldo de BTC en un saldo de USD sintético y viceversa. Esto le permite administrar mejor su riesgo.

<img :src="$withBase('/assets/swap.png')" alt="swap">

Cuando intercambia su saldo de BTC por un saldo de USD sintético, lo que sucede bajo el capó es una venta de contratos futuros de BTCUSD con un apalancamiento igual a 1.

No aplicamos tarifas de financiación (‘funding fee’) para este servicio.


## Retirar fondos a su monedero

Haga clic en el botón Retirar en la esquina inferior izquierda y elija la cantidad que desea depositar en su cuenta.

<img :src="$withBase('/assets/withdraw.png')" alt="withdraw">

Si tiene un monedero Lightning con [LNURL](https://github.com/fiatjaf/awesome-lnurl#wallets), puede simplemente escanear el código QR para recibir el pago inmediatamente. Si no, puede copiar la factura en su cartera.

## Editar su perfil

Haz clic en la sección de su perfil bajo su nombre de usuario para editarlo, como también la configuración de su tabla de clasificación, actualizar su contraseña y generar sus tokens [claves] API:

<img :src="$withBase('/assets/profile.png')" alt="profile">

También puede ver su historial de depósitos y retiros.

## Utilizar la API de LN Markets

La [referencia de la API de LN Markets](https://docs.lnmarkets.com/api/v1/) proporciona información sobre todos los extremos disponibles.

Aquí hay dos paquetes de Python y JavaScript para interactuar fácilmente con la API:
- [Paquete Python](https://pypi.org/project/ln-markets/)
- [Paquete de JavaScript](https://www.npmjs.com/package/@ln-markets/api)
