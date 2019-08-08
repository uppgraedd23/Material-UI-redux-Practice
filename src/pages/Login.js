import { withRouter } from "react-router-dom";
import React, {useState, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


const Price = ({history}) =>{
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const updForm = (item) => {
        setForm({...form, ...item})
    }

    const updErrors = (item) => {
        setErrors({...errors, ...item})
    }

    const formValidation = (form) => {
        let errorsObj = {}


        if(form.name !==  'test') {
            errorsObj.name = 'логин  не верен'
        }

        if(form.password !== 'nsdue7wk') {
            errorsObj.password = 'пароль не верен'
        }

        if (errorsObj.item || errorsObj.password){
            setErrors(errorsObj)
            return false
        } else {
            return true
        }
    }

    const onSubmit = (form) => {
        if (formValidation(form)) {
            localStorage.setItem('isLogin', 'login')
            history.push('/')
        }
    }

    return(<Fragment>
        <Box component="section" width={300} m={'auto'}>
            <TextField
                label="name"
                fullWidth={true}
                value={form.name}
                helperText={errors.name}
                error={errors.name}
                onChange={(e) => {updForm({name: e.target.value}); updErrors({name: ''})} }
                />
            <TextField
                label="password"
                fullWidth={true}
                value={form.password}
                helperText={errors.password}
                error={errors.password}
                onChange={(e) => {updForm({password: e.target.value}); updErrors({password: ''})} }
                />
                <Button variant="contained" color="primary" onClick={() => onSubmit(form)}>Submit</Button>
        </Box>
        </Fragment>
    )
}

export default withRouter(Price)
