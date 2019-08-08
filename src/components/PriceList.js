import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux"


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));


export const PriceList = (props)=> {
    const classes = useStyles();
    const items = useSelector(state => state.items)

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Наименование</TableCell>
                        <TableCell align="right">Бренд</TableCell>
                        <TableCell align="right">Описание</TableCell>
                        <TableCell align="right">Цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.brand}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}





