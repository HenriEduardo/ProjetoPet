import React from "react";
import { useForm } from "react-hook-form";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";

function ClientAdd(){


    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        Api.post('/clientes', 
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

    return (
        
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Nome</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('name')} 
                        />
                    </div>

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Endereço</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('endereco')} 
                        />
                    </div>

                    <button type="submit" className='btn btn-primary mt-3'>Salvar</button>
                    
                </form>
            </div>
        </div>
    )
}

export default ClientAdd;