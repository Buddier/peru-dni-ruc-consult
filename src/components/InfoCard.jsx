import { DniCard } from "./cards/DniCard.jsx";
import { RucCard } from "./cards/RucCard.jsx";
import { ErrorCard } from "./cards/ErrorCard.jsx";

import "./InfoCard.css";

export const InfoCard = ({ getResponse }) => {
  let content;

  if (getResponse.data.error) {
    content = <ErrorCard error={getResponse.data.error} />;
  } else {
    if (getResponse.type == "dni") {
      content = <DniCard data={getResponse.data} />;
    } else {
      content = <RucCard data={getResponse.data} />;
    }
  }
  return <div>{content}</div>;
};
