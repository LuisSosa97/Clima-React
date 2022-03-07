import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import BuscarCiudad from "../BuscarCiudad/BuscarCiudad";

export default function addClimasFav({session}){
    const [pais,setPais] = useState(null);
    const [ciudad,setCiudad] = useState(null);
    const [fav, setFav] = useState(false);
    const [tempMin,setTempMin] = useState(null);
    const [tempMax,setTempMax] = useState(null);
   
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


    useEffect(() => {
        getClimasFavs();
    }, [session]);

    async function getClimasFavs() {
      
        setLoading(false);
 
}


    async function Agregarclima({ pais, ciudad, tempMin, tempMax  }) {
        setLoading(true);
        let climaid = parseInt( Math.random()*10000 );
        try {            
            const user = supabase.auth.user();
            

            const Agregar = {
                id: user.id,
                climaid: climaid,
                pais, 
                ciudad, 
                tempMin, 
                tempMax, 
            };

                
            let { error } = await supabase.from("climas").insert(Agregar, {
                returning: "minimal", 
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }



  /*  return(


    )
*/
    


}