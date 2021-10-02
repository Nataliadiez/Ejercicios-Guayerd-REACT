import MuestraCamas from "../MuestraCamas/MuestraCamas";

const listado = (
    <ul>
      <li>Sauna</li>
      <li>Hidromasaje</li>
    </ul>
  )


const Habitacion = () => {
  
    return (
      <>
        <p>La habitacion que ha reservado tiene: </p>
        <MuestraCamas camas = {5}/>
        <p>La habitacion que ha reserbado No tiene: </p>
        {listado}
      </>
    )
  }

  export default Habitacion;