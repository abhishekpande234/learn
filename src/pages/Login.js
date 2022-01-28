import React , {useContext} from 'react';
// import setUsername from './ContextTutorial'; 
import { AppContext } from './ContextTutorial';

const Login = () => {

    const {setUsername} = useContext(AppContext);
  return (
    <div>
        <h1>Context Tutorial</h1>
      <input type="text" onChange={(event) =>{
            setUsername(event.target.value);

      }}></input>
    </div>
  );
}

export default Login;
