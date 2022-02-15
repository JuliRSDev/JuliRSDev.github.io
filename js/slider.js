/* Creamos una función que se llame a si misma, para proteger el codigo
   y no mezclarlo entre todos los archivos de js que vamos a crear. */
(function() {
    
    /* con querySelectorAll, es tomar a todos los elementos con la clase tal.
       con querySelector, es tome el elemento con el id tal o clase tal */
    /* esta constante va a optener a travez de document.querySelectorAll, todos
       los elementos, con la clase testimony__body */
    /* [...] para que en vez de ser un nodo de elementos, sea un array */
    const sliders = [...document.querySelectorAll( '.testimony__body' )];
    const buttonNext = document.querySelector( '#next' );
    const buttonBefore = document.querySelector( '#before' );
    let value;  

    buttonNext.addEventListener( 'click', () => {
        changePosition(1);
    } );

    buttonBefore.addEventListener( 'click', () => {
        changePosition(-1);
    } );

    const changePosition = ( add ) => {
        /* estamos obteniendo el slider actual.
           .dataset.id = obtener su dataset, que en este caso es un id */
        const currentTestimony = document.querySelector( '.testimony__body--show' ).dataset.id;
        /* value va hacer igual al data-id del slider actual, y le sumamos 
           el valor que le pasamos a la función. */
        value = Number( currentTestimony );
        value += add;

        sliders[Number( currentTestimony ) - 1 ].classList.remove( 'testimony__body--show' );

        /* supongamos que estamos en el testimony__body numero 3, y le vuelvo a dar a la
           flecha derecha(que tiene de id next), entonces sería, 3 + 1, que seria 4, pero no hay
           un cuarto elemento, entonces... la condición, si el valor es igual a cuatro(4 == 4) enntonces
           estamos revazando el número de testimony__body(ya que son solo 3).
           Pero tambien || value === 0, significa que estamos en el data-id número uno, y restamos uno(1-1=0),
           por lo que tampoco hay un testimony__body número 0.
           Entonces si esto pasa, quiero que value cambie. */ 
        if ( value === sliders.length+1 || value === 0) {

            /* si value es igual a 0, entonces, significa que estamos en el primer
               elemento, y retrosedimos, por ende lo quiero mandar al ultimo elemento.
               Si tenemos 0, yo no quiero que tenga 0, si no que me mande al ultimo testimony__body, 
               que en este caso es el tercero, : pero en caso contrario si revasamos el número de
               testimony__body, quiero que me mande al primero 
                */
            value = value === 0 ? sliders.length : 1;
        }

        /* Quiero acceder al elemento que tenga value(que es el data-id) pero -1 de sliders, luego
           de acceder, quiero obtener sus clases  y agregarle la clase testimony__body--show, que es la clase
           que hace que los elementos se muestren     */
        sliders[value-1].classList.add( 'testimony__body--show' );

    }


})();