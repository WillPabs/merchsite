import axios from 'axios'
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState('');
  axios.get('http://localhost:3307/users/3').then( res => setUsers(res.data))

  return (
    <div className="App">
      <h1> Hello </h1>
      <p>{users.firstName}</p>
    </div>
  );
}

export default App;
