function PiePagina(props){
    return <footer>
    <p>Contacto: {props.email}</p>
        <h4>The bridge Digital Talent Accelerator</h4>
        <p><strong>Dirección: </strong>{props.direccion}. {props.ciudad}</p>
    </footer>
}

export default PiePagina