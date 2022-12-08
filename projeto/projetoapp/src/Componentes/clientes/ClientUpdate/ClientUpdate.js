import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../../Api";

function ClientUpdate(){

    let {id} = useParams()
    const [client, setClient] = useState([]);
    const {handleSubmit, register, reset} = useForm();
    const navigate = useNavigate();

    useEffect(()=>{
        Api.get(`/clientes/${id}`,
            {
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>{
            setClient(response.data);
            reset(response.data);
        })
    },[id, reset])
    
    const onSubmit = (data) => {
        Api.put(`/clientes/${id}`, 
            {
                name: data.name,
                endereco: data.endereco
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(()=>{
            navigate('/clientes')
        })
    }

    return(
        <div className="row">
            <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h1>Alterar Cliente</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                    <div className="form-group mt-1"> 
                            <label className="form-label" htmlFor="">Nome</label>
                            <input 
                                className='form-control'
                                type="text" 
                                {...register('name')}
                                defaultValue={client.name}
                            />
                        </div>

                        <div className="form-group mt-1"> 
                            <label className="form-label" htmlFor="">Endereço</label>
                            <input 
                                className='form-control'
                                type="text" 
                                {...register('endereco')} 
                                defaultValue={client.endereco}
                            />
                        </div>

                        <button type="submit" className='btn btn-primary mt-3'>Salvar</button>

                    </form>
                </div>
            <div className="col-sm-1"></div>
        </div>
    )

}

export default ClientUpdate;