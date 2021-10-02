import propTypes from "prop-types"

const MuestraCamas = (props) => {
    let {camas = 5} = props;
    return(
        <p>Un total de {camas} camas</p>
    )
    
}

MuestraCamas.propTypes = {
    camas: propTypes.number
}


export default MuestraCamas