import React, { useState, useEffect } from 'react';

//componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import ResultadoClima from './components/ResultadoClima';
import { supabase } from './components/supabaseClient'
import Auth from './components/auth/Auth'
import Account from './components/account/Account'




function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session}/>}
      <link to="/climas"></link>
    </div>
    
  );
}

export default App;
