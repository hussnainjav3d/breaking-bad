import React from 'react'

export const Card = ({items}) => {
    return (
        <div className="card">
            
            <div className="content">
                <ul>
                    <li><strong>Actor:</strong> {items.name}</li>
                    <li><strong>D.O.B:</strong> {items.birthday}</li>
                    <li><strong>Nickname:</strong> {items.nickname}</li>
              
                    <li><strong>Occupation:</strong> {items.occupation}</li>
                </ul>
            </div>
                
            <div className="card-front">
                <img src={items.img} alt={items}/>
            </div>
            
        </div>
    )
}
