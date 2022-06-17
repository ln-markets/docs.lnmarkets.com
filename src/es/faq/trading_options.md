# Trading de Opciones

## ¿Qué es una opción?

Una opción es un contrato financiero que ofrece al comprador la oportunidad de comprar o vender un activo subyacente. El contrato de opciones especifica el precio de ejercicio, el precio al que se puede comprar o vender el activo subyacente cuando se ejerce, y la fecha de vencimiento.

El precio de una opción se denomina prima. Suele calcularse con el modelo Black Scholes, que sólo requiere dos parámetros de mercado (el precio a plazo del activo subyacente y la volatilidad) para valorar correctamente esta prima.

## ¿Por qué operar con opciones?

Operar con opciones puede ser muy útil en un mercado agitado. En efecto, una posición futura puede liquidarse con bastante rapidez en un mercado volátil, incluso si la posición inicial se revela correcta a largo plazo: depende de la trayectoria. Sin embargo, al comprador de una opción no le importa la trayectoria que siga el mercado, ¡lo único que importa es el nivel del subyacente al momento del vencimiento!

## ¿Cuáles son las características de las opciones que cotizan en LN Markets?

Cuando diseñamos nuestra oferta de operaciones de opciones, prestamos atención a que fuese sencilla y accesible para todos. Por eso, para nuestra primera iteración, hemos tomado varias decisiones que detallamos a continuación:

- Sólo puedes comprar opciones, no venderlas. Puedes comprar dos tipos de opciones: de call (compra) y de put (venta). La compra de una opción de call da derecho a entrar en una posición alcista (larga/long) y la compra de una opción de put (venta/short) da derecho a entrar en una posición bajista. Si eres un bull (toro/alcista), compra calls, si eres un bear (oso/bajista), compra puts. Si espera volatilidad pero no está seguro de la dirección, también puede comprar un straddle, una combinación de call y put para el mismo ejercicio.

- Todas son opciones de 24 horas: expiran 1 día después de la apertura de la posición (puede cerrarlos en cualquier momento antes de que expiren).

- El subyacente de la opción es el precio a plazo del BTCUSD, es decir, el precio del BTCUSD descontado en el momento del vencimiento de la opción. Para el precio de referencia del BTCUSD, utilizamos el precio index (índice) de BTCUSD en LN Markets.
Cotizamos las opciones de Bitcoin con BTC como moneda doméstica, como es el caso de los futuros inversos. Lo que significa que el parámetro del precio a plazo se expresa como USD/BTC. Sin embargo, lo mostramos como BTC/USD por simplicidad.
La cantidad es el importe nocional de las opciones que desea negociar. Se expresa en USD.

- El strike o el parámetro del precio a ejercer (precio al que se puede ejercer la opción) se expresa como USD/BTC, ya que el BTC es la moneda doméstica. Sin embargo, lo mostramos como BTC/USD por razones de simplicidad.
Enumeramos 3 strikes para las opciones de compra (el siguiente mil hacia abajo y los dos siguientes miles hacia arriba) y para las opciones de venta (el siguiente mil hacia arriba y los dos siguientes miles hacia abajo), y 2 strikes para las straddles (los dos comunes a call y put).
Por ejemplo, si el precio de call = 45.684,5 y el de put = 45.749,86; para el call: Strike 1 = K1 = 45,000; Strike 2 =  K2 = 46,000; Strike 3 =  K3 = 47,000 y para la opción de put: Strike 1 = K1 = 46,000; Strike 2 =  K2 = 45,000; Strike 3 =  K3 = 44,000. Para la straddle: Strike 1 = K1 = 45,000; Strike 2 = K2 = 46,000.

- Para la liquidación al vencimiento, puede elegir entre la entrega en efectivo y la entrega física. 
Con la entrega en efectivo, usted recibe el PL de la opción al vencimiento = Max(Xt - K, 0), donde Xt es el valor del subyacente en el momento exacto del vencimiento. En otras palabras, si la opción está "In-The-Money" al vencimiento (si su precio a ejercer es favorable comparado con el precio de mercado del subyacente al vencimiento), usted recibe el PL de la opción. 
Con la entrega física, si la opción está "In-The-Money" al vencimiento, usted recibe la entrega de un contrato de futuros con el precio de ejercicio dado. Este contrato de futuros se puede gestionar en la sección de Futuros. 

- Para el parámetro Volatilidad (%), calculamos una volatilidad implícita a partir de los precios del mercado, que da una indicación del movimiento esperado del subyacente.

- La delta es una métrica de riesgo que estima el cambio en el precio de la opción, dado un cambio de 1 unidad en su activo subyacente. Se calcula con la fórmula de Black Scholes. Con Bitcoin como moneda doméstica, la Delta se expresa en USD. Corresponde al número de contratos futuros de BTCUSD que tendría que vender para estar cubierto por Delta. Al igual que con los futuros, tiene que pagar un margen para abrir el contrato de opciones (que corresponde a la prima de la opción).

- El margen es la prima de la opción, expresada en sats. Se calcula con la fórmula de Black Scholes, y depende de la volatilidad y del precio a plazo. El margen corresponde a la cantidad que tiene que pagar para comprar una opción de compra o de venta. Esta cantidad se deduce de su Margen Disponible y se añade a su Margen Utilizado. 

- El vencimiento es el momento exacto en que la opción expira, 1 día después de la apertura de la posición.

## ¿Cómo operar con opciones?

Para operar con opciones, los pasos son los siguientes:
1. Decida si va a comprar una opción de call/compra (ir en largo) o una opción de put/venta (ir en corto)
2. Establezca la cantidad (en USD, la cantidad nocional de opciones que desea negociar)
3. Elija el precio de ejercicio
4. Elija entre liquidación en efectivo o física
5. Haga clic en comprar para pagar el margen (en sats) y ¡ya está!

## ¿Cómo seguir la evolución de una opción?

Después de comprar una opción, puede verla en el historial de operaciones, en la parte inferior de la pantalla. Cada línea corresponde a una opción, con las variables:
- Vencimiento de la opción
- Tipo: Call o Put
- Cantidad en USD
- Precio de ejercicio
- Volatilidad en %
- Margen
- PL = Mark-to-Market - margen (el Mark-to-Market de la opción es su precio con el nivel de volatilidad actual, permaneciendo los demás parámetros iguales)
- Delta (la Delta de una cartera de opciones es la suma de todas sus Deltas)
- Liquidación: Efectivo o físico

En la sección de riesgo, en la parte inferior izquierda de la pantalla, puede ver en la sección PL en su PL global (suma de los PL de sus opciones) y su Delta global (suma de los Deltas de sus opciones).

## ¿Qué ocurre al vencimiento de la opción?

Al vencimiento de una opción con liquidación en efectivo, si está "In-The-Money", recibe un PL + el margen inicial pagado por la opción. Esta suma se añade a su Margen Disponible.

Al vencimiento de una opción con liquidación física, si usted está "In-The-Money", obtiene un contrato de futuros con precio de liquidación igual al strike de la opción, margen igual al margen inicial pagado por la opción, y PL del contrato de futuros igual al PL de la opción al vencimiento.