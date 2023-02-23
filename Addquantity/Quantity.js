import React from "react";
class Quantity extends React.Component{
   state={
    q:1,
    data:135
   }

    change = () => {  
        this.setState({data:135*this.state.q}); 
    }
    
    add=()=>{
        this.setState({q:this.state.q+1});
    }
    sub=()=>{
       if(this.state.q>1) 
            this.setState({q:this.state.q-1});
        else
            this.setState({q:1});
    }
    render(){
        return(
            <>
                <div class="quantity">
                    <button class="plumi" onClick={this.sub}> - </button> <span id="quan">Quantity: {this.state.q}</span> <button class="plumi" onClick={this.add}> + </button>
                    <button  id="priv" onClick={this.change} type="button">Generate Price</button>
                </div>
                <div class="price">
                    <h4>Total : ${this.state.data}</h4> 
                </div>
            </>
        );
    }
 }
export default Quantity;