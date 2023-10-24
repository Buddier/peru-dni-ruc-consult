export const RucCard = ({ data }) => {
  return (
    <div className="card">
        <div className="card-info">
          <p><span>{data?.razonSocial}</span></p>
          <p className="doc-number">RUC: {data?.ruc}</p>
          <p>Estado: <span>{data?.estado}</span> | Condición: <span>{data?.condicion}</span></p>
          <p>Ubigeo: <span>{data?.ubigeo}</span></p>
          <p>Capital: <span>{data?.capital}</span></p>
          <p>Departamento: <span>{data?.departamento}</span> | Provincia: <span>{data?.provincia}</span></p>
          <p>Distrito: <span>{data?.distrito}</span></p>
          <p>Dirección: <span>{data?.direccion}</span></p>
        </div>
    </div>
  );
};
