import React from 'react'
import personImg from '../images/exercise.png'
import circleImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {
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