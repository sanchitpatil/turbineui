import React from 'react'

class ItemGetApi extends React.Component{

    constructor(){
        super();
        this.state = {
            users:null
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/items').then((res)=>{
            res.json().then((result)=>{
                console.warn(result);
                this.setState({items:result})
            })
        })
    }    

    render(){
        return(
            <div>
                <ul class="list-group">
                        {
                            this.state.items ?
                                
                                    this.state.items.map((item,i)=>
                                            <li className="list-group-item">{item}</li>
                                    )
                            :
                            null
                        }
                </ul>
            </div>
        )  
    }
}

export default ItemGetApi;