import Button from '@mui/material/Button';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { useMutation, gql } from '@apollo/client';

const DELETE_SESSION_QUERY = gql` 
    mutation deleteMemoSession($id: Int!) {
        deleteMemoSession(id: $id) {
            id
}}`;

const GameReset = ({ sessionId }) => {

    const [deleteMemoSession, { data, loading, error }] = useMutation(DELETE_SESSION_QUERY);

    const resetGameHandler = () => {

        if(sessionId) {
             deleteMemoSession({
                 variables: {
                     id: parseInt(sessionId)
                 }
             });
         }
     }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error displaying the Memo Tests :(</p>;


    return (
        <Button onClick={ resetGameHandler } variant="outlined"><ThreeSixtyIcon /></Button>
    )   
}

export default GameReset;