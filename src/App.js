import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();

    (async function () {
      const { text } = await( await fetch(`/.auth/me`)).json();
      setUser(text);
    })();
  });

  return <div>{data} from {user.clientPrincipal.userDetails.username}</div>;
}

export default App;