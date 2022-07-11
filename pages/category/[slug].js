import React from "react";
import ImgCard from "../../components/cards/imgCard/imgCard";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { getCategory, getSlugs } from "../../utils/wordpress";

export default function Category({category}) {
  console.log(category.slug)
  return (
    <>
      <Header />
      <div className="Category">
      <div className="catHead">
            <span className="subTitle">Category</span>
            <h2 className="catTitle">{category.name}</h2> 
            <span className="catBg">{category.name}</span>
          </div>
        <div className="container">
          <div className="mainArea">
            <div className="mainContent">
              
              {/* <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard /> */}
            </div>
            <div style={{ position: "sticky", top: 0, height: "fit-content" }}>
              {/* <Sidebar /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("categories");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);

  return {
    props: {
      category,
    },
    revalidate: 10, // In seconds
  };
}
