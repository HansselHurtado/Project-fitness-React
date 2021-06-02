import React from 'react'

class ExerciseNew extends React.Component {
    
    state = {}//inicializamos el estado en vacio
    
    handleSubmit = e => {
        e.preventDefault()//desactivamos para que la pagina no se recargue al momento de hacer el submit
        console.log(this.state);
    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`) //obtener el nombre y el valor
        this.setState({ //le pasamos el valor y el nombre al estado
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={this.handleChange}
                            value={this.state.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={this.handleChange}
                            value={this.state.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }
}

export default ExerciseNew