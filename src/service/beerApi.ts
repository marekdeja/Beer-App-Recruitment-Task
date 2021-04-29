import axios from "axios";
const apiUrl = "https://api.punkapi.com/v2";

export const getSingleBeer = (id: number) =>
  axios
    .get(`${apiUrl}/beers/${id}`)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });

export const getBeers = () =>
  axios
    .get(`${apiUrl}/beers`)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });

export const getBeersByPage = (pageNumber: number) =>
  axios
    .get(`${apiUrl}/beers?page=${pageNumber}`)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });

export const getBeersByName = (name: string) =>
  axios
    .get(`${apiUrl}/beers?beer_name=${name}`)
    .then((response: { data: any }) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });
