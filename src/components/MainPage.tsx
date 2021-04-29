import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBeers } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getBeers, getBeersByName, getBeersByPage } from "../service/beerApi";
import _, { isArray } from "lodash";
import { Link, useHistory } from "react-router-dom";

const styles = require("./MainPage.module.scss");

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const beerArray = useAppSelector((state) => state.beerReducer);
  const history = useHistory();
  const [searchName, setSearchName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (_.isEmpty(beerArray)) {
      setLoading(true);
      const fetchData = async () => {
        const fetchedData = await getBeers();
        return fetchedData;
      };
      fetchData().then((res) => {
        dispatch(saveBeers(res));
      });
      setLoading(false);
    }
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * beerArray.length) + 1;
  };
  const handleRandomOnClick = () => history.push(`/beers/${getRandomNumber()}`);

  const handleSearchOnClick = () => {
    setLoading(true);
    if (searchName === "") {
      const fetchData = async () => {
        const fetchedData = await getBeers();
        return fetchedData;
      };
      fetchData().then((res) => {
        dispatch(saveBeers(res));
      });
    } else {
      const fetchData = async () => {
        const fetchedData = await getBeersByName(searchName);
        return fetchedData;
      };
      fetchData().then((res) => {
        dispatch(saveBeers(res));
      });
    }
    setLoading(false);
  };

  const handlePaginationOnClick = (pageNumber:number) => {
    setLoading(true);
      const fetchData = async () => {
        const fetchedData = await getBeersByPage(pageNumber);
        return fetchedData;
      };
      fetchData().then((res) => {
        dispatch(saveBeers(res));
      });
      setLoading(false);
    }

  const printList = () => {
    return beerArray.map((element: any, index: number) => {
      return (
        <div key={`beer${index}`} className={styles.beerElementDiv}>
          <div className={styles.beerImage}>
            <img src={element.image_url} alt="Beer" />
          </div>
          <div className={styles.text}>
            <p>{element.name}</p>
            <p>{element.description.substring(0, 150)}...</p>
          </div>
          <div className={styles.arrow}>
            <Link to={`/beers/${element.id}`}>&#8680;</Link>
          </div>
        </div>
      );
    });
  };

  const printPagination = () => {
    const arrayTen = Array.from(Array(10).keys());
    return arrayTen.map((number, index) => (
      <div className={styles.pagintaionElement} key={`page_${index}`} onClick={()=>handlePaginationOnClick(index+1)}>
        {index+1}
      </div>
    ));
  };

  return (
    <div className={styles.mainPage}>
      <input
        className={styles.searchName}
        placeholder="name here"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <div className={styles.buttons}>
        <div className={styles.search} onClick={() => handleSearchOnClick()}>
          Search
        </div>
        <div className={styles.random} onClick={() => handleRandomOnClick()}>
          Random
        </div>
      </div>
      {loading && <div className={styles.loading}>Loading... </div>}
      <div className={styles.beerList}>{printList()}</div>

      <div className={styles.pagination}>{ printPagination()}</div>
    </div>
  );
};
