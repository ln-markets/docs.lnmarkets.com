# Lightning

## ¿Qué es la red Lightning?

La Lightning Network (LN) es un protocolo de pago que opera sobre Bitcoin: es una red de nodos de Bitcoin cuya finalidad es permitir la transferencia instantánea de bitcoin entre sus participantes. La Red Lightning aprovecha los contratos inteligentes de Bitcoin para minimizar la necesidad de transacciones en la cadena de bloques.

Hasta el despliegue de la Red Lightning a principios de 2018, solo era posible enviar bitcoin registrando cada transacción en la blockchain de Bitcoin. Aunque a día de hoy sigue siendo la forma más utilizada para transferir bitcoin, también es la más lenta y la más cara.

Por el contrario, una transacción Lightning no necesita ser registrada en la blockchain de Bitcoin para garantizar su existencia, su validez y la solvencia de su emisor: las tasas de transacción y el tiempo de ejecución se reducen al mínimo.

## ¿Cómo funciona la red Lightning?

Supongamos que Alice y Bob quieren empezar a utilizar la red Lightning para realizar pagos con bitcoin de forma rápida y económica.

Primero pueden abrir un canal de pago bidireccional siguiendo estos pasos:
- Crear un monedero multifirma: un monedero al que puedan acceder Alice y Bob utilizando sus respectivas llaves privadas.
- Hacer una transacción de financiación: un depósito de una determinada cantidad de bitcoin en este monedero por parte de Alice y/o Bob.

El canal de pago bidireccional de Alice y Bob está ahora abierto y los nodos Lightning de Alice y Bob pueden empezar a enviarse fondos mutuamente, a través de lo que se denominan transacciones de compromiso. El importe total de las transacciones de compromiso no puede superar el importe de la transacción de financiación.

El canal de pago bidireccional de Alice y Bob puede permanecer abierto todo el tiempo que quieran, y las transacciones de compromiso no afectarán a sus saldos de bitcoin hasta que el canal se cierre, a través de lo que se llama una transacción de liquidación.

Ahora, ¿cómo pasar de los canales de pago bidireccionales a la Red Lightning?

Digamos que Alice quiere enviar un pago en bitcoin a Charlie. Alice no tiene un canal de pago bidireccional abierto con Charlie, pero Bob sí. Si el canal entre Alice y Bob sigue abierto, el nodo Lightning de Alice puede dirigir el pago a Charlie a través del nodo de Bob. Si el canal de pago de Alice y Bob está cerrado, el nodo de Alice intentará encontrar otra ruta hacia el nodo de Charlie utilizando otras conexiones. Y si no hay tal ruta, Alice y Charlie deberán abrir un canal de pago bidireccional directo entre ellos.

