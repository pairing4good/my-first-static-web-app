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
      const { clientPrincipal } = await( await fetch(`/.auth/me`)).json();
      setUser(clientPrincipal.userDetails);
    })();
  });

  return <div>{data} from {user}</div>;
}

export default App;