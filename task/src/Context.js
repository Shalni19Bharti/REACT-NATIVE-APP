import React,{Component, use} from 'react';
import {userData} from './userData';

const ProductContext = React.createContext();

class ProductProvider extends Component{

    state = {
        Alldata : userData,
        id:'',
        name:'',
        username:'',
        email:'',
        task:'',
    }
        
    getRecord = (id) => {
        const product = this.state.Alldata.find(item => item.id === id);
        return product;
    }
    onEdit = (id) => {
        const tempProduct = this.state.Alldata;
        const index = tempProduct.indexOf(this.getRecord(id));
        const selectedRecord = tempProduct[index];
        this.setState({
            id:selectedRecord['id'],
            name:selectedRecord['name'],
            username:selectedRecord['username'],
            email:selectedRecord['email'],
            task:selectedRecord['task']
        }
        ) 
    }

    updateValue = ( e , test) => {
        if(test === "name"){
            this.state.name = e.target.value;
        }
        if(test === "username"){
            this.state.username = e.target.value;
        }
        if(test === "email"){
            this.state.email = e.target.value;
        }
        if(test === "task"){
            this.state.task = e.target.value;
        }
        const tempArray = [this.state.id , this.state.name , this.state.username , this.state.email , this.state.task];
        this.setState({
            updateEdit : tempArray 
        })
    }
    onSave = (id) => {
        if(id !== ''){
            const SavedRecord = this.state.Alldata;
            const index = SavedRecord.indexOf(this.getRecord(id));
            const Record = SavedRecord[index];
            Record['name'] = this.state.updateEdit[1];
            Record['username'] = this.state.updateEdit[2];
            Record['email'] = this.state.updateEdit[3];
            Record['task'] = this.state.updateEdit[4];

            this.setState({
                Alldata : [...this.state.Alldata],
                id : "" , name : "" , username : "" , email : "" , task : ""
            })
        } else {
            const MaxId = Math.max(...this.state.Alldata.map(item => item.id));
            const id = MaxId+1;
            const newArray = [] ;
            newArray['name'] = this.state.updateEdit[1];
            newArray['username'] = this.state.updateEdit[2];
            newArray['email'] = this.state.updateEdit[3];
            newArray['task'] = this.state.updateEdit[4];

            this.setState({
                Alldata : [...this.state.Alldata , newArray],
                id : "" , name : "" , username : "" , email : "" , task : ""
            })
        }
    }

    // DELETE FUNCTION 

    onDelete = (id) => {
        const tempProduct = this.state.Alldata.filter(item=>item.id !== id);
        this.setState({
            Alldata : tempProduct
        })
    }
    render(){
        return(
            <div>
              <ProductContext.Provider value={{...this.state ,
               onEdit : this.onEdit ,
               updateValue : this.updateValue,
               onSave : this.onSave ,
               onDelete : this.onDelete
              }}>
              {this.props.children}
              </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer =ProductContext.Consumer;
export {ProductProvider , ProductConsumer}