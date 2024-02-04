import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';

export default function Fav({user}){
    const [favs, setFavs] = useState([])
    //const navigate = useNavigate()  
    // if (!user?.id) {
    //     return <Navigate to="/"/>
    // }

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")) ?? [])
    }, [])


    return (
        <>
            <h1>Favoriler</h1>
            <div className="list-group">
                {
                    favs.map((item) => 
                    <Link 
                    className="list-group-item list-group-item-action"
                    key={item.id} 
                    to={`/products/product/${item.id}`}>
                        {item.title.toUpperCase()}
                    </Link>
                    )
                }
                
            </div>
        </>
    )
}