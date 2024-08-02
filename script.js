//alert("Hola Mundo <3");
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto

typewriter
    .pauseFor(2500)// milisegundos 2.5 segundos
    .typeString('Licenciada en Administración de tecnologías de información. Soy una entusiasta de la tecnología que busca constantemente nuevos desafíos. Me encanta combinar mi lado creativo con mi conocimiento técnico para desarrollar proyectos innovadores.')
    .pauseFor(300)
    .deleteChars(10)
    .start();


let hab = document.getElementById('hab');

let typewriterhab = new Typewriter(hab, {
    loop: true,
    delay: 75,
});

// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto

typewriterhab
    .pauseFor(2000)// milisegundos 2.5 segundos
    .typeString('Habilidades.')
    .pauseFor(200)
    .deleteChars(10)
    .start();



let proy = document.getElementById('proy');

let typewriterproy = new Typewriter(proy, {
    loop: true,
    delay: 75,
});

// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto

typewriterproy
    .pauseFor(2000)// milisegundos 2.5 segundos
    .typeString('Proyectos realizados.')
    .pauseFor(100)
    .deleteChars(10)
    .start();



let test = document.getElementById('test');

let typewritertest = new Typewriter(test, {
    loop: true,
    delay: 75,
});

// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto

typewritertest
    .pauseFor(2000)// milisegundos 2.5 segundos
    .typeString('Testimonios.')
    .pauseFor(100)
    .deleteChars(10)
    .start();