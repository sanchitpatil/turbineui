import React from 'react'

class ItemGetApi extends React.Component{

    constructor(){
        super();
        this.state = {
            users:null
        }
    }

    componentDidMount(){
        fetch('https://api.allorigins.win/raw?url=http://turbineapp-env.eba-vvxyi2a2.us-east-2.elasticbeanstalk.com/api/items').then((res)=>{
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