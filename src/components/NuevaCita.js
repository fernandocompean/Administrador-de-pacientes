import React, { Component } from 'react';
import uudi from 'uuid';

const stateInitial = {
    cita: {
        mascota: '',
        propietario: '',
        date: '',
        time: '',
        sintomas: ''
    },
    error: false

}

class NuevaCita extends Component {
    state = {...stateInitial }
        // cuando el usuario escribe en los inputs
    handleChange = e => {
            // colocar lo que se esta escribiendo en state
            this.setState({
                cita: {
                    ...this.state.cita,
                    [e.target.name]: e.target.value
                }
            })
        }
        // cuando el usuario envía el formulario

    handleSubmit = e => {
        e.preventDefault();

        // extraer valores de state
        const { mascota, propietario, date, time, sintomas } = this.state.cita;

        // validar que todos los valores estan llenos

        if (mascota === '' || propietario === '' || date === '' || time === '' || sintomas === '') {
            this.setState({
                error: true
            });

            // detener la ejecución
            return;
        }

        // generar objeto con los datos

        const nuevaCita = {...this.state.cita };
        nuevaCita.id = uudi();

        // agregar la cita al state de app

        this.props.crearNuevaCita(nuevaCita)

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInitial
        })
    }


    render() {

        //extraer valor del state
        const { error } = this.state;

        return ( <
            div className = " card mt-5 py-5" >
            <
            div className = "card-body" >
            <
            h2 className = "card-title text-center mb-5" >
            Llena el formulario para crear una nueva cita <
            /h2>

            {
                error ? < div className = "alert alert-danger mt2 mb-5 text-center" >
                    Todos los campos son obligatorios. <
                    /div> : null}

                <
                form
                onSubmit = { this.handleSubmit } >
                    <
                    div className = "form-group row" >
                    <
                    label className = "col-sm-4 col-lg-2 col-form-label" >
                    Nombre mascota <
                    /label> <
                div className = "col-sm-8 col-lg-10" >
                    <
                    input type = "text"
                className = "form-control"
                placeholder = "Nombre mascota"
                name = "mascota"
                onChange = { this.handleChange }
                value = { this.state.cita.mascota }

                /> < /
                div > <
                    /div>

                <
                div className = "form-group row" >
                    <
                    label className = "col-sm-4 col-lg-2 col-form-label" >
                    Nombre del dueño <
                    /label> <
                div className = "col-sm-8 col-lg-10" >
                    <
                    input type = "text"
                className = "form-control"
                placeholder = "Nombre dueño mascota"
                name = "propietario"
                onChange = { this.handleChange }
                value = { this.state.cita.propietario }
                /> < /
                div > <
                    /div>

                <
                div className = "form-group row" >
                    <
                    label className = "col-sm-4 col-lg-2 col-form-label" >
                    Fecha <
                    /label> <
                div className = "col-sm-8 col-lg-4" >
                    <
                    input type = "date"
                className = "form-control"
                name = "date"
                onChange = { this.handleChange }
                value = { this.state.cita.date }
                /> < /
                div > <
                    label className = "col-sm-4 col-lg-2 col-form-label" >
                    Hora <
                    /label> <
                div className = "col-sm-8 col-lg-4" >
                    <
                    input type = "time"
                className = "form-control"
                name = "time"
                onChange = { this.handleChange }
                value = { this.state.cita.time }
                /> < /
                div > <
                    /div> <
                div className = "form-group row" >
                    <
                    label className = "col-sm-4 col-lg-2 col-form-label" >
                    Síntomas <
                    /label> <
                div className = "col-sm-8 col-lg-10" >
                    <
                    textarea className = "form-control"
                name = "sintomas"
                placeholder = "Describe los síntomas"
                onChange = { this.handleChange }
                value = { this.state.cita.sintomas } >
                    <
                    /textarea> < /
                div > <
                    /div> <
                input type = "submit"
                className = "py-3 mt-2 btn btn-success btn-block"
                value = "Agregar nueva cita" /
                    >
                    <
                    /form> < /
                div > <
                    /div>
            );
        }
    }

    export default NuevaCita;