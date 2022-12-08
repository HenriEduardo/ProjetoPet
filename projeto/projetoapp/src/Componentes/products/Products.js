import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Api from "../../Api";

function Products(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setCategories([
            {catId : '1', name: 'Categoria 1'},
            {catId : '2', name: 'Categoria 2'},
            {catId : '3', name: 'Categoria 3'},
        ])
    })

    return(
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <h1>Página de Produtos</h1>
            <ul className="nav">
                {categories.map((category)=>
                
                    <li className="nav-item" key={category.Id}>
                        <Link className="nav-link active" to={category.catId}> 
                            {category.name} 
                        </Link>
                    </li>

                )}
            </ul>

            <Routes>
                <Route path='/' element={<AllCategories />}/>
                <Route path=':id' element={<Category />}/>
            </Routes>
        
        </div>
        <div className="col-sm-1"></div>
        </div>
    )

}

export default Products;

function AllCategories(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        Api.get('/product')
            .then((response)=>{
                setProducts(response.data);
            })
    },[])

    return(
        <>
            <h1>Todos os produtos</h1>
            <table className='table table-striped'>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}

function Category(){

    let {id} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        Api.get(`/product/category/${id}`)
            .then((response)=>{
                setProducts(response.data);
                console.log(products);
            })
    }, [id])

    return(
        <>
            <h1>Produtos da Categoria</h1>
            <table className='table table-striped'>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}
