import React, { useState, useEffect } from "react";

const SelectFilter = ({ url, setIsLoaded, setError, handleChange }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCategory(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return () => {
      abortController.abort();
    };
  }, []);
  
  let id = "category";

  return (
    <>
      <label htmlFor={id}>Elegí una categoría</label>
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una categoría</option>
        <option value="all">Ver todas las categorías</option>
        {category &&
          category.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectFilter;
