import React from 'react'


// const MyComponent  = (props) => {
class MyComponent extends  React.Component{

	constructor(props){
		super(props);
		
		this.state={
			full:this.props,
		}
	
}



 transfer=(data)=>{
  this.props.toggleAcc(data)
 	
 }

 

	
	render(){
		console.log(this.props.collection)

		if(Array.isArray(this.props.collection)) {
			

			return( <ul>
				  {this.props.collection.map((data)=> {
					return <div>
						 <ul>
						   
						  <div onClick={()=>this.transfer(data)} >{data.title}</div>

						  <div   className={(data.is_expanded? 'expanded' : 'not-Expanded')}>
						 
						   {/* {!data.is_expanded? */}
						  

						   <div ><MyComponent collection={data.children}/></div>

						   <div   className={(data.children!=undefined && data.children.is_expanded? 'expanded' : '')}>
						   </div> 
						   {/* :""}  */}

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