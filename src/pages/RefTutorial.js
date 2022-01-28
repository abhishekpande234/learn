import React from 'react';
import {useRef} from 'react';

const RefTutorial = () => {
    let inputRef = useRef(null);
    
    const onClick = () =>{
        inputRef.current.value= "";
        console.log(1);
        inputRef.current.focus();
    };

    return ( <div>
        <div><h1>useRef Tutorial</h1></div>
        <div><input type="text" placeholder='Ex....' ref={inputRef}/>
         <button onClick={onClick}>Change Name</button>
        </div></div>
    )
};

export default RefTutorial;
