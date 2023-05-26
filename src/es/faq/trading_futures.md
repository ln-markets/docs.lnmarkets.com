# Trading de Futuros

## ¿Qué es un CFD?

CFD significa Contrato por Diferencia. Un CFD es un contrato financiero extrabursátil (OTC), generalmente entre un cliente y un corredor, en el que la diferencia de liquidación entre los precios de apertura y cierre de la operación se liquida en efectivo. Con los CFD, no hay entrega de bienes o valores físicos.

## ¿Qué es el side (lado)?

El side de una posición es largo para una orden de compra y corto para una orden de venta.

En LN Markets, puede encontrar el side global de todas las posiciones abiertas en el historial de riesgo.

## ¿Qué es una orden de compra?

Una orden de compra es una orden para adquirir una cantidad determinada de un producto financiero. Una orden de compra se ejecuta al precio de oferta. 

Después de introducir una orden de compra, decimos que está en una posición larga.

## ¿Qué es una orden de venta?

Una orden de venta es una orden para vender una cantidad determinada de un producto financiero. Una orden de venta se ejecuta al precio de oferta.

Después de introducir una orden de venta, decimos que está en una posición corta.

## ¿Qué es el precio de los Futuros?

El precio de los Futuros es el precio de referencia BTC/USD.

## ¿Qué es el precio índice?

El precio del índice es una media ponderada del último precio del consenso de mercado del activo subyacente, para cada casa de cambio constituyente.

## ¿Cuál es el precio de entrada?

El precio de entrada de una posición es el precio al que se abre una posición.

## ¿Cuál es el precio de salida?

El precio de salida de una posición es el precio al que se cierra.

## ¿Cuál es la cantidad?

La cantidad es el número de contratos que desea operar.

En LN Markets, cada contrato vale 1 USD, el margen y las ganancias y pérdidas se expresan en sats (1 BTC = 100.000.000 satoshis o sats).

## ¿Qué es el apalancamiento?

El apalancamiento en el comercio es una estrategia de inversión que permite ganar exposición a un activo financiero con un capital inicial menor, conocido como margen.

El apalancamiento es un arma de doble filo. Con un apalancamiento de 1, se está expuesto a las variaciones del activo subyacente. Con un apalancamiento de 2, para una posición larga, cuando el activo subyacente aumenta en 1, sus ganancias y pérdidas aumentan en 2. Pero cuando el activo subyacente disminuye en 1, sus ganancias y pérdidas disminuyen en 2. Y viceversa para una posición corta.

En LN Markets, el apalancamiento está limitado a x100.

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

## ¿Qué son comisiones de trading?

Su comisión de trading depende del nivel de comisión en la que se encuentre el usuario. Cuanto más volumen haga un usuario, más baja será su comisión de negociación. Consulta tu perfil para conocer tu nivel.

## ¿Cómo se calculan las comisiones?

Inicialmente, (Comisión total pagada) = 0 y (margen de mantenimiento) = comisión de apertura reservada + comisión de cierre reservada, con comisión de apertura reservada = cantidad / precio de entrada * comisión de nivel 1 y comisión de cierre reservada = cantidad / precio de liquidación inicial * comisión de nivel 1.

En el momento de la operación, Comisión total pagada = comisión de apertura y margen de mantenimiento = comisión de apertura reservada + comisión de cierre reservada - comisión de apertura. La comisión de apertura reservada y la comisión de apertura pueden ser diferentes en caso de cambio de las comisiones dependiendo del nivel.

Al cerrar una posición, la comisión total pagada = comisión de apertura + comisión de cierre y margen de mantenimiento = comisión de apertura reservada + comisión de cierre reservada - comisión de apertura - comisión de cierre.

Los usuarios recibirán P&L + margen + margen de mantenimiento.

## ¿Qué es liquidación?

La liquidación es el cierre forzoso de una posición corriente. Se produce si el precio de los Futuros cae por debajo del nivel de liquidación para las posiciones largas, o sube por encima del nivel de liquidación para las posiciones cortas.

## ¿Qué es coeficiente de margen?

Cuando el coeficiente de margen alcanza el 100%, su posición se liquida. Coeficiente de margen = margen de mantenimiento / (margen inicial + P&L - comisión).

## ¿Qué es una orden de mercado?

Una orden de mercado es una orden de compra o de venta, que se ejecuta inmediatamente al precio de oferta o de demanda.

## ¿Qué es una orden limitada?

Una orden limitada es una orden de compra o de venta a un precio determinado. Una orden limitada de compra sólo puede ejecutarse al precio límite o inferior. Una orden limitada de venta sólo puede ejecutarse al precio límite o superior.

La ejecución de una orden limitada no está garantizada y usted puede cancelar esta orden en cualquier momento, antes de que se ejecute.

## ¿Qué es un take profit (tomar ganancias/beneficios)?

Una orden de recogida de beneficios es una orden opcional, que especifica el precio exacto al que se debe cerrar una posición abierta, para obtener beneficios. Si el precio del activo subyacente no alcanza el precio de recogida de beneficios, la orden de recogida de beneficios no se ejecuta.

Para una orden de compra, el take profit debe ser superior al precio del activo subyacente.
Para una orden de venta, el take profit debe ser inferior al precio del activo subyacente.

## ¿Qué es un stop loss (limitar pérdidas)?

Una orden de stop loss es una orden opcional que especifica el precio exacto al que se debe cerrar una posición abierta para limitar una pérdida. Si el precio del activo subyacente no alcanza el precio de stop loss, la orden de stop loss no se ejecuta.

Para una orden de compra, el stop loss debe ser superior al precio de liquidación e inferior al precio de compra.
Para una orden de venta, el stop loss debe ser superior al precio de oferta e inferior al precio de liquidación.

## ¿Qué es el balance/saldo?

En LN Markets, el saldo es igual a la suma de su margen disponible (para entrar en posiciones futuras), el margen utilizado (en posiciones abiertas) y las pérdidas y ganancias en posiciones abiertas.

## ¿Qué es el margen disponible?

En LN Markets, el margen disponible es la cantidad que puede utilizar para entrar en futuras posiciones comerciales.

## ¿Qué margen se utiliza?

En LN Markets, el margen utilizado es la cantidad utilizada en las posiciones abiertas actuales.
El margen máximo utilizado está actualmente limitado a 0.01 BTC o 10 millones de satoshis.

## ¿Qué es la cantidad abierta?

En LN Markets, en el historial de riesgo, la cantidad abierta es el número de contratos actualmente abiertos.

## ¿Qué es el historial de ganancias y pérdidas (P&L)?

La P&L de una posición es la ganancia y la pérdida de esta posición.

En LN Markets, en el historial de riesgo, la P&L es la P&L global de las posiciones actualmente abiertas.

## ¿Qué es el historial de posiciones abiertas?

La tabla de posiciones abiertas es un resumen de las posiciones en curso.

Puede cerrar una posición haciendo clic en el botón cerrar para una posición específica en la tabla. Este proceso cancela las órdenes opcionales de toma de beneficios y de liquidación, y deshace las órdenes ejecutadas con una orden de mercado. Una posición también puede cerrarse automáticamente cuando se ejecuta una orden de recogida de beneficios o una orden de liquidación. La posición pasa de abierta a cerrada.

## ¿Qué es el historial de posiciones cerradas?

El historial de posiciones cerradas es un resumen de todas las posiciones cerradas anteriormente.