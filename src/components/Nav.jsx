import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import "./Styles/Nav.css";
import { clearSearch /*, getAllGames*/, searchBar } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
export default function Nav() {
  //----------search--------
  const [searchGame, setSearchGame] = useState("");
  const games = useSelector((state) => state.searchG);
  //const allG = useSelector(state => state.games)
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setSearchGame(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBar(searchGame));
    //dispatch(getAllGames(searchGame))
    setSearchGame("");
  };
  //console.log(allG)
  //----------search--------
  return (
    <nav className="bigNav" path="/Home">
      <form className="navBack" onSubmit={handleSubmit}>
        <Link to="/home/create">
          <Route exact path="/home">
            <button className="PaginadoBtn">
              <span className="button_top">Add game</span>{" "}
            </button>
          </Route>
        </Link>
        <Link to="/home">
          <Route strict path="/home/">
            <button className="PaginadoBtn">
              {" "}
              <span className="button_top"> Go Home!</span>
            </button>
          </Route>
        </Link>
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Games finder...."
          value={searchGame}
          onChange={handleChange}
        />
        <button className="PaginadoBtn" type="submit">
          <span className="button_top">Find game</span>
        </button>
      </form>
      <div className="card-description">
        {games?.map((g) => (
          <Route exact path={"/home"}>
            <Link to={`/home/${g.id}`}>
              <p className="findtext"> {g.name}</p>
            </Link>
          </Route>
        ))}
      </div>
    </nav>
  );
}
