import React from "react";
import ImgCard from "../../components/cards/imgCard/imgCard";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

const Category = () => {
  return (
    <>
      <Header />
      <div className="Category">
      <div className="catHead">
            <span className="subTitle">Category</span>
            <h2 className="catTitle">Marketing</h2>
            <span className="catBg">Marketing</span>
          </div>
        <div className="container">
          <div className="mainArea">
            <div className="mainContent">
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
            </div>
            <div style={{ position: "sticky", top: 0, height: "fit-content" }}>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
