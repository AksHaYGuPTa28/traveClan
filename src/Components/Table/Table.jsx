import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  FirstName,
  LastName,
  Avatar,
  Email,
  Phone,
  PremiumMember,
  MaximumBid,
  MinimumBid,
  Actions
) {
  return {
    FirstName,
    LastName,
    Avatar,
    Email,
    Phone,
    PremiumMember,
    MaximumBid,
    MinimumBid,
    Actions,
  };
}

const rows = [];

export default function BasicTable(props) {
  props.data.map((ad) => {
    let maxBid = ad.bids[0]?.amount;
    ad.bids.forEach(function (elem) {
      if (maxBid < elem?.amount) maxBid = elem?.amount;
    });
    let minBid = ad.bids[0]?.amount;
    ad.bids.forEach(function (elem) {
      if (minBid > elem?.amount) minBid = elem?.amount;
    });

    const rowData = {
      id: ad.id,
      FirstName: ad.firstname,
      LastName: ad.lastname,
      Avatar: ad.avatarUrl,
      Email: ad.email,
      Phone: ad.phone,
      PremiumMember: ad.hasPremium ? "True" : "False",
      maxBid: maxBid ? maxBid : "Not Available",
      minBid: minBid ? minBid : "Not Available",
    };
    rows.push(rowData);
  });
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <h1>Customers list</h1>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Premium Member</TableCell>
              <TableCell align="right">Maximum Bid</TableCell>
              <TableCell align="right">Minimum Bid</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <TableCell align="right">
                    {row.FirstName}
                    {row.LastName}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableCell>
                <TableCell align="right">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={row.Avatar}
                    alt="Avatar"
                  />
                </TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.PremiumMember}</TableCell>
                <TableCell align="right">{row.maxBid}</TableCell>
                <TableCell align="right">{row.minBid}</TableCell>
                <TableCell align="right">
                  <Link to={`/bid?id=${row.id}`}>
                    <Button variant="contained" color="primary">
                      See Bids
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
