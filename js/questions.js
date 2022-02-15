(function() {

    const titleQuestions = [...document.querySelectorAll( '.questions__title' )];

    /* Asi tambien se puede iterar.
       Entonces, por cada pregunta(.questions__title que encuentre) quiero obtener
       su pregunta individual.
       Es decir, de todas las preguntas, yo quiero obtener a las preguntas individualmente */
    titleQuestions.forEach( question => {

        question.addEventListener( 'click', () => {
            
            /* en este variable vamos a calcular el alto del elemento. */
            let height = 0;
            /* aquí, vamos a obtener al hermano, o al siguiente hermano de question.(osea, si pasamos
               al HTML, el hermano de h3(que tiene como clase questions__title) es el parrafo) y es parrafa
               es el que queremos mostrar al dar click. */
            let answer = question.nextElementSibling;

            /* con esta variable, le vamos a agregar un padding abajo del parrafo */
            /* entonces, la variable addPadding va a obtener a la pregunta(que es el question al 
               dar click(que sera un h3 de los 3 que hay)) y que obtenga al padre de esa pregunta
               que sería el un div(que tiene como clase questions__answer) y que tenga al padre de ese div
               (que sería el elemento article con la clase questions__padding). */
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle( 'questions__padding--add' );

            /* al dar click, quiero obtener a sus hijos, en especifico, al primero hijo(0), y quiero
               obtener las clases del hijo(la cual es el span, ese es el hijo, quiero obtener sus clases)
               y agregarle, o quitarle... lo que guste, en este caso agregarle la clase.
               con .toggle = es, le agrega si no tiene la clase, y le quita si tiene la clase. */
            question.children[0].classList.toggle( 'questions__arrow--rotate' );

            /* Que si del elemento answer(que es el parrafo) tiene un height igual a 0, entonces
               quiero que cambie su valor, que ahora tenga el alto minimo, para que se muestre. */
            if (answer.clientHeight === 0) {
                /* quiero que la varibale height ahora tenga, el alto minimo para que se muestre.
                   con scrollHeight nos da el alto minimo, para que un elemento se muestre  */
                height = answer.scrollHeight; 
            }

            /* y si eso es verdad(la condición de arriba) entonces, yo quiero agregar el 
               height a la propiedad answer, y quiero agregarle el height de la variable height */
            answer.style.height = `${height}px`;

        } );

    } );

} )();