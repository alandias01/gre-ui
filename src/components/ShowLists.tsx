import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from 'react-router-dom';
import { Grid, Hidden, makeStyles, IconButton } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { WordCard, IWordCardProps } from "./wordCard";
import api from "../services/api";

type IUserList = { _id: string, count: number };

const useStylesShowLists = makeStyles({

});

export function ShowLists() {
  const classes = useStylesShowLists();
  const numberOfItemsToShow: number = 6;
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [paginationPage, setPaginationPage] = useState<number>();
  const [userLists, setUserLists] = useState<IUserList[]>([]);
  const [userListsToShow, setUserListsToShow] = useState<IUserList[]>([]);
  const [error, setError] = useState(false);
  const [listToGoto, setListToGoto] = useState<string | undefined>(undefined);

  useEffect(() => {

    api.getUserListCount().then((data) => {

      console.log(data);
      setError(false);
      setUserLists(data);
      setPaginationCount(Math.floor(data.length / numberOfItemsToShow) + 1);
      const startIndex = (1 - 1) * numberOfItemsToShow;
      const endIndex = startIndex + numberOfItemsToShow;
      const data1 = data.slice(startIndex, endIndex);
      setUserListsToShow(data1);

    }).catch((err) => {
      console.log(err);
      setError(true);
    });

  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => displayLists(page);

  const displayLists = (page: number) => {
    const startIndex = (page - 1) * numberOfItemsToShow;
    const endIndex = startIndex + numberOfItemsToShow;
    const data = userLists.slice(startIndex, endIndex);
    setUserListsToShow(data);
  };

  if (listToGoto)
    return <Redirect to={'/showwords?listname=' + listToGoto} />

  const handleWordCardClick = (p: IWordCardProps) => setListToGoto(p.word);

  return (
    <div>
      <Grid container spacing={2}>
        {error && 'You need to log in'}
        {userListsToShow.map((x, index) => (
          <Grid item xs={12} sm={"auto"} key={index}>
            <WordCard word={x._id} definition={x.count.toString()} clickContent={handleWordCardClick} />
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
