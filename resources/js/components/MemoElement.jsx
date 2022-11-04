import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

class MemoElement extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = { status: 'Completed' }
        this.newTo = { 
            pathname: "/game", 
            search: "gameId="+props.id
          };
    }

    render() {
        return <div className="memo-element">
            <span>{ this.props.name }</span>
            <Button component={ Link } to={ this.newTo } variant="contained">{ this.state.status }</Button>
        </div>;
    }
}

export default MemoElement;