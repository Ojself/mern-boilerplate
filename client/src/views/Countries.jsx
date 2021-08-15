import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { useDispatch } from "react-redux";
import errorHandler from "../utils/errorHandler";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { countries } = await api.getCountries();
        setCountries(countries);
        setLoading(false);
      } catch (err) {
        errorHandler(dispatch, err);
      }
    };
    fetchCountries();
  }, []);

  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-col  items-center w-4/5 lg:w-1/3'>
        <h1 className='text-3xl font-bold my-8'>List of countries</h1>
        <ul>
          {countries.map((c) => (
            <Link key={c._id} to={`countries/${c.name}`}>
              <li className='font-normal hover:font-bold'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default Countries;
