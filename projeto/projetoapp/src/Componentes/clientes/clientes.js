import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

function ClientList(){

    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        Api.get('/clientes',
            {
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>{
            setClients(response.data);
        })
    }, [])

    const handleClickAdd = () => {
        navigate('ClientAdd')
    }

    const handleClickUpdate = (id) => {
        navigate(`ClientUpdate/${id}`)
    }

    return(
        <div className="row">
        <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Lista de Clientes</h1>

                <button 
                    className="btn btn-primary"
                    onClick={()=>handleClickAdd()}
                >
                    Novo cliente
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index)=>
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.endereco}</td>
                                <td>
                                    <button
                                        className='btn btn-warning'
                                        onClick={()=>handleClickUpdate(client.id)}
                                    >
                                        Alterar
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        <div className="col-sm-1"></div>
    </div>
    )

}

export default ClientList;