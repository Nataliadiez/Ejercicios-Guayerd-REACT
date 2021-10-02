import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from "prop-types"
import Habitacion from './components/Habitacion/Habitacion';
import Button from '@mui/material/Button';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Avatar from "./components/Avatar"




// 1) Antes de arrancar instalá proptypes en tu proyecto.
// 2) Buscá por qué y cuándo proptypes deja de ser parte del core de React.
// 3) Completá el objeto correspondiente a las prop types de componente Habitacion:


/* const reservas = {
  id: 1,
  name: "Fabricio"
}
const Habitacion = (props) => {
  const {camas, tieneTV, tipoPlacard, reservadoPor} = props;
  return (
      <>
          <p>En este momento hay: {props.camas} camas disponibles</p>
      </>
  )
}
Habitacion.propTypes = {
  camas: propTypes.number,
  tieneTV: propTypes.bool,
  tipoPlacard: propTypes.string,
  reservadoPor: propTypes.object.isRequired
  // reservadoPor tiene que ser obligatorio
}
const rootElement = document.getElementById("root")
ReactDOM.render(
  <Habitacion
      camas = {5}
      tieneTV = {false}
      tipoPlacard = "Empotrado"
      reservadoPor = {reservas}
  />,
  rootElement
) */


 // 4) Partiendo del siguiente código, ¿qué debo modificar para que no rompa el mismo?

/* const reservas = {
  id: 1 ,
  name: "Fabricio"
}

 
ReactDOM.render(
  <>
  <Avatar/>
  <Habitacion/>
  </>
  , document.getElementById("root")
) */



/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */