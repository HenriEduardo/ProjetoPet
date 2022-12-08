import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

function AgendaAdd({projectData}){

    const [project, setProject] = useState(projectData || {})
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        Api.post('/agenda', 
            {
                cliente: data.cliente,
                servico: data.servico
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(()=>{
            navigate('/agenda')
        })
    }

    return (
        
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Cliente</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('cliente')} 
                        />
                    </div>

                    <div className="form-group mt-1"> 
                        <label className="form-label">Serviço</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('servico')} 
                        />
                    </div>

                    <button type="submit" className='btn btn-primary mt-3'>Salvar</button>
                    
                </form>
            </div>
        </div>
    )
}

export default AgendaAdd;