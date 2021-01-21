import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
    fontSize: '110%'
  },
});

export default function FilteredTable(props) {
  const classes = useStyles();
  const rows = props.rows;
  const columnNames = props.columnNames || ["Location", "Type", "Date"];
  const tableName = props.tableName;
  const Linkable = props.Linkable;
  return (
    <TableContainer>
      <Typography className={classes.title} align="left" variant="h6" id="tableTitle" component="div">
        {tableName}
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnNames.map((name, index) => (
              <TableCell  key={index} className={classes.cells} align="center">{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({id, cells}, index) => (
            <TableRow key={index}> 
            {cells.map((cell, index) => (
            <TableCell align="center" key={index} className={classes.cells}>
              {Linkable ? 
              <Link style={{color: '#FBF6F3'}} to={`/notifications/${id}`}>{cell}</Link>
              : <Typography style={{color: 'white'}}>{cell}</Typography>}
            </TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}