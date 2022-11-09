import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from "../redux/action";
import  Card  from "./Card.jsx";
import {Link} from "react-router-dom"

export default function Cards({juegosActuales}) {
  let dispatch = useDispatch();
  //let selecto = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  return (
    <div className="carta">
      {juegosActuales?.map((e) => (
          <Link to={`/home/${e.id}`}>
          <Card key={e.id} name={e.name} img={e.background_image}  />
          </Link>
        ))}
    </div>
  );
}
