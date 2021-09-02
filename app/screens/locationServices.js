import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Routes from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import { setSport } from "../redux/CreateGameSport";
import { setLocationPerms } from "../redux/LocationPerms";

export default function LocationServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      dispatch(setLocationPerms(true));
    })();
  }, []);

  return <Routes />;
}
