import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Routes , Route } from "react-router-dom";
import  BuscarCiudad  from "../BuscarCiudad/BuscarCiudad";
import Account from "../Account/Account";
import ResultadoClima from "../ResultadoClima/ResultadoClima";

export default function Rotas({ session }) {
    const [, setLoading] = useState(true);
    const [, setUsername] = useState(null);
    const [, setWebsite] = useState(null);
  

    useEffect(() => {
        getAccount();
    }, [session]);



    async function getAccount() {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from("profiles")
                .select(`username, website, avatar_url`)
                .eq("id", user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        
        <div className="form-widget">
         

           
            <Routes>
                        <Route path='/Account' element={<Account key={session.user.id} session={session}  />}/>
                        <Route path='/BuscarCiudad' element={<BuscarCiudad key={session.user.id} session={session}  />}/>
                        <Route path='/ResultadoClima' element={<ResultadoClima key={session.user.id} session={session}  />}/>
            </Routes>

        </div>
    );
}
