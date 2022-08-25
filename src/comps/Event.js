import React from 'react';
import data from './data.json'; 

function Event(props) {
    function allCity(){
        let arr=[]; 
        let temparr=["Jamshedpur"]; 
        let counter=0; 
        data.events.map((ev)=>{
            if (ev.mode==="Offline"){
                counter++; 
                // console.log(ev.cities); 
                
                temparr.concat(ev.cities); 
                console.log(temparr); 
            }
        }); 
        temparr.map((el,i)=>{
            if (i==0){
                let x=arr.push(el); 
            }
            else {
                let willAdd=true; 
                for (let j=0;j<i;j++){
                    if (arr[j]===el){
                        willAdd=false; 
                        break; 
                    }
                }
                if (willAdd){
                    let newL=arr.push(el); 
                }
                else{}
            }
        }); 
        console.log(arr);
        console.log(counter);  
        return arr; 
    }
    return (
        <>
            <h2>Hello</h2>

            <ul>
                {allCity().map((el,ind)=>{
                <li key={ind}>{el}</li>
                })}
            </ul>
            
        </>
    );
}

export default Event;