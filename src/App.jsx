import { useState } from "react";
import axios from "axios";
import "./App.css";

import { API_URL, API_TOKEN } from "../config";

import { InfoCard } from "./components/InfoCard";
import { ErrorCard } from "./components/cards/ErrorCard";
import { NavBar } from "./components/NavBar";

function App() {
  const [docNumber, setDocNumber] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [responseData, setResponseData] = useState({ type: "", data: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    let docType;
    switch (docNumber.length) {
      case 8:
        docType = "dni";
        break;
      case 11:
        docType = "ruc";
        break;
      default:
        setShowCard(false);
        return console.log("No es ni dni ni ruc");
    }

    axios
      .get(`${API_URL}${docType}/${docNumber}?token=${API_TOKEN}`)
      .then(function (response) {
        // handle success
        if (response.data.success == false) {
          setResponseData({
            type: docType,
            data: {
              error: response.data.message,
            },
          });
        } else {
          setResponseData({ type: docType, data: response.data });
        }
        setShowCard(true);
      })
      .catch(function (error) {
        // handle error
        setResponseData({
          type: docType,
          data: {
            error: error.message,
          },
        });
        setShowCard(true);
      });
  };

  const handleChange = (event) => {
    const newDocNumer = event.target.value;
    setDocNumber(newDocNumer);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>
            Perú <span>|</span> Consultas DNI o RUC
          </h1>
          <label>
            Número: {""}
            <span className="input">
              <input
                type="number"
                placeholder=" • • • • • • • • • • •"
                maxLength={11}
                value={docNumber}
                onChange={handleChange}
              />
            </span>
          </label>
          <button type="submit">Consultar</button>
        </form>
        <div className="cards">
          {showCard && <InfoCard getResponse={responseData} />}
          {!showCard && (
            <ErrorCard
              error={
                "Si quieres hacer consulta de datos de un DNI coloca los 8 dígitos del DNI, caso contrario quieres hacer consulta de RUC coloca los 11 dígitos del RUC."
              }
            />
          )}
        </div>
      </div>
      <footer>
        <p className="footer">Hecho con React, por @Buddier</p>
      </footer>
    </>
  );
}

export default App;
