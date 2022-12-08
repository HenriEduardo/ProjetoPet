import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

function TipoServicos(){

    const [tipoServicos, setTipoServicos] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        Api.get('/TipoServicos',
            {
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>{
            setTipoServicos(response.data);
            console.log(response.data);
        })
    }, [])

    const handleClickAdd = () => {
        navigate('TipoServicosAdd')
    }

    return(
        <div className="row">
        <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Tipos de Serviços</h1>

                <button 
                    className="btn btn-primary"
                    onClick={()=>handleClickAdd()}
                >
                    Adicionar Tipo de Serviço
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Tipo Do Serviço</th>
                            <th>Preço</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipoServicos.map((tipoServicos, index)=>
                            <tr key={index}>
                                <td>{tipoServicos.tipo}</td>
                                <td>{tipoServicos.porte}</td>
                                <td>{tipoServicos.valor}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        <div className="col-sm-1"></div>
        </div>
    )

}

export default TipoServicos;