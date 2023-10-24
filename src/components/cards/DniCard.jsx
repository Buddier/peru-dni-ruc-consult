export const DniCard = ({ data }) => {
  return (
    <div className="card">
      <div className="dni-photo"></div>
        <div className="card-info">
          <p>República del Perú</p>
          <p className="doc-number">DNI: {data?.dni}</p>
          <p>Nombres: <span>{data?.nombres}</span></p>
          <p>Apellido Paterno: <span>{data?.apellidoPaterno}</span></p>
          <p>Apellido Materno: <span>{data?.apellidoMaterno}</span></p>
        </div>
    </div>
  );
};
