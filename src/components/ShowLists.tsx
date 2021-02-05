import React, { useState, useEffect } from "react";
import { Grid, Hidden, makeStyles, IconButton } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { WordCard } from "./wordCard";
import api from "../services/api";
import { getConfigFileParsingDiagnostics } from "typescript";

interface IShowListsProps {
  Email?: string;
}

interface IUserList {
  email: string;
  list: string;
  word: string;
  definition: string;
  type: string;
}

const useStylesShowLists = makeStyles({
  largeIcon: {
    width: 350,
    height: 150,
  },
});

export function ShowLists(props: IShowListsProps) {
  const classes = useStylesShowLists();
  const { Email } = props;
  const numberOfItemsToShow: number = 6;
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [paginationPage, setPaginationPage] = useState<number>();
  const [userLists, setUserLists] = useState<IUserList[]>([]);
  const [userListsToShow, setUserListsToShow] = useState<IUserList[]>([]);

  useEffect(() => {
    if (Email) {
      api.getuserlists(Email).then((data) => {
        setWords(data);
        setPaginationCount(Math.floor(data.length / numberOfItemsToShow) + 1);
        displayWords(1);
      }).catch((err) => console.log(err));
    }
    else {
      api.getWords
        .then((data: IWord[]) => {
          setWords(data);
          setPaginationCount(Math.floor(data.length / numberOfItemsToShow) + 1);
          displayWords(1);
        });
    }
  }, [paginationCount]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    displayWords(page);

  const displayLists = (page: number) => {
    const startIndex = (page - 1) * numberOfItemsToShow;
    const endIndex = startIndex + numberOfItemsToShow;
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
