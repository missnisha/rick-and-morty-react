import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <div className="cards__list">
        <div className="card card--back">
          <img src={image} alt="Character image" />
          <div className="card__detail">
            <h1>{name}</h1>
            <p>
              Gender: <span>{gender}</span>{" "}
            </p>
            <p>
              Location: <span>{location?.name}</span>
            </p>
            <p>
              Origin: <span>{origin?.name}</span>
            </p>
            <p>
              Species: <span>{species}</span>{" "}
            </p>
            <p>
              Status: <span>{status}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="button__container">
        <button onClick={handleClick}>
          Go back
        </button>
      </div>
    </>
  );
};

export default CardDetails;
