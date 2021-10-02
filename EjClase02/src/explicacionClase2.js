//render es un método para mostrar elementos o componentes en el DOM
// en este caso, en el div con id "root"

/* let nombre = "Natti"

ReactDOM.render(
  <h1>Hola {nombre}</h1>,
  document.getElementById("root")
) 

// Esta es una forma de escribirlo

ReactDOM.render(
  React.createElement("ol",null, 
    React.createElement("li",null, "peras"),
    React.createElement("li",null,"manzanas"),
    React.createElement("li",null,"ciruelas")
  ), 
  document.getElementById("root")
)  */

// Esta es otra forma de escribirlo con un array

/* const array = ["peras","manzanas","ciruelas"]

ReactDOM.render(
  React.createElement("ol",null, 
    React.createElement("li",null,array[0]),
    React.createElement("li",null,array[1]),
    React.createElement("li",null,array[2])
  ), 
  document.getElementById("root")
)  */

// Esto tiene un problema porque me coloca la lista dentro del H1
/* const array = ["peras","manzanas","ciruelas"]

ReactDOM.render(
  React.createElement("h1", null , "Frutas",
  React.createElement("ol",null, 
    React.createElement("li",null,array[0]),
    React.createElement("li",null,array[1]),
    React.createElement("li",null,array[2])
  )), 
  document.getElementById("root")
)  */

// Esta es la forma actual en la cual se escriben los códigos pequeños
// Hasta acá estamos renderizando ELEMENTOS
/* const array = ["peras","manzanas","ciruelas"]

const render = (
  <ol>
    <li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
  </ol>
);

//


ReactDOM.render(
  render,
  document.getElementById("root")
)  */

// Ahora vamos a renderizar COMPONENTES
// Los componentes siempre tienen que escribirse en la función con
// Mayúscula y se llama colocando los signos < componente />
// Los fragments son etiquetas vacías

// Dentro de un componente llamo a otro componente

/* const TituloFrutas = () => {
  return(<h1>Frutas:</h1>)
}

const array = ["peras","manzanas","ciruelas"]


const Frutas = () => {
  return (
    <>
      <TituloFrutas/>
      <h2>Titulo 2</h2>
      <ol>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      </ol>
    </>
  )
}


ReactDOM.render(
  <Frutas/>,
  document.getElementById("root")
)  */


/* a) Generar un componente que se llame Subtitulo y acepte el h4 // LISTO
   b) Y van a generar un componente que dentro lleve un párrafo, se llamará Parrafo el componente // LISTO
   c) Generar un componente que muestre la lista  */


/* const TituloFrutas = () => <h1>Frutas:</h1> 
// le podes quitar el return si es una sola linea a retornar


const array = ["peras","manzanas","ciruelas"]

const Subtitulo = () => <h4>Titulo 2</h4>

const Parrafo = () => <p>Esto es un párrafo, Lorem blablabla, porque acá en JSX no te deja poner los Lorem que tanto nos gustaban del HTML5</p>

const ListadoDeFrutas = () => {
  return (
      <ol>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      </ol>
  )
}

const Frutas = () => {
  return (
    <>
      <TituloFrutas/>
      <Subtitulo/>
      <Parrafo/>
      <ListadoDeFrutas/>
    </>

  )
}


ReactDOM.render(
  <Frutas/>,
  document.getElementById("root")
)  */


// Usando props
// Al usar props se le puede poner en el componente props o cualquier otra letra o palabra


/* const array = ["peras","manzanas","ciruelas"];

// de esta forma desestructuras el titulo del componente
const TituloFrutas = ({titulo , id}) => { //esta es otra forma de utilizar props
  return <h1>{titulo}</h1> 
} 

const array = ["peras","manzanas","ciruelas"];


// const Subtitulo = ({sub}) => <h4>{sub}</h4>
const Subtitulo = ({num}) => <h4>{num * 4}</h4>

const elemento = <h1>Hola mundo</h1>
const elemento2 = "Hola mundo 2"

const Parrafo = () => <p>Esto es un párrafo, Lorem blablabla, porque acá en JSX no te deja poner los Lorem que tanto nos gustaban del HTML5</p>

const ListadoDeFrutas = () => {
  return (
      <ol>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      </ol>
  )
}

const TituloFrutas = (props) => { 
  const {titulo = "aca va un titulo", id} = props;
  return(
    <>
      <h1>{titulo}</h1> 
      <p>El id es: {id}</p>
    </>
  ) 
}

TituloFrutas.propTypes = {
  titulo: propTypes.string,
  id: propTypes.number.isRequired,
  casado: propTypes.bool,
  array: propTypes.array,
  objetos1: propTypes.object
}
 */

// SIEMPRE LOS NÚMEROS ENTRE LLAVES
/* const Frutas = () => {
  return (
    <>
      {elemento}
      {elemento2}
      <TituloFrutas titulo = {"Titulo frutas Parametro"} id = {1}/>
      <Subtitulo num = {5}/> 
      <Parrafo/>
      <ListadoDeFrutas/>
    </>

  )
}

ReactDOM.render(
  <Frutas/>,
  document.getElementById("root")
)  


 const Componente = ({titulo}) => <h1>{titulo}</h1>

ReactDOM.render(
  <Componente titulo = "ahora me llamo de otra forma"/>,
  document.getElementById("root")
) */