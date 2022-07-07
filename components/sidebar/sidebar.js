import { useState, useEffect } from "react";
import Card from "../cards/card/card";
// import styles from "../sidebar/sidebar.module.css";
export default function Sidebar() {
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {

        const sidebarEl = document
        .querySelector(".sidebar")
        .getBoundingClientRect();
      setSidebarTop(sidebarEl.top);

  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const sidebarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 30) {
      sidebarEl.classList.add("is-sticky");
    } else {
      sidebarEl.classList.remove("is-sticky");
    }
  };

  return (
    <div className="sidebar">
      <div className="blockHeader">Most Commented</div>
      {/* <Card />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}

    </div>
  );
}
