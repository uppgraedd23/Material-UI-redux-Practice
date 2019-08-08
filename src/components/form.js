import React from 'react'
import TextField from 'material-ui/TextField';
import {FlatButton} from "material-ui";

export class Appform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item:'',
            brand:'',
            description:'',
            price:'',
            errors:{
                item:'',
                brand:'',
                description:'',
                price:''
            }
        }
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Наименование"
                    floatingLabelText="Введите наименование"
                    fullWidth={true}
                    errorText={this.state.errors.item}
                    onChange={(event, item)=>this.setState({item}) }
                />
                <TextField
                    hintText="Бренд"
                    floatingLabelText="Введите бренд"
                    fullWidth={true}
                    errorText={this.state.errors.brand}
                    onChange={(event, brand)=>this.setState({brand}) }

                />
                <TextField
                    hintText="Описание"
                    floatingLabelText="Введите описание"
                    fullWidth={true}
                    errorText={this.state.errors.description}
                    onChange={(event, description)=>this.setState({description}) }
                />
                <TextField
                    hintText="Цена"
                    floatingLabelText="Введите цену"
                    fullWidth={true}
                    errorText={this.state.errors.price}
                    onChange={(event, price)=>this.setState({price}) }

                />
                <FlatButton label="add" secondary={true}
                            onClick={this.onAdd.bind(this)}
                />
            </div>



        )
    }
onAdd(){
    let errors={}
    if(!this.state.item) errors.item = 'Наименование  не может быть пустым'
    if(!this.state.brand) errors.brand = 'Бренд  не может быть пустым'
    if(!this.state.description) errors.description = 'Описание  не может быть пустым'
    if(!this.state.price) errors.price = 'Цена  не может быть пустой'

    if (errors.item||errors.brand||errors.description||errors.price){
        this.setState({errors})
        return
    }
 this.props.onAdd({
     item:this.state.item,
     brand:this.state.brand,
     description:this.state.description,
     price:this.state.price
 })
    this.setState({
        item:'',
        brand:'',
        description:'',
        price:'',
        errors:{
            item:'',
            brand:'',
            description:'',
            price:''
        }
    })
}
}
