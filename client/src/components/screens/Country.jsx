import React, { useState, useEffect } from "react";
import api from "../../api";
import { useDispatch } from "react-redux";
import errorHandler from "../../utils/errorHandler";

const Country = ({ match }) => {
  const countryName = match.params.name;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const { country } = await api.getCountry(countryName);
        setCountry(country);
        setLoading(false);
      } catch (err) {
        errorHandler(dispatch, err);
      }
    };
    fetchCountry();
  }, []);
  if (!country) return <main>Country doesn't exist</main>;
  const { name, area, capital, desc } = country;
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-col  items-center w-4/5 lg:w-1/3'>
        <h1 className='text-3xl font-bold mt-8 mb-2'>{name}</h1>
        {!!area && <p>{area} km&sup2;</p>}
        <p>
          Capital: <b>{capital}</b>
        </p>

        {!!desc && <p className='mt-2'>{desc}</p>}
      </section>
    </main>
  );
};

export default Country;
