import React , {useState} from "react";

const StateTut2 = () =>{
    const [myVariable,setmyVariable]= useState("Some Text");
    
    const onChange = (event) =>{
        const newvalue = event.target.value;
        setmyVariable(newvalue);    
        
    };
    
    return(
        <div className="container">
            <div className="py-4">
                <h1>useState Tutorial 2 Page</h1>
                <div>
                    <input placeholder="Enter Something.." onChange={onChange}></input>
                    {myVariable}  
                </div>
            </div>
        </div>
        
    );

};

export default StateTut2;