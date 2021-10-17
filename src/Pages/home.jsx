import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSearch } from "../components/store/action";
import PortraitCarousel from "../components/PortraitCarousel";
import LandscapeCarousel from "../components/LandscapeCarousel";
import { endPoints } from "../components/API/endpoints";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch(Math.random() * 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <LandscapeCarousel endPoint={endPoints.airingToday()} />
      <PortraitCarousel endPoint={endPoints.topAiring()} />
      <PortraitCarousel endPoint={endPoints.upcoming()} />
    </Fragment>
  );
}
