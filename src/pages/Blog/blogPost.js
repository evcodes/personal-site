import React from 'react'

export default function BlogPost(props) {
    return (
        <div>
            Title : {props.title}
            Author: {props.author}
            Category: {props.category}
            
            Body: {props.body}

        </div>
    )
}
