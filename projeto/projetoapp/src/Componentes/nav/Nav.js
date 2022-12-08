import { Link } from "react-router-dom";

function Nav(){


    return(
        <nav className="col-md-3 navbar navbar-expand-md d-flex flex-column align-item-start bg-light">
            <div className="container-fluid">
                <ul className="nav flex-column">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Agenda">Agenda</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Atendimento">Atendimentos em andamento</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Clientes">Clientes</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Servicos">Serviços finalizados</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/TipoServicos">Tipos de Serviços</Link>
                    </li>

                </ul>
            </div>

        </nav>
        

    )
}

export default Nav;