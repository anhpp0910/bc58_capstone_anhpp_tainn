import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function HomePage() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="container space-y-20">
        <ListMovie />
        <TabMovie />
      </div>
    </>
  );
}
