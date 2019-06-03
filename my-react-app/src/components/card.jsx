import React from 'react';

function Card(props) {
    return (
        <div className={`col-md-${props.size} text-center shawdow-sm my-4 p-2`}>
            {props.children}
        </div>
    );
}
export default Card;