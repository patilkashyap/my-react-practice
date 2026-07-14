import React from "react";
import { favoriteObj, infoObj } from "../data/data";
import MainContent from "./MainContent";
import { useState } from "react";
function Content({ currentValue, allNames }) {
  return (
    <div className="flex h-96 my-2 text-center">
      <div className="bg-gray-300 h-full w-64 flex flex-col justify-center">
        <p className="mb-2">Details</p>
        <ul className="text-left">
          {infoObj
            .filter((info) => info.id == currentValue.id)
            .map((info) => (
              <div key={info.id}>
                <li key={info.name}>Name:{info.name}</li>
                <li key={info.age}>Age:{info.age}</li>
                <li key={info.education}>Education:{info.education}</li>
                <li key={info.contact}>Contact:{info.contact}</li>
              </div>
            ))}
        </ul>
      </div>
      <div className="bg-gray-300 h-full w-full mx-2 flex items-center justify-center">
        <MainContent
          infoObj={infoObj}
          favoriteObj={favoriteObj}
          allNames={allNames}
        />
      </div>
      <div className="bg-gray-300 h-full w-64 flex items-center justify-center">
        <ol className="text-left">
          {favoriteObj
            .filter((info) => info.id == currentValue.id)
            .map((fav) => (
              <div key={fav.id}>
                <li key={fav.sports.sportName}>
                  Favorite Sport:
                  <a href={fav.sports.link} target="_blank">
                    {fav.sports.sportName}
                  </a>
                </li>
                <li key={fav.player.playerName}>
                  Favorite Player:
                  <a href={fav.player.link} target="_blank">
                    {fav.player.playerName}
                  </a>
                </li>
                <li key={fav.song.songName}>
                  Favorite Song:{" "}
                  <a href={fav.song.link} target="_blank">
                    {" "}
                    {fav.song.songName}
                  </a>
                </li>
              </div>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Content;
