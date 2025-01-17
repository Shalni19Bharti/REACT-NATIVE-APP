import React,{Component, use} from 'react';
import { ProductConsumer } from '../Context';
import {Table , Button} from 'react-bootstrap';

export default class Home extends Component{
    render(){
        return(
            <div className='container'>
            <h2>CURD FUNCTION</h2>
            <ProductConsumer>
                {(value) => {
                    return(
                        <Table size='sm' variant='dark' striped bordered hover>
                            <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th>Tasks</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td><input type="text" value={value.name} onChange={(e) => {value.updateValue(e,"name")}}/></td>
                                <td><input type="text" value={value.username} onChange={(e) => {value.updateValue(e,"username")}}/></td>
                                <td><input type="text" value={value.email} onChange={(e) => {value.updateValue(e,"email")}}/></td>
                                <td><input type="text" value={value.task} onChange={(e) => {value.updateValue(e,"task")}}/></td>
                                <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id ? "Save" : "Add new Row" }</Button></td>

                            </tr>
                            {value.Alldata.map(product => {
                                return(
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.username}</td>
                                        <td>{product.email}</td>
                                        <td>{product.task}</td>
                                        <td>
                                        <Button size='sm' variant="primary" onClick={()=>{value.onEdit(product.id)}}>Edit</Button>  |   <Button size='sm' variant="danger" onClick={()=>{value.onDelete(product.id)}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    )
                }}
            </ProductConsumer>
            </div>
        )
    }
}