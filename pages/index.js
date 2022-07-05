import Head from "next/head";
import LoadBtn from "../components/button/loadBtn";
import TextCard from "../components/cards/textCard/textCard";
import ImgCard from "../components/cards/imgCard/imgCard";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Card from "../components/cards/card/card";
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contentberg NextJS Theme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <div className="homeSection">
          <div className="featSection">
            <ImgCard />
            <div>
              <h3 className="blockHeader">More Featured</h3>
              <div className="postList">
                <TextCard />
                <TextCard />
                <TextCard />
                <TextCard />
              </div>
            </div>
          </div>
        </div>
        <div className="homeSection">
          <div className="sectionTitle">
            <h2>News &amp; Rumours</h2>
            <span className="meta">View all</span>
          </div>
          <div className="twoCol">
            <ImgCard />
            <ImgCard />
          </div>
          <LoadBtn />
        </div>
        <div className="homeSection">
          <div className="sectionTitle">
            <h2>Marketing</h2>
            <span className="meta">View all</span>
          </div>
          <div className="threeCol">
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
            <ImgCard />
          </div>
          <LoadBtn />
        </div>
        <div className="homeSection">
          <div className="sectionTitle">
            <h2>Gadgets</h2>
            <span className="meta">View all</span>
          </div>
          <div className="twoCol">
            <div className="leftCol">
              <ImgCard />
            </div>
            <div className="rightCol">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="homeSection">
          <div className="sectionTitle">
            <h2>News &amp; Rumours</h2>
            <span className="meta">View all</span>
          </div>
          <div className="twoCol">
            <ImgCard />
            <ImgCard />
          </div>
          <LoadBtn />
        </div>
        <div className="homeSection">
          <div className="withSidebar">
            <div className="leftCol">
              <div className="sectionTitle">
                <h2>What&apos;s New?</h2>
                <span className="meta">View all</span>
              </div>
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
              <ImgCard />
            </div>
            <div className="rightCol">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
