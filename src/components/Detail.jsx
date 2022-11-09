import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import  { Route, useParams } from "react-router-dom";
import { getDetail } from "../redux/action";
import Nav from "./Nav";
import "./Styles/Detail.css"

export default function Detalles (){
    let dispatch = useDispatch();
    const {background_image ,name ,description, released, rating, platform } = useSelector(state=> state.gamesDetail);
    const {id} = useParams();
    useEffect(() => {
      dispatch(getDetail(id));
    }, [dispatch, id]);
    return(
        <div >
            <Route strict path="/Home" component={Nav} />
            <div className="contD">
        <div >
          <img className="imgD" src={background_image} alt="IMG" />
        </div>
        <div className="contD1">
          <h2> {name}</h2>
          <p> {released}</p>
          <p className="pd">{description}</p>
          <p >{platform}</p>
          <h3 >{rating}⭐</h3>
        </div>
    </div>
      </div>
    )
}