
import React from "react";

const services = [
  {
    icon: "/images/service-icon-1.svg",
    title: "Free Shipping",
    text: "On all orders over $599",
  },
  {
    icon: "./images/service-icon-2.svg",
    title: "Easy Returns",
    text: "30-day return policy",
  },
  {
    icon: "./images/service-icon-3.svg",
    title: "Secure Payment",
    text: "100% secure guarantee",
  },
  {
    icon: "./images/service-icon-4.svg",
    title: "Special Support",
    text: "24/7 dedicated service",
  },
];

function ServiceList() {
  return (
    <section className="service">
      <div className="container">
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-item-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service-content">
                <p className="service-item-title">{service.title}</p>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServiceList;