import React , {useState} from "react";

const StateTut = () =>{
    const [counter,setCounter]= useState(0);
    
    const incrementNum =() =>{
        
        setCounter(counter + 1);
    };
    
    return(
        <div className="container">
            <div className="py-4">
                <h1>useState Tutorial Page</h1>
                <div>
                    <h3>{counter}</h3>
                    <h4><button  onClick={incrementNum}>Increment</button></h4>  
                </div>
            </div>
        </div>
        
    );

};

export default StateTut;