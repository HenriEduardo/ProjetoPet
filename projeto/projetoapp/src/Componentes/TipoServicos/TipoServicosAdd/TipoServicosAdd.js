import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api";

function TipoServicosAdd() {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        Api.post('/TipoServicos', 
            {
                tipo: data.tipo,
                porte: data.porte,
                valor: data.valor
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(()=>{
            navigate('/tipoServicos')
        })
    }

    return (
        
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="form">

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Tipo do Serviço</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('tipo')} 
                        />
                    </div>

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Porte</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('porte')} 
                        />
                    </div>

                    <div className="form-group mt-1"> 
                        <label className="form-label" htmlFor="">Valor</label>
                        <input 
                            className='form-control'
                            type="text" 
                            {...register('valor')} 
                        />
                    </div>

                    <button type="submit" className='btn btn-primary mt-3'>Salvar</button>
                    
                </form>
            </div>
        </div>
    )

}

export default TipoServicosAdd;