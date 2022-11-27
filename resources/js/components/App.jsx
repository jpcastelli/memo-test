// resources/js/App.jsx
import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import MemosList from './MemosList';
import CircularProgress from '@mui/material/CircularProgress';

export default function App() {

    const GET_MEMO_TESTS = gql`
    query {
      GetMemoTests {
       id
       name
       sessions {
                id
                state
                memo {
                    name
                }
            }
      }
    }
  `;
  
  function DisplayMemos() {

      const { loading, error, data } = useQuery(GET_MEMO_TESTS);

      if (loading) return <CircularProgress />;
      if (error) return <p>Error displaying the Memo Tests :(</p>;

      return data.GetMemoTests.map(({ id, name, sessions }) => 
        <MemosList key={id} id={ id } name={ name } sessionId={ sessions[0]?.id } state={ sessions[0]?.state } />
      );
  }
    
  return (
        <>
        <div className='container'>
            <div className='hero-container'>
                <h1>Welcome to the Memo Tests</h1>
                <h2>Enjoy the experience</h2>
            </div>
            <div className="memoList">
                <ul>
                    <DisplayMemos />
                </ul>
            </div>
        </div>
        </>
  )
}