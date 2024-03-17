import React from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Followers",
          value: "93.2k",
          percent: "0.8%",
          imgSrc: "iconoir-arrow-tr.svg",
          altText: "Iconoir arrow tr",
          analyticsImgSrc: "uim-analytics.svg",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Likes",
          value: "400k",
          percent: "1.21%",
          imgSrc: "iconoir-arrow-tr-2.svg",
          altText: "Iconoir arrow tr",
          analyticsImgSrc: "uim-analytics-2.svg",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Comments",
          value: "289.1k",
          percent: "2.7%",
          imgSrc: "iconoir-arrow-tr-4.svg",
          altText: "Iconoir arrow tr",
          analyticsImgSrc: "uim-analytics-3.svg",
        }}
      />
    </section>
  );
};

export default AreaCards;
