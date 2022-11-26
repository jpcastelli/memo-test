import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const PERSIST_SESSION_QUERY = gql` 
    mutation createMemoSession($memo_test_id: Int!, $retries: Int, $number_of_pairs: Int){
        createMemoSession(memo_test_id: $memo_test_id, retries: $retries, number_of_pairs:$number_of_pairs) {
            id
}}`;

function MemosList({id, name, state}) {

    const newTo = { 
        pathname: "/game", 
        search: "gameId="+id
      };

    const [createMemoSession, { data, loading, error }] = useMutation(PERSIST_SESSION_QUERY);

    const sessionHandler = () => {

        createMemoSession({
            variables: {
                memo_test_id: parseInt(id),
                retries: 0,
                number_of_pairs: 0,
                state: 'Started'
            }
        });
    }

    return (
        <li className="memo-game">
            <span className='game-name'>{ name }</span>
            <span>
                <Button onClick={ sessionHandler } component={ Link } to={ newTo } variant="outlined">{ state }</Button>
            </span>
        </li>
    );
}

export default MemosList;