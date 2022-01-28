import React ,{useContext} from 'react';
import { AppContext } from './ContextTutorial';


const User = () => {
    const {username} = useContext(AppContext);

  return (
    <div>
      <p>User: {username}</p>
    </div>
  );
}

export default User;
