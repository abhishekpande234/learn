import React, {useEffect , useLayoutEffect} from 'react';

const LayoutEffectTutorial = () => {
    useEffect( () =>{
        console.log("useEffect");
    }, []);

    useLayoutEffect(() => {
      console.log("useLayoutEffect");
    }, []);

  return (
    <div><h1>Hey</h1>
      
    </div>
  );
};

export default LayoutEffectTutorial;
