import React, { useState, useEffect } from 'react';


import { supabase } from './components/supabaseClient'
import Auth from './components/auth/Auth'
import Account from './components/account/Account'
import  Routes  from './components/Routes/Routes';




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



 

      {!session ? <Auth /> : <Routes key={session.user.id} session={session} /> }

   

           

</div>
    
  );
}

export default App;
