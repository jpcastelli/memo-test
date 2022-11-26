import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

class MemosList extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = { status: 'Start' }
        this.newTo = { 
            pathname: "/game", 
            search: "gameId="+props.id
          };
    }

    render() {
        return (
        <li className="memo-game">
            <span className='game-name'>{ this.props.name }</span>
            <span>
                <Button component={ Link } to={ this.newTo } variant="outlined">{ this.state.status }</Button>
            </span>
        </li>);
    }
}

export default MemosList;