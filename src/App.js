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

  //State principal
  //ciudad = state, guardarCiudad = this.setState()
  const [ ciudad , guardarCiudad  ] = useState ('');
  const [ pais , guardarPais ] = useState ('');

  //para el error
  const [ error, guardarError] = useState(false);
  //appi
  const [ resultado, guardarResultado] = useState({});



  //usaremos useEffect de hooks para saber en que parte del state sera llamado el metodo consultarApi
  useEffect(() => {
    //prevenir ejecucion 
    if(ciudad === '') return;

    //funcion para api del clima
    const consultarApi = async () => {

      const appId = 'c603facda2de44fce71d5a0941783801';

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      //consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);

    }

    consultarApi();

  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    //validar que ambos campos esten 
    if(datos.ciudad === '' || datos.pais === '') {
      //error
      guardarError(true);
      return;
    }

    //ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  

  //Cargar un componente Condicionalmente 
  let componente;
  if(error) {
    //hay un error
    componente = <Error mensaje ='Ambos campos son obligatorios' />
  } else if(resultado.cod === "404"){
    componente = <Error mensaje="La ciudad no existe en nuestros registros"/>
  } else {
    //mostrar clima
    componente = <ResultadoClima 
                  resultado={resultado}
                  />;
  }

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  );
}

export default App;
