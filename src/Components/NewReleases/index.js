import React from "react";
import ProductCard from "../ProductCard";
import "./index.css";

const books = [
  { id: 1, title: "The Monk who sold his Ferrari", image: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733321174/Screenshot_2024-12-04_193228_mitf3h.png", price: "349", oldPrice: "₹799" },
  { id: 2, title: "Think like a Monk", image: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733321567/download_pss6st.jpg", price: "₹599", oldPrice: "₹899" },
  { id: 3, title: "Rich Dad Poor Dad", image: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733321611/download_lqb5ax.jpg", price: "₹449", oldPrice: "₹599" },
  { id: 4, title: "Winning at Work", image: "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1733321689/download_pwqeqg.jpg", price: "₹799", oldPrice: "₹900" }
];

const NewReleases = () => (
  <div className="new-releases">
    <h2>New Releases</h2>
    <div className="product-list">
      {books.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export default NewReleases;
