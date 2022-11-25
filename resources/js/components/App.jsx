// resources/js/App.jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MemosList from './MemosList';

export default function App() {

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
        <MemosList key={id} id={ id } name={ name } state="Start" />
      );
  }
    
  return (
      
        <>
        <div className='container'>
            <h1>Welcome to the Memo Tests</h1>
            <h2>Enjoy the experience</h2>
    
            <div className="memoList">
                <ul>
                    <DisplayMemos />
                </ul>
            </div>
        </div>
        </>
      
  )
}