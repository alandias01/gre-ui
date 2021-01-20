import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { WordCard } from './wordCard';
import api from '../services/api';

interface IShowWordsProps {
    ListName?: string;
}

interface IWord {
    word: string;
    definition: string;
    type: string;
}

export function ShowWords(props: IShowWordsProps) {
    const { ListName } = props;
    const numberOfWordsToShow: number = 6;
    const [paginationCount, setPaginationCount] = useState<number>(0);
    const [paginationPage, setPaginationPage] = useState<number>();
    const [words, setWords] = useState<IWord[]>([]);
    const [wordsToShow, setWordsToShow] = useState<IWord[]>([]);

    useEffect(() => {
        api.getAllWords.then(response => response.clone().json()).then((data: IWord[]) => {
            setWords(data);
            setPaginationCount(Math.floor(data.length / numberOfWordsToShow) + 1);
            displayWords(1);
        });
    }, [paginationCount]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => displayWords(page);

    function displayWords(page: number) {
        const startIndex = (page - 1) * numberOfWordsToShow;
        const endIndex = startIndex + numberOfWordsToShow;
        const data = words.slice(startIndex, endIndex);
        setWordsToShow(data);
    }

    return (
        <div>
            <Grid container spacing={2} >
                {wordsToShow.map((x, index) => (
                    <Grid item xs={12} sm={'auto'} key={index}>
                        <WordCard word={x.word} definition={x.definition} />
                    </Grid>
                ))}
            </Grid>
            <Pagination showFirstButton showLastButton count={paginationCount} page={paginationPage} siblingCount={3} size="small" onChange={handlePageChange} />
        </div>
    );
}