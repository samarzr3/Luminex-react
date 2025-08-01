
import React from "react";

  const categories = [
    {
      title: "Tree Night Light",
      img: "https://i5.walmartimages.com/seo/Yinrunx-Bonsai-Tree-Night-Light-Plug-Artificial-Lamp-108-LED-Lights-Usb-Touch-Switch-Fiber-Optic-Up-Indoor-Christmas-Decorations-Home-Warm-White_1a2210d0-81f8-447f-b069-3575ed7cd3a3.58dbfb60f3b2efb09fd9d46977725301.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
      title: "Glow Lamp",
      img: "https://www.futoncompany.co.uk/images/detailed/80/FC_Glow_Lamp___1_.jpg"
    },
    {
      title: "Glass table Lamp",
      img: "https://img0.junaroad.com/uiproducts/15612031/zoom_0-1538734579.jpg"
    },
    {
      title: "3DStars Light Lamp",
      img: "https://i.pinimg.com/736x/7d/84/81/7d84812d1038a1571b386a54907fbcaf.jpg"
    },
    {
      title: "romantic Lamp",
      img: "https://img.fruugo.com/product/7/67/219229677_max.jpg"
    },
    {
      title: "Moon Lamp",
      img: "https://shop.getty.edu/cdn/shop/products/G019AH_1200x.jpg?v=1621057374"
    }
  ];

function CategoryList() {
  return (
    <section className="section category">
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
