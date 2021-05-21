import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(cardtitle, amount, created) {
  return { cardtitle, amount, created };
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function BasicTable(props) {
  const classes = useStyles();
  const query = useQuery();
  const id = query.get("id");
  console.log(id);
  console.log(props);

  const customer = props.data.filter((ad) => {
    if (ad.id === id) return ad;
  });
  console.log(customer);
  const bids = customer[0]?.bids;
  console.log(bids);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Bids can be seen here!!</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Car Title</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="right">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bids?.map((bids) => (
              <TableRow key={bids.name}>
                <TableCell component="th" scope="row">
                  {bids.carTitle}
                </TableCell>
                <TableCell component="th" scope="row">
                  {bids.amount}
                </TableCell>
                <TableCell align="right">{bids.created}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
