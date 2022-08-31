import { ItemCount } from "../Cart/ItemCount" 

export const ItemDetail = ({producto}) => {
    return <>
        <h1 className="display-5 fw-bold">Detalle de producto</h1>
        <div className="container">
		<div className="card-item-detail">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={producto.pictureUrl} /></div>
						  <div className="tab-pane" id="pic-2"><img src={producto.pictureUrl} /></div>
						  <div className="tab-pane" id="pic-3"><img src={producto.pictureUrl} /></div>
						  <div className="tab-pane" id="pic-4"><img src={producto.pictureUrl} /></div>
						  <div className="tab-pane" id="pic-5"><img src={producto.pictureUrl} /></div>
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
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">{producto.description}</p>
						<h4 className="price">precio actual: <span>${producto.price}</span></h4>
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
						<div className="action">
                            <i>!!!! aquí falta que el componente reciba los props y darle algo mas de estilo!!!!</i>
                            <ItemCount />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
}