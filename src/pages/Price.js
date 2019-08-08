import React, {useState, Fragment} from 'react';
import Header from '../components/header';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {PriceList} from "../components/PriceList";
import {AppButtons} from "../components/buttons";
import {connect} from "react-redux"
import {newItemCreator} from "../redux/priceReducer";


const Price = (props) => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)

    const updForm = (item) => {
        setForm({...form, ...item})
    }

    const updErrors = (item) => {
        setErrors({...errors, ...item})
    }

    const formValidation = (form) => {
        let errorsObj = {}

        if (!form.name) {
            errorsObj.name = 'Наименование  не может быть пустым'
        }

        if (!form.brand) {
            errorsObj.brand = 'Бренд  не может быть пустым'
        }

        if (!form.description) {
            errorsObj.description = 'Описание  не может быть пустым'
        }

        if (!form.price) {
            errorsObj.price = 'Цена  не может быть пустой'
        }

        if (errorsObj.item || errorsObj.brand || errorsObj.description || errorsObj.price) {
            setErrors(errorsObj)
            return false
        } else {
            return true
        }
    }

    const onAdd = (form) => {
        if (formValidation(form)) {
            props.newItemCreator(form)
            setForm({})
            setIsModalOpen(false)
        }
    }


    return (<Fragment>
            <Header/>
            <Box component="section" m={10}>
                <PriceList/>
                <AppButtons openModal={() => setIsModalOpen(true)}/>
            </Box>
            <Dialog title="Добавьте товар" open={isModalOpen}
                    onRequestClose={() => this.setState({isModalOpen: false})}>
                <DialogTitle id="alert-dialog-title">{"Добавление товара"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField
                            label="Наименование"
                            fullWidth={true}
                            value={form.name}
                            helperText={errors.name}
                            error={errors.name}
                            onChange={(e) => {
                                updForm({name: e.target.value});
                                updErrors({name: ''})
                            }}
                        />
                        <TextField
                            label="Бренд"
                            fullWidth={true}
                            value={form.brand}
                            helperText={errors.brand}
                            error={errors.brand}
                            onChange={(e) => {
                                updForm({brand: e.target.value});
                                updErrors({brand: ''})
                            }}
                        />
                        <TextField
                            label="Описание"
                            fullWidth={true}
                            value={form.description}
                            helperText={errors.description}
                            error={errors.description}
                            onChange={(e) => {
                                updForm({description: e.target.value});
                                updErrors({description: ''})
                            }}
                        />
                        <TextField
                            label="Цена"
                            fullWidth={true}
                            value={form.price}
                            helperText={errors.price}
                            error={errors.price}
                            onChange={(e) => {
                                updForm({price: e.target.value});
                                updErrors({price: ''})
                            }}
                        />
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => {
                        setIsModalOpen(false);
                        setForm({})
                    }} color="primary">
                        отмена
                    </Button>
                    <Button onClick={() => onAdd(form)} color="primary" autoFocus>
                        добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        newItemCreator: (form) => {
            dispatch(newItemCreator(form))
        }
    }
}


export default connect(null, mapDispatchToProps)(Price)
