import React, { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddClimaFav from "../AddClimaFav/AddClimaFav";
import { supabase } from "../supabaseClient";
import Auth from "../auth/Auth";



function Formulario({datosConsulta}) {

    // state del componente
    //busqueda = state, guardarBusqeda = this.setState([])
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })
    const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

    const handleChange = e => {
        //cambiar el state
        guardarBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value 
        });
        
    }

    const consultarClima = e => {
        e.preventDefault();

        //pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Selecciona un País</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          name='pais'
         
          onChange={handleChange}
          autoWidth
          
        >
          <MenuItem value="">
         
          </MenuItem>
          
          <MenuItem value="US">Estados Unidos</MenuItem>
          <MenuItem value="MX">Mèxico</MenuItem>
          <MenuItem value="AR">Argentina</MenuItem>
          <MenuItem value="CO">Colombia</MenuItem>
          <MenuItem value="PE">Peru</MenuItem>
          <MenuItem value="ES">España</MenuItem>
        </Select>
        
        
      </FormControl>
    </div>

    <div className="input-field col s10">
    <Button variant="outlined" type="submit" className="waves-effect waves-light btn-large btn-block white accent-4"
    >Ver Clima</Button>
</div>
<div>
    <Button>
    {!session ? (
                    <Auth />
                  ) : (
                    <AddClimaFav key={session.user.id} session={session} />
                  )}
                  Hola
    </Button>
</div>
        </form>
    )
}

export default Formulario;