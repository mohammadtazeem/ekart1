import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
                    <i className=' fs-5 fa fa-home'></i><span className='float-end'>Home</span>
                </Link>
                <Link to="admin/Users" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-users'></i><span className='float-end'>Users</span></Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-list'></i><span className='float-end'>Maincategory</span></Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-list'></i><span className='float-end'>Subcategory</span></Link>
                <Link to="/admin/brand" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-list'></i><span className='float-end'>Brand</span></Link>
                <Link to="/admin/product" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-list'></i><span className='float-end'>Product</span></Link>
                <Link to="/admin/testimonials" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-star'></i><span className='float-end'>Testimonials</span></Link>
                <Link to="/admin/checkouts" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-shopping-bag'></i><span className='float-end'>Checkouts</span></Link>
                <Link to="/admin/contectus" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-phone'></i><span className='float-end'>ContectUs</span></Link>
                <Link to="admin/newsletters" className="list-group-item list-group-item-action"> <i className='text-primary fs-5 fa fa-envelope'></i><span className='float-end'>Newsletters</span></Link>
            </div>
        </>
    )
}
