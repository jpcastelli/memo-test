import Button from '@mui/material/Button';
import React from 'react';

class MemoElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status: 'Completed'}
    }

    render() {
        return <div className="memo-element">
            <span>{ this.props.name }</span>
            <Button variant="contained">{ this.state.status }</Button>
        </div>;
    }
}

export default MemoElement;