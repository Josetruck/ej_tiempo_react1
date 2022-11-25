import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: props.email,
            pass: props.pass };
        }
        componentDidMount() {
            console.log("Componente montado");
    }
    componentDidUpdate() {
        console.log({"email": this.state.email , "pass":this.state.pass});
    }
    componentWillUnmount() {
        console.log("Componente Desmontado");
    }
    render() {
        return <div id="formulario">
            <input placeholder="Email" type="text" onChange={(e)=>this.setState({email:e.target.value})}/>
            <input placeholder="Pass" type="password" onChange={(e)=>this.setState({pass:e.target.value})}/>
            <div id="consola">
            <p>Consola:</p>
            <p> email: {this.state.email}</p>  
            <p> pass: {this.state.pass}</p>
            </div>
            </div>;
    }
}

export default Formulario;