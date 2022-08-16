export const ItemListContainer = ({ greeting = "Bienvenido" }) => {
    return (<>
        <div className="container-fluid">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">{greeting}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Esta pagina está creada con React y es el trabajo práctico de la clase de <a href="https://coderhouse.com" target="_blank">CoderHouse</a></p>
                </div>
            </div>
        </div>
    </>);
}