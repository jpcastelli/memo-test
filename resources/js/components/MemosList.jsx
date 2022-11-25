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
        <li className="memo-element">
            <span>{ this.props.name }</span>
            <Button component={ Link } to={ this.newTo } variant="contained">{ this.state.status }</Button>
        </li>);
    }
}

export default MemosList;