import React, { useEffect, useState } from 'react';
import data from './data.json';
import "./events.css";



function PlainEvents(props) {
    // const [eventName,seteventName]=useState(); 
    // let nos = parseInt(props.num,10); 
    // let temparr=[]; 
    const srchJSON =()=>{
        for (let i = 0; i < data.events.length; i++) {
            if (props.name === data.events[i].name) {
                return i; 
            }
        }
    }
    
    const [reg, setreg] = useState("");
    const [drop,setdrop]=useState(false);
    const [numMem,setnumMem]=useState();  
    const [mainArr,setmainArr]=useState([]); 
    const [evIndex,setevIndex] = useState(srchJSON);
    const [choice,setchoice]=useState(null); 
    const [temparr,settemparr]=useState([]); 
    

    const arrGen=(start,end)=>{
        let arr=[]; 
        for (let i=0;i<numMem;i++){
            arr[i]=i+1; 
        }
        return arr; 
    }
    const checkLogin = () => {

        console.log(localStorage.getItem('loginStat'));
        // console.log(localStorage.getItem('regStat'));
        document.getElementsByClassName('regBtn')[0].style.display="none"; 
        
        if (localStorage.getItem('loginStat')) {
            console.log(localStorage.getItem('regStat'));
            
            if (localStorage.getItem('regStat') === "true") {
                console.log("You are already registered.");
                setreg("You are already registered.");
                
            }
            else {
                console.log("Press down button to register");
                setreg("Press down button to register.");
                if (mainArr.length==1){
                    setdrop(false); 
                    setchoice(mainArr.length);
                    let y=[]; 
                    for (let i=0;i<mainArr[0];i++){
                        y[i]=1; 
                    }
                    settemparr(y); 
                }else {
                    setdrop(true);
                }
                 

            }
        }
        else {
            console.log("User kindly login");
        }
    }

    useEffect(() => {
        // let arr=data.events; 
        let index=0; 
        for (let i = 0; i < data.events.length; i++) {
            if (props.name === data.events[i].name) {
                index=i; 
                break;
            }
        }
        
        // let start = data.events[parseInt(evIndex,10)].teamsize[0]; 
        let start = data.events[index].teamsize[0]; 
        // let end = data.events[parseInt(evIndex,10)].teamsize[1];
        let end = data.events[index].teamsize[1];
        let arr=[]; 
        if ((start===end)){
            arr=[start];
        }
        else {
            for (let i=0;i<(end-start);i++){
                arr[i]=start+i; 
            }
            arr[end-start]=end; 
            console.log(arr); 
        }
        setmainArr(arr);  

    },[props.name]);
    return (
        <div className="Obi">
            <div className="information">
                <h1>
                    {data.events[evIndex].name}
                </h1>
            </div>
            <div className="btnRow">
                <button className='regBtn' onClick={() => { checkLogin() }}>Register</button>
            </div>
            
            <div className={(drop)?"drop show":"drop noshow"}>
                <select name="Num" id="pl" onChange={(ev)=>{
                    // console.log(ev.target.value);
                    let x=[]; 
                    mainArr.map((el)=>{
                        if (el==ev.target.value){
                            for (let i=0;i<ev.target.value;i++){
                                x[i]=1; 
                            }
                        }
                    })
                    settemparr(x); 
                    setchoice(ev.target.value); 
                }}>
                    <option value="Num">Number of Member</option>
                    {
                       mainArr.map((el,index)=>{
                        return(
                            <option value={el} key={`op${index}`}>{el}</option>
                        ); 
                       })
                    }
                </select>

            </div>

            <div className={(choice!==null)?"txtboxCol vis":"txtboxCol invis"}>
                {
                    temparr.map((el,index)=>{
                        return(
                        <div className="infield">
                            <label htmlFor={`pl${index}`}>{`Member ${index+1}`}</label>
                            <input type="text" name={`pl${index}`} key={`input${index}`}/>
                            </div>);
                        
                        
                    })
                }
            </div>

        </div>
    );
}

export default PlainEvents;