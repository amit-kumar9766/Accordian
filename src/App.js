
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
  },
  {
    title:"Local Disk D:",
    children: [
      {
        title: " Files",
        children: [
          
            {
                title:"A"
             },
            {
              title: "B",
             },
            {
              title: "C",
              
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
  }
]
  




class App extends React.Component {
  
  
 
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