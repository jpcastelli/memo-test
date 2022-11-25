import React, { useReducer }  from 'react';

const MemoCard = ({ flipped, onClickHandler, image }) => {

    return (
        <li >{ 
                ( ! flipped ) ? 
                <div onClick={ onClickHandler } className='flippedCard'></div> : 
                <img src={ image } />
            } 
        </li>
    )
};

  export default MemoCard;