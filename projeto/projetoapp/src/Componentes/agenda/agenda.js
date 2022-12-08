import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../Api';

function Agenda() {

    const [agenda, setAgenda] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        Api.get('/agenda',
            {
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>{
            setAgenda(response.data);
        })
    }, [])

    const handleClickAdd = () => {
        navigate('AgendaAdd')
    }

    return(
        <div className="row">
        <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1>Agenda</h1>

                <button 
                    className="btn btn-primary"
                    onClick={()=>handleClickAdd()}
                >
                    Agendar Serviço
                </button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Serviço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agenda.map((agenda, index)=>
                            <tr key={index}>
                                <td>{agenda.cliente}</td>
                                <td>{agenda.servico}</td>
                                <td>
                                    <button
                                        className='btn btn-warning'
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

export default Agenda;