// import React, { useState } from 'react';
import React,{Component} from 'react';
// import Header from './Header';
import MyComponent from "./MyComponent.js";

var Data = [
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

// const MyComponent  = (props) => {
//      if(Array.isArray(props.collection)) {
//          return <ul>
//                {props.collection.map((data)=> {
//                    return <li>
//                       <ul>
//                         <li>{data.title}</li>
//                         <li>{data.slug}</li>
//                         <li><MyComponent collection={data.children}/></li>
//                       </ul>
//                    </li>
//                })
//                }
//          </ul>
//      }
//      return null;
// }

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
 
  toggle=(data)=>{
    // console.log(data)
    var A=this.state.full
    A.map((x)=> {
      if  (x===data){
        x.is_expanded=!x.is_expanded
      }
   
      // if  (x.children.length>0 && x===data){
      //   x.children.is_expanded=!x.is_expanded
      // }
      // if  (x.children.children!=undefined && x===data){
      //   x.children.children.is_expanded=!x.is_expanded
      // }
    })
  this.setState({
    full:A
  })
  }


    render() {
        return (
           <MyComponent collection={this.state.full} toggleAcc={(data)=>this.toggle(data)}/>
        )
    }
}

export default App;