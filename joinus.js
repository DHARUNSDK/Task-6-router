import React from 'react';
class Dkapp2 extends React.Component{
  constructor(){
 super();    
 this.state={username:"",age:null,errmsg:""}
 
}

uservalue=(event)=>
{
   let n=event.target.name;
   let v=event.target.value;
   let err="";
   if(n=="age")
   {
    if(v!="" && !Number(v))
    {
        // err=<h2>Invalid! Must be a number</h2>
        event.preventDefault();
        alert("Invalid! Must be a number");
    }
   }
  



this.setState({errmsg:err});
this.setState({[n]:v});
}

formsubmit=(event)=>
{
    event.preventDefault();
    alert("your name"+this.state.username);
}

render()
{
    return(
     <form>
      
       

        contact number:<input type="text" name='age' onChange={this.uservalue}/>
        
       <br/>
        {/* fees:<input type="text" name='fees' onChange={this.uservalue}/> */}
        {this.state.errmsg}
        <br/>
        <button onClick={this.formsubmit}>submit</button>
     </form>
    );
}
}
export default Dkapp2;



 