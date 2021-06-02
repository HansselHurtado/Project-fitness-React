import React from 'react'
import Card from './Card'

const ExercisesList = ({exercises}) => {
    return(
        <div>
            {exercises.map((exercise) => {
                return(
                    <Card
                        // pasandole props al componente card
                        key = {exercise.id}
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