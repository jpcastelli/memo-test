// resources/js/App.jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MemoElement from './MemoElement';

const GET_MEMO_TESTS = gql`
  query {
    GetMemoTests {
     id
     name
    }
  }
`;

function DisplayMemos() {
    const { loading, error, data } = useQuery(GET_MEMO_TESTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error displaying the Memo Tests :(</p>;
 
    return data.GetMemoTests.map(({ id, name }) => 
            <MemoElement key={ id.toString() } name={ name } state="Not Started" />
    );
}

export default function App() {
    return (
        <div>
            <h1>Welcome to the Memo Tests!!</h1>
            <h2>Enjoy the experience</h2>
            <div id="memo-list">
                <DisplayMemos />
            </div>
        </div>
    )
}