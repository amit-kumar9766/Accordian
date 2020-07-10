import React from 'react'


// const MyComponent  = (props) => {
class MyComponent extends  React.Component{

	constructor(props){
		super(props);
		
		this.state={
			is_expanded:true,
		}
	
}

toggle=()=>{
    this.setState({
        is_expanded:!this.state.is_expanded,
	})
    
  }


//  transfer=(data)=>{
//   this.props.toggleAcc(data)
 	
//  }

 

	
	render(){
		// console.log(this.props.collection)

		if(Array.isArray(this.props.collection)) {

			return( <ul>
				  {this.props.collection.map((data)=> {
					return <div>
						 <ul>
						   
						  <div onClick={()=>this.toggle()} >{data.title}</div>
						 

						  <div   className={(this.state.is_expanded? 'expanded' : 'not-Expanded')}>
						 
						 
						   <div ><MyComponent collection={data.children} /></div>
						
						   </div>
							
						 </ul>
					  </div>
				  })
				  }
			</ul>
			)
			
		}
		return  null;
	}
		
}

     
	 
	 

export default  MyComponent;