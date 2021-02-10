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
      api.getUserListsDistinct(Email, "list").then((data) => {
        let d1 = data.clone().json();
        console.log(d1);
        //setUserLists(data);

        //setPaginationCount(Math.floor(data.length / numberOfItemsToShow) + 1);
        //displayLists(1);
      }).catch((err) => console.log(err));
    }
    else {

    }
  }, [Email]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    displayLists(page);

  const displayLists = (page: number) => {
    const startIndex = (page - 1) * numberOfItemsToShow;
    const endIndex = startIndex + numberOfItemsToShow;
    const data = userLists.slice(startIndex, endIndex);
    setUserListsToShow(data);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {userListsToShow.map((x, index) => (
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
