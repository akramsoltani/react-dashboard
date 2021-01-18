import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  title: {
    backgroundColor: '#061218',
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
    paddingLeft: '3%',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginBottom: '0.5%'
  },
  table: {
    alignItems: 'center',
    backgroundColor: '#061218',
    minWidth: 300,
  },
  cells: {
    color: 'white',
  },
});

function createData(location, type, date) {
  return { location, type, date };
}

const rows = [
  createData('Route', 'PCI51', 'Yesterday'),
  createData('Highway', '50M subs', '3 days ago'),
  createData('Mainstreet', 'UCI80%', '5 days ago'),
]

export default function FilteredTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Typography className={classes.title} align="left" variant="h6" id="tableTitle" component="div">
        Notifications List
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cells}>Location</TableCell>
            <TableCell className={classes.cells} align="center">Type</TableCell>
            <TableCell className={classes.cells} align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.cells} component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell className={classes.cells} align="center">{row.type}</TableCell>
              <TableCell className={classes.cells} align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
