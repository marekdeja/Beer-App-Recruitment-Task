import { isEmpty } from "lodash";
import { useState, CSSProperties, useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../redux/hooks";
import { getSingleBeer } from "../service/beerApi";
const styles = require("./DetailsPage.module.scss");

export const DetailsPage = () => {
  const beerId: number = Number(useParams<{ id?: any }>().id);
  const [beer, setBeer] = useState<any>({});
  const beerArray = useAppSelector((state) => state.beerReducer);

  useEffect(() => {
    //instead of calling API I am using redux state
    const beerObject = beerArray.find((element: { id: any }) => {
      console.log(element.id === beerId);
      console.log(typeof beerId);
      return element.id === beerId;
    });
    setBeer(beerObject);

    if (!beerObject) {
      //   setLoading(true);
      const fetchData = async () => {
        const fetchedData = await getSingleBeer(beerId);
        return fetchedData;
      };
      fetchData().then((res) => {
          console.log(res)
        setBeer(res);
      });
    }
    //   setLoading(false);

    console.log(beerObject);
  }, []);

  return (
    <div className={styles.detailsPage}>
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
