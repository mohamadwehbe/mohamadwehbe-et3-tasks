import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddForm from './AddForm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
   const [rows,setRows] = React.useState([]);
   const [row,setRow] = React.useState({});
   const [add,setAdd] = React.useState(false);
   const addRow = ()=>{
    setAdd(true);
   };
//   const edit = ()=>{};
//   const remove = ()=>{};
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
        <Button
            startIcon={<AddIcon style={{fontSize:30}} />}
            onClick={addRow}
            style = {{
                color:'black',
                fontWeight:'bold',
                fontSize:20}
                }>
        Add Row</Button>
        {add? <AddForm rows={rows} setRows={setRows} row={row} setRow={setRow} setAdd={setAdd}/>
          : <div/>
        }
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell >Date</StyledTableCell>
                <StyledTableCell align="center">SE</StyledTableCell>
                <StyledTableCell align="center">#</StyledTableCell>
                <StyledTableCell align="center" width='180'>Platform</StyledTableCell>
                <StyledTableCell align="center" width='180'>Realease Version</StyledTableCell>
                <StyledTableCell align="center">Comments</StyledTableCell>
                <StyledTableCell align="center">PR Link</StyledTableCell>
                <StyledTableCell align="center">Size</StyledTableCell>
                <StyledTableCell align="center">Dificulty</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Review by BY</StyledTableCell>
                <StyledTableCell align="center">Review by AH</StyledTableCell>
                <StyledTableCell align="center">Review by HT</StyledTableCell>
                <StyledTableCell align="center">Options</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.se}>
                <StyledTableCell component="th" scope="row">
                    {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">{row.se}</StyledTableCell>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.platform}</StyledTableCell>
                <StyledTableCell align="center">{row.version}</StyledTableCell>
                <StyledTableCell align="center">{row.comments}</StyledTableCell>
                <StyledTableCell align="center">{row.prlink}</StyledTableCell>
                <StyledTableCell align="center">{row.size}</StyledTableCell>
                <StyledTableCell align="center">{row.dificulty}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.reviewByBY}</StyledTableCell>
                <StyledTableCell align="center">{row.reviewByAH}</StyledTableCell>
                <StyledTableCell align="center">{row.reviewByHT}</StyledTableCell>
                <StyledTableCell align="center"
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingTop:30
                    }}>
                    <Button startIcon={<EditIcon />}/>
                    <Button startIcon={<HighlightOffIcon />} style={{color:'red'}}/>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
