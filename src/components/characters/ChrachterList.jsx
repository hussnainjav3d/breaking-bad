import React from 'react'
import {Spinner} from '../ui/Spinner'
import {Card} from './Card' ;
export const ChrachterList = ({chracters,isLoading}) => {

    return isLoading ? (<Spinner className="container"/>) : (
        <section className="cards container">
            {chracters.map(item=> <Card key={item.char_id} items={item}/>)
            }
        </section>
    )
}
