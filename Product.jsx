import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProduct, getProduct } from
    "../../../Store/ActionCreators/ProductActionCreators"
export default function Product() {
    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)
    function deleteItem(id) {
        dispatch(deleteProduct({ id: id }))
        getAPIData()
    }
    function getAPIData() {
        dispatch(getProduct())
        if (ProductStateData.length)
            setData(ProductStateData.reverse())
    }
    useEffect(() => {
        getAPIData()
    }, [ProductStateData.length])
    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Admin</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
                    <li className="breadcrumb-item active text-white">Product</li>
                </ol>
            </div>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Product <Link to="/admin/product/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Category (MC/SC/BR)</th>
                                    <th>Price</th>
                                    <th>Color/Size</th>
                                    <th>Stock</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.maincategory}/ {item.subcategory}/ {item.brand}</td>
                                            <td><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice}<sup className='text-success'>{item.discount}% Off</sup></td>
                                            <td>{item.color}/ {item.size}</td>
                                            <td>{item.stock}</td>
                                            <td>
                                                <a href={`/product-images/${item.pic1}`} target='_blank' rel='noreferrer'>
                                                    <img src={`/product-images/${item.pic1}`} height="80px" width="80px" alt="" />
                                                </a>
                                            </td> 
                                            <td>
                                                <a href={`/product-images/${item.pic1}`} target='_blank' rel='noreferrer'>
                                                    <img src={`/product-images/${item.pic1}`} height="80px" width="80px" alt="" />
                                                </a>
                                            </td>
                                            <td>
                                                <a href={`/product-images/${item.pic1}`} target='_blank' rel='noreferrer'>
                                                    <img src={`/product-images/${item.pic1}`} height="80px" width="80px" alt="" />
                                                </a>
                                            </td>
                                            <td>
                                                <a href={`/product-images/${item.pic1}`} target='_blank' rel='noreferrer'>
                                                    <img src={`/product-images/${item.pic1}`} height="80px" width="80px" alt="" />
                                                </a>
                                            </td>
                                            <td><Link to={`/admin/product/update/${item.id}`}><i className='fa fa-edit text-primary'></i></Link></td>
                                            <td><button onClick={() => deleteItem(item.id)} className='btn text-danger'><i className='fa fa-trash'></i></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
