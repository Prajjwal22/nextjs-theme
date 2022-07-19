import React from "react";
import ImgCard from "../../components/cards/imgCard/imgCard";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { getCategories, getCategory, getSlugs } from "../../utils/wordpress";

export default function Category({category}, {PostByCat}) {
  const CatId = category.id
  console.log(CatId)
  getPostByCat()
  console.log(category.slug)

 async function getPostByCat() {
  const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?_embedcategories=${CatId}`);
  const PostByCat = await res.json();
  console.log(PostByCat)
  return PostByCat;
}
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
              {JSON.stringify(PostByCat)}
              {/* {PostByCat[0].title.rendered} */}
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
