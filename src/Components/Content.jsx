import React from "react";

function Content({ currentValue }) {
  const favoriteObj = [
    {
      id: 1,
      sports: {
        sportName: "Cricket",
        link: "https://en.wikipedia.org/wiki/Cricket",
      },
      player: {
        playerName: "Virat Kohli",
        link: "https://en.wikipedia.org/wiki/Virat_Kohli",
      },
      song: {
        songName: "High on Life",
        link: "https://youtu.be/Lpjcm1F8tY8?si=f-6A2atQsWXtUO0l",
      },
    },
    {
      id: 2,
      sports: {
        sportName: "Volleyball",
        link: "https://en.wikipedia.org/wiki/Volleyball",
      },
      player: {
        playerName: "Rohit Sharma",
        link: "https://en.wikipedia.org/wiki/Rohit_Sharma",
      },
      song: {
        songName: "Tu Hai Kahan",
        link: "https://youtu.be/AX6OrbgS8lI?si=FHVIiLuvQ7Bo1vkN",
      },
    },
    {
      id: 3,
      sports: {
        sportName: "Football",
        link: "https://en.wikipedia.org/wiki/Football",
      },
      player: {
        playerName: "Lionel Messi",
        link: "https://en.wikipedia.org/wiki/Lionel_Messi",
      },
      song: {
        songName: "Bairan",
        link: "https://youtu.be/oafxkMv4xnc?si=sRhQPYAd7jf-nChV",
      },
    },
    {
      id: 4,
      sports: {
        sportName: "Tennis",
        link: "https://en.wikipedia.org/wiki/Tennis",
      },
      player: {
        playerName: "Vaibhav Suryavanshi",
        link: "https://en.wikipedia.org/wiki/Vaibhav_Sooryavanshi",
      },
      song: {
        songName: "Kaarvan",
        link: "https://youtu.be/8qCVXCFREkQ?si=bgld4euuaBkDD-CA",
      },
    },
  ];
  const infoObj = [
    {
      id: 1,
      name: "Aditya Patil",
      age: 28,
      education: "Msc BA",
      contact: 9769460072,
    },
    {
      id: 2,
      name: "Kashyap Patil",
      age: 17,
      education: "12th",
      contact: 7506227704,
    },
    {
      id: 3,
      name: "Smita Patil",
      age: 58,
      education: "MA MEd",
      contact: 9819945521,
    },
    {
      id: 4,
      name: "Devidas Patil",
      age: 64,
      education: "Diploma",
      contact: 9322689377,
    },
  ];
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
        Main Content
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
