import React from 'react'
import Card from './Card'

const ExercisesList = props => {
    return(
        <div>
            { props.exercises.map((exercise) => {
                return(
                    <Card
                        // pasandole props al componente card
                        title =  {exercise.title}
                        description = {exercise.description}
                        img = {exercise.img}
                        leftColor = {exercise.leftColor}
                        rigthtColor = {exercise.rightColor}
                    />
                )
            })}
        </div>        
    )
}

export default ExercisesList