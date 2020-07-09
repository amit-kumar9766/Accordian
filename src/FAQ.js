// import React,{Component} from 'react'

// class FAQ extends Component{
//     constructor(props){
//         super(props);
        
//             this.state={
//                 index:null ,
//               }
        
//     }
    
// transfer=(ind)=>{
//     this.setState({
//         index:ind,
//     })
//     this.props.toggle(ind);
// } 

// transferSub=(ind)=>{
//     this.setState({
//         index:ind,
//     })
//     this.props.toggleSub(ind);
// }  

// render(){
//    console.log(this.props.dataToFAQ);
    
   
//     return(
//         this.props.dataToFAQ.map((elm,ind)=>{
//             console.log(elm.ans2.b)
//         return(
//             <div  className={"faq " + (elm.open ? 'open' : '')}>

//             <div onClick={()=>this.transfer(ind)} className={"faq-question"}>{elm.question}</div>
            
//             <div  onClick={()=>this.transferSub(ind)} className={  "faq-answer1"}
//               >{elm.answer.ans1}</div> 

//             {elm.ans2.open && elm.open?
//               (elm.ans2.b.map((e,index)=>{

//                 return <div> {e} </div> 
//             })):""}
            
        
             
//             </div>
          
//         )}
//         )
        

//     );
// }
// }
// // function FAQ ({faq, index, toggle}) {
    
// // // console.log(props)
// // 	return (

// // 		<div
// //             className={"faq " + (faq.open ? 'open' : '')} //??
// // 			key={index}
// // 			onClick={() => toggle(index)}
// // 		>
// // 			<div className="faq-question">
// // 				{faq.question}
// // 			</div>
// // 			<div className="faq-answer">
// // 				{faq.answer}
// // 			</div>
// // 		</div>
// // 	)
// // }

// export default FAQ


