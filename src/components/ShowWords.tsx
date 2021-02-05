import React, { useState, useEffect } from "react";
import { Grid, Hidden, makeStyles, IconButton } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { WordCard } from "./wordCard";
import api from "../services/api";

interface IWord {
  word: string;
  definition: string;
  type: string;
}

const useStylesShowWords = makeStyles({
  largeIcon: {
    width: 350,
    height: 150,
  },
});

export function ShowWords({ listName }: { listName?: string }) {
  const classes = useStylesShowWords();

  const numberOfWordsToShow: number = 6;
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [paginationPage, setPaginationPage] = useState<number>();
  const [words, setWords] = useState<IWord[]>([]);
  const [wordsToShow, setWordsToShow] = useState<IWord[]>([]);

  useEffect(() => {

    if (listName) {
      api.getuserlists(listName).then((data) => {
        setWords(data);
        setPaginationCount(Math.floor(data.length / numberOfWordsToShow) + 1);
        displayWords(1);
      }).catch((err) => console.log(err));
    }
    else {
      api.getWords
        .then((data: IWord[]) => {
          setWords(data);
          setPaginationCount(Math.floor(data.length / numberOfWordsToShow) + 1);
          displayWords(1);
        });
    }
  }, [paginationCount]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    displayWords(page);

  const displayWords = (page: number) => {
    const startIndex = (page - 1) * numberOfWordsToShow;
    const endIndex = startIndex + numberOfWordsToShow;
    const data = words.slice(startIndex, endIndex);
    setWordsToShow(data);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {wordsToShow.map((x, index) => (
          <Grid item xs={12} sm={"auto"} key={index}>
            <WordCard word={x.word} definition={x.definition} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        showFirstButton
        showLastButton
        count={paginationCount}
        page={paginationPage}
        siblingCount={3}
        size="small"
        onChange={handlePageChange}
      />
    </div>
  );
}
