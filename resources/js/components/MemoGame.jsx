import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from "react-router-dom";
import MemoCard from "./MemoCard";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import SvgIcon from '@mui/material/SvgIcon';

const GET_IMAGES_QUERY = gql` 
    query GetMemoTestById($id: Int!) {
        GetMemoTestById(id: $id) {
        id
        name
        images
        }
    }`;

const homePage = { 
    pathname: "/"
  };

const MemoGame = () => {

    const search = useLocation().search;
    const gameId = (new URLSearchParams(search).get('gameId'));

    // useState hooks for managing game logic.
    const [MemoStatus, SetMemoStatus] = useState();
    const [FlippedCard, setFlippedCard] = useState();
    const [TotalFlippedCards, SetTotalFlippedCards] = useState(0);
    const [numberOfPairs, SetNumberOfPairs] = useState(0);
    const [numberOfRetries, SetNumberOfRetries] = useState(0);
    const [numberOfCards, SetNumberOfCards] = useState(0);
    const [wonState, SetWonState] = useState(false);

    const { loading, error, data } = 
        useQuery(GET_IMAGES_QUERY,
            {
            variables: {
                id: parseInt(gameId)
            }
            }
        );

    useEffect(() => {

        if (data) {
            SetMemoStatus(data.GetMemoTestById.images.reduce(
                (acummulator, currentImage, currentIndex) => (
                    [...acummulator,
                    { id: uuid(), imageId: currentIndex, flipped: false, match: false, image: currentImage },
                    { id: uuid(), imageId: currentIndex, flipped: false, match: false, image: currentImage }]
                ), []
            ).sort(() => .5 - Math.random()));

            SetNumberOfCards(data.GetMemoTestById.images.length);
        }

        
    },[data]);

    // Reset "flipped" attr for not matching cards.
    function resetFlippedCards() {

        setTimeout(() => {
            SetMemoStatus((MemoStatus) => {
                
                const statusCopy = MemoStatus.map((item) => ({ ...item }));
                const flipped = statusCopy.filter(item => item.flipped === true);

                flipped.forEach(function(item) { 
                    if(! item.match) 
                        item.flipped = false;
                });
                
                return statusCopy;
            });
        } , 500);
        
        SetNumberOfRetries((retries) => retries+1);
        SetTotalFlippedCards(0);
    }

    // Add attr "match" to matched card pairs.
    function labelMatchedCards(imageId) {

        SetMemoStatus((MemoStatus) => {
            const statusCopy = MemoStatus.map((item) => ({ ...item }));
            const itemPair = statusCopy.filter(res => res.imageId === imageId);

            itemPair.forEach(item => item.match = true);

            return statusCopy;
        });

        SetNumberOfPairs((pairs) => pairs + 1);
        SetTotalFlippedCards(0);
    }

    function flipClickedCard(imageId) {

        SetMemoStatus((status) => {
            const statusCopy = status.map((item) => ({ ...item }));
            const item = statusCopy.find((item) => item.id === imageId);
            item.flipped = true;

            return statusCopy;
        });

        setFlippedCard(imageId);
    }

    useEffect(() => {
        if(numberOfPairs > 0) {
            if(numberOfPairs === numberOfCards) {
                SetWonState(true);
            }
        }
    }, [numberOfPairs]);

    useEffect(() => {

        if (MemoStatus && TotalFlippedCards === 2) {

            const selectedItem = MemoStatus.find((item) => (item.id === FlippedCard));
            const itemPair = MemoStatus.filter(res => res.imageId === selectedItem.imageId);

            // If flipped cards match, label it as matched.
            if (itemPair[0].flipped === true && itemPair[1].flipped === true) {
                labelMatchedCards(selectedItem.imageId);
            } else {
                resetFlippedCards();
            }
        }
    }, [TotalFlippedCards]);

    const onClickHandler = (imageId) => {
        
        flipClickedCard(imageId);
        SetTotalFlippedCards((TotalFlippedCards) => 
        (TotalFlippedCards < 2) ? (TotalFlippedCards + 1) : 0);
    }

    const EndGame = () => {
        return (
        <>
            <div className='hero-container'>
                <h1>Congratulations!!!</h1>
            </div>
            <div className='results-container'>
                <span className='finalResults'>Final Score: {( parseFloat(numberOfPairs / numberOfRetries) * 100).toFixed(2) } </span>
                <span className='finalResults'>Matches: { numberOfPairs } / Retries: { numberOfRetries }</span>
            </div>
            <span className='back-home'>
                <Button component={Link} to={ homePage } variant="contained">Return Home</Button>
                </span>
        </>
        )
    }

    if (loading || ! MemoStatus) return <p>Loading...</p>;
    if (error) return <p>Error displaying the Memo Tests :(</p>;

    return (
        <>
        <div className='container'>
        {(! wonState) ? 
        
            <ul className='memoCards'>
                {MemoStatus.map((ms) => <MemoCard flipped={ms.flipped}
                    onClickHandler={() => onClickHandler(ms.id)}
                    key={ms.id}
                    image={ms.image}>
                </MemoCard>
                )}
            </ul>
        : <EndGame />
        }
        </div>
        </>
    ); 
}

export default MemoGame;