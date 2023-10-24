export const ErrorCard = ({ error }) => {
    return (
      <div className="error-card">
          <div className="card-info">
            <p>{error}</p>
          </div>
      </div>
    );
  };  