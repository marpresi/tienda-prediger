import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../Cart/ItemCount" 

export const ItemDetail = ({producto}) => {

	const { addItem } = useContext(CartContext)

	const [cantArticulos,setCantArticulos] = useState(0);

	const onAdd = (quantityToAdd) =>{
	  console.log(`Se han registrado ${quantityToAdd} para este producto`);
	  const newProduct = {...producto, cantidad: quantityToAdd }
	  console.log('new product', newProduct);
	  setCantArticulos(quantityToAdd);
	  addItem(newProduct);
	}
  

    return <>
        <h1 className="display-5 fw-bold">Detalle de producto</h1>
        <div className="container">
		<div className="card-item-detail">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1">
							<img src={producto.pictureUrl} style={{maxHeight: '300px', width: 'auto'}} />
						  </div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={producto.pictureUrl} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={producto.pictureUrl} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={producto.pictureUrl} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={producto.pictureUrl} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={producto.pictureUrl} /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{producto.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">Stock disponible: {(producto.stock === 0)? ' sin stock ' : producto.stock + ' unidades'}</span>
						</div>
						<p className="product-description">{producto.description}</p>
						<h4 className="price">precio actual: <span>${producto.price}</span></h4>
						<div className="action mt-1 mb-4">
							{cantArticulos === 0? (
								<ItemCount stock={producto.stock} initial={producto.initial} onAdd={onAdd} />
							):(
								<div>
									<Link to="/" className="btn btn-sm btn-primary m-2">Seguir comprando</Link>
									<Link to="/cart" className="btn btn-sm btn-success m-2">Finalizar compra</Link>
								</div>
							)}
                            
						</div>
                        {/* To Do: hacer que las fotos se vean en galeria */}
						<h5 className="sizes">tamaños:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colores:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
}