Para más información: [Lightning Network White Paper](https://lightning.network/lightning-network-paper.pdf)

## ¿Qué es un nodo de la Red Lightning?

Un nodo de la Red Lightning es un software que se conecta a la Red Lightning para enviar y recibir bitcoin de otros nodos.
La Red Lightning es una red de igual-a-igual formada por estos nodos que se conectan entre sí. Cuantos más nodos haya en la red, más fuerte será ésta. De hecho, cuantos más nodos abran canales de pago, más aumenta la liquidez global de la red, lo que significa que, en general, más usuarios pueden enviar más dinero a más personas.

Un nodo de la red Lightning se encarga de controlar la cadena de bloques subyacente de Bitcoin y de interactuar con otros nodos para transferir pagos.

Actualmente hay tres equipos principales que están construyendo implementaciones de la red Lightning:
- El [lnd](https://github.com/lightningnetwork/lnd) de Lightning Lab en Go
- El [c-lightning](https://github.com/ElementsProject/lightning) de Blockstream en C
- El [eclair](https://github.com/ACINQ/eclair) de ACINQ en Scala

Todos los monederos Lightning no custodiados ejecutan su propio nodo Lightning.

## ¿Qué es un monedero de la Red Lightning?

Un monedero es la interfaz de usuario más común para las redes Bitcoin y Lightning, al igual que el navegador web es la interfaz más común para el protocolo HTTP.

Un monedero de Bitcoin es una aplicación o un programa que permite enviar y recibir unidades de bitcoin. Un monedero habilitado para Lightning es un monedero de Bitcoin que le permite interactuar con la Red Lightning.

Los monederos gestionan las claves públicas y privadas, hacen un seguimiento de los saldos y crean y firman transacciones.

Las claves suelen almacenarse en un monedero digital en el ordenador o smartphone de cada usuario. La posesión de la clave que puede firmar una transacción es el único requisito para gastar bitcoin.

Los monederos pueden ser de custodia o de no-custodia.

Un monedero con custodia es aquel en el que las claves privadas están en manos de un tercero, lo que significa que éste tiene el control total de los fondos. Un monedero sin custodia es aquel en el que el usuario tiene el control total de sus claves privadas y, por tanto, de sus fondos.

En pocas palabras, elegir entre un monedero sin custodia y uno con custodia suele ser una cuestión de compromiso entre la seguridad (no tus llaves, no tus bitcoin) y la comodidad (los monederos concustodia pueden ofrecer una experiencia de usuario más sencilla).

En nuestra opinión, los monederos sLightning como [Phoenix](https://phoenix.acinq.co/) o [Breez](https://breez.technology/) combinan una gran experiencia de usuario y el control de sus llaves.

Existen múltiples tipos de carteras Lightning, las más utilizadas son:
- Monederos de escritorio (en Windows, macOS, Linux, etc.)
- Monederos móviles (en iOS, Android, etc.)
- Monederos de hardware (Bitcoin autoalojado y nodo Lightning)

## ¿Cómo conseguir un monedero de la Red Lightning?

La forma más sencilla de obtener su primer monedero Lightning es descargar un software en su ordenador o móvil. Los usuarios más avanzados pueden preferir los monederos hardware (nodos Bitcoin y Lightning autoalojados).

Aquí hay una tabla (no exhaustiva) que resume los monederos Lightning de software más populares y sus principales características:

Monedero | Tipo | Ecosistema | Autentificación directa | Retiro directo
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

Autentificación directa: en LN Markets con [lnurl-auth](https://github.com/fiatjaf/awesome-lnurl)

Retirada directa: de sus fondos en LN Markets con [lnurl-withdraw](https://github.com/fiatjaf/awesome-lnurl)

## ¿Cómo puedo obtener bitcoin?

Hay varias formas de adquirir bitcoin:
- La forma más común es a través de una casa de cambio de Bitcoin. Ten cuidado antes de elegir uno, aquí hay una [comparación](https://en.bitcoin.it/wiki/Comparison_of_exchanges) que puedes consultar para minimizar los riesgos.
- Navega por un directorio peer-to-peer: aquí tienes una [lista](https://bitcoin.org/en/exchanges#p2p) de directorios P2P por países donde los vendedores tienen reseñas y comentarios que te ayudarán a elegir.
- Utiliza un cajero automático de Bitcoin: te permiten depositar y retirar dinero para que puedas comprar y vender bitcoin. Aquí tienes un [mapa interactivo](https://coinatmradar.com/) para encontrar el más cercano a ti.
- Acepta bitcoin como pago de bienes y servicios.

## ¿Cómo recibir los primeros sats en su cartera de Bitcoin?

Tienes que recibir sats en tu monedero Lightning a través de una transacción de Bitcoin.

Aunque la terminología exacta puede depender del monedero que estés utilizando, generalmente tienes que hacer clic en Recibir Fondos, a través de una transacción de Bitcoin. Tu monedero debería entonces generar un código QR y/o una dirección Bitcoin que puedes utilizar para enviar tus bitcoin.

## ¿Cómo enviar pagos en la red Lightning?

Aunque la terminología exacta puede depender del monedero Lightning que utilices, generalmente tienes que hacer clic en Enviar fondos, a través de un pago Lightning. A continuación, puede pegar una solicitud de pago por una determinada cantidad de satoshis, lo que se llama una factura, o escanear un código QR de esta factura.

## ¿Cómo recibir pagos en la red Lightning?

Aunque la terminología exacta puede depender del monedero Lightning que estés utilizando, generalmente tienes que hacer clic en Recibir fondos, a través de un pago Lightning. A continuación, puede introducir la cantidad de satoshis que desea recibir y generar una solicitud de pago, llamada factura, que puede enviar a la parte de la que desea recibir fondos.

## ¿Cómo se enrutan los pagos en la Red Lightning?

Si hay un canal de pago bidireccional abierto con otra parte, los pagos serán directos y tendrán un límite de la cantidad depositada en el canal.
De lo contrario, su cartera Lightning intentará encontrar una ruta de pago a la otra parte a través de otros nodos Lightning.

## ¿Cómo abrir un canal de pago bidireccional con otra entidad?

Aunque la terminología exacta puede depender del monedero Lightning que utilices, para abrir un canal con otra entidad en la red Lightning, generalmente tienes que hacer clic en Abrir nuevo canal. A continuación, puede pegar el URI del nodo, o la PubKey de la otra parte o utilizar un código QR para escanearlo.

