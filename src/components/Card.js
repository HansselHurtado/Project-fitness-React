import React from 'react'
import personImg from '../images/exercise.png'
import circleImg from '../images/circles.png'
import personImg2 from '../images/person.png'
import './styles/Card.css'

class Card extends React.Component {

    // constructor
    constructor(props){
        super(props)
        this.state = {
            image: personImg2
        }
    }

    // método para actulizar los datos del estado
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: personImg
            })
        }, 5000);
    }

    render(){
        // pasandole al array las props
        const {title, description, img, leftColor, rigthtColor} = this.props 
        return(
            <div className="card mx-auto Fitness-Card"
                style={{
                    background:` url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rigthtColor})`   
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Card