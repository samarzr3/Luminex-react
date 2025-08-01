
import {React , useEffect, useState } from "react";
import axios from "axios";



function CategoryList() {
    const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
   
    fetch("http://localhost:5000/api/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  if (categories.length === 0) return <p>No categories found.</p>;
  if (!Array.isArray(categories)) {
    return <p>Invalid categories data format.</p>;
  }


  return (
    <section className="section category">
      <h2 className="h2 section-title">Categories</h2>
      <div className="container">
        <ul className="category-list">
          {categories.map((cat, index) => (
            <li className="category-item" key={index}>
              <figure className="category-banner">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="w-100"

                />
              </figure>
              <a href="#" className="btn btn-secondary">
                {cat.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategoryList;
