import {Routes, Route} from 'react-router-dom';
import Home from '../home';
import Agenda from '../agenda';
import Atendimentos from '../atendimentos';
import Clientes from '../clientes';
import ServicosFinalizados from '../servicos';
import ClientAdd from '../clientes/ClientAdd';
import ClientUpdate from '../clientes/ClientUpdate/ClientUpdate';
import AgendaAdd from '../agenda/AgendaAdd';
import TipoServicos from '../TipoServicos';
import TipoServicosAdd from '../TipoServicos/TipoServicosAdd/TipoServicosAdd';


function Section(){
    return(
        <div className='main'>
            <section className="bg-light p-3">
                <Routes>

                    <Route path='/' element={<Home />} />

                    <Route path='/Agenda' element={<Agenda />} />

                    <Route path='/Atendimento' element={<Atendimentos />} />

                    <Route path='/Clientes' element={<Clientes />} />

                    <Route path='/Servicos' element={<ServicosFinalizados />} />

                    <Route path='/TipoServicos' element={<TipoServicos />} />

                    <Route path='/Clientes/ClientAdd' element={<ClientAdd />} />

                    <Route path='/Clientes/ClientUpdate/:id' element={<ClientUpdate />} />

                    <Route path='/Agenda/AgendaAdd' element={<AgendaAdd />} />

                    <Route path='/TipoServicos/TipoServicosAdd' element={<TipoServicosAdd />} />

                </Routes>
            </section>
        </div>
    )
}

export default Section;