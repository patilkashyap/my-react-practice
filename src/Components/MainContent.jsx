import React from "react";
import { useState } from "react";

function MainContent({ infoObj, favoriteObj, allNames }) {
  const [newValue, setNewValue] = useState({
    firstname: "",
    lastname: "",
    age: "",
    education: "",
    contact: "",
    sport: "",
    player: "",
    song: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    setNewValue((newValueObj) => ({ ...newValueObj, [name]: value }));
    //console.log(newValue);
  }

  const handleAdd = (e) => {
    e.preventDefault();

    allNames.push(newValue.firstname);

    infoObj.push({
      id: infoObj.length + 1,
      name: newValue.firstname + " " + newValue.lastname,
      age: newValue.age,
      education: newValue.education,
      contact: newValue.contact,
    });
    favoriteObj.push({
      id: favoriteObj.length + 1,
      sports: {
        sportName: newValue.sport,
        link: "https://en.wikipedia.org/wiki/" + newValue.sport,
      },
      player: {
        playerName: newValue.player,
        link: "https://en.wikipedia.org/wiki/" + newValue.player,
      },
      song: {
        songName: newValue.song,
        link:
          "https://www.youtube.com/results?search_query=" +
          newValue.song +
          "+song",
      },
    });
    setNewValue({
      firstname: "",
      lastname: "",
      age: "",
      education: "",
      contact: "",
      sport: "",
      player: "",
      song: "",
    });
  };
  return (
    <form className="w-full">
      <div className="flex justify-around">
        <div className="flex flex-col items-center ">
          <h2>Details</h2>
          <label htmlFor="name">Name:</label>
          <span>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              value={newValue.firstname}
              onChange={handleChange}
              className="bg-white w-44 border-2 m-1"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              value={newValue.lastname}
              onChange={handleChange}
              className="bg-white w-44 border-2 m-1"
            />
          </span>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="18"
            value={newValue.age}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            name="education"
            id="education"
            placeholder="Fail"
            value={newValue.education}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
          <label htmlFor="contact">Contact:</label>
          <input
            type="number"
            name="contact"
            id="contact"
            placeholder="9876543210"
            value={newValue.contact}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
        </div>
        <div className="flex flex-col ">
          <h3>Additional Info</h3>
          <label htmlFor="sport">Fav sport:</label>
          <input
            type="text"
            name="sport"
            id="sport"
            placeholder="Cricket"
            value={newValue.sport}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
          <label htmlFor="player">Fav Player:</label>
          <input
            type="text"
            name="player"
            id="player"
            placeholder="Rohit Sharma"
            value={newValue.player}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
          <label htmlFor="song">Fav Song</label>
          <input
            type="text"
            name="song"
            id="song"
            placeholder="Bairan"
            value={newValue.song}
            onChange={handleChange}
            className="bg-white w-44 border-2 m-1"
          />
        </div>
      </div>
      <button
        type="button"
        className="border-2 bg-white w-20"
        onClick={handleAdd}
      >
        Add
      </button>
    </form>
  );
}

export default MainContent;
