
import React,{Component} from 'react';
import MyComponent from "./MyComponent.js";

var Data = [
  {
    title:"Local Disk C:",
    children: [
      {
        title: "Program Files",
        children: [
          
            {
                title:"File 1"
             },
            {
              title: "File 2",
             },
            {
              title: "File 3",
              
            }    
        ]
      },
      {
        title: "Users",
        children: [
          {
            title: "Nishant",
          },
          {
            title: "Siddharth",
            
          }
        ]
      },
      {
        title: "Windows",
        children: [
          {
            title: "Boot",
          },
          {
            title: "File Manager",
          },
        ]
      },

    ]
  }]
  




class App extends React.Component {
  
  state={
    full:[
      {
        title: "Top level 1",
        slug: "top-level-1",
        is_directory:false,
        is_expanded:false,
        children: [
          {
            title: "Sub level 1",
            slug: "sub-level-1",
            is_directory:false,
            is_expanded:false,
            children: [
              {
                title: "Sub Sub Level 1",
                slug: "sub-sub-level-1",
                is_directory:false,
                is_expanded:false,
              }
            ]
          },
          {
            title: "Sub level 2",
            slug: "sub-level-2",
            is_directory:false,
            is_expanded:false,
          }
        ]
      },
      {
        title: "Top level 2",
        slug: "top-level 2",
        is_directory:false,
        is_expanded:false,
      }
    ]
  }
 
  // toggle=(data)=>{
  //   // console.log(data)
  //   var A=this.state.full
  //   A.map((x)=> {
  //     if  (x===data){
  //       x.is_expanded=!x.is_expanded
  //     }
   
      
  //   })
  // this.setState({
  //   full:A
  // })
  // }


    render() {
     
        return (
          
           <MyComponent collection={Data} />
          
        )
   
    }
}

export default App;