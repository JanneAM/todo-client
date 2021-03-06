import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createItem } from '../../actions/items';

const Form = () => {
    const [itemData, setItemData] = useState({ title:'',message:'' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(createItem(itemData));
      console.log(itemData);
      clear();
    }

    const clear = () => {
      setItemData({title:'', message:''});
      console.log(itemData);
    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Add a Task</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={itemData.title} onChange={(e)=> setItemData({ ...itemData, title: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={itemData.message} onChange={(e)=> setItemData({ ...itemData, message: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
            <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
    );
};

export default Form;