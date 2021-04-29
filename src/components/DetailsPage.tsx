import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleBeer } from "../service/beerApi";
const styles = require("./DetailsPage.module.scss");

export const DetailsPage = () => {
  const beerId: number = Number(useParams<{ id?: any }>().id);
  const [beer, setBeer] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
        const fetchedData = await getSingleBeer(beerId);
        return fetchedData
    }
    fetchData().then(res => setBeer(res[0]))
}, [beerId])

  return (
    <div className={styles.detailsPage}>
        {beer===null && <div>Loading...</div>}
      <div>{beer && <img src={beer.image_url} alt="Beer" />}</div>
      <div>
        <h1>{beer && beer.name} </h1>
        <p>{beer && beer.first_brewed}</p>
        <p>{beer && beer.ibu}</p>
        <p>{beer && beer.abv}</p>
        <p>{beer && beer.description}</p>
      </div>
    </div>
  );
};
