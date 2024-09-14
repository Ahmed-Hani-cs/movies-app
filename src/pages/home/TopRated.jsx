// Top Rated

import React, { useState } from "react";
import SwitchTabs from "../../components/switchTap/SwitchTap";
import Slider from "../../components/slider/Slider";
import useFetch from "../../hooks/UseFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="w-[95%] mx-auto md:container py-5 ">
      <div className="flex items-center justify-between">
        <span className="text-white text-[24px] font-bold">TopRated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <Slider data={data?.results ? data?.results : [1,2,3,4,5]} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default TopRated;
