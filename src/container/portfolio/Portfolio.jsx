import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import image1 from "../../helper/image/image1.png";
// import image2 from "../../helper/image/image2.png";
import image3 from "../../helper/image/image3.png";
import image4 from "../../helper/image/image4.png";
import image5 from "../../helper/image/image5.png";
import image6 from "../../helper/image/image6.png";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Agency",
    image: image1,
    link: "",
  },
//   {
//     id: 2,
//     name: "Ecommerce",
//     image: image2,
//     link: "",
//   },
  {
    id: 2,
    name: "Ecommerce",
    image: image3,
    link: "",
  },
  {
    id: 3,
    name: "Construction",
    image: image4,
    link: "",
  },
  {
    id: 2,
    name: "Gaming",
    image: image5,
    link: "",
  },
  {
    id: 3,
    name: "DashBoard",
    image: image6,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover (index){
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  console.log(filteredItems);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageHeaderContent>

        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item, i) => (
              <li
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={i}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={()=>handleHover(index)}
                onMouseLeave={()=>handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    <img src={item.image} alt="image" />
                  </a>
                </div>
                <div className="overlay">
                    {
                        index === hoveredValue && (
                            <div>
                                <p>{item.name}</p>
                                <button>Visit</button>
                            </div>
                        )
                    }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
