import React from "react";
import axios from "../../axios/axios";
import {BsFillBookmarkStarFill} from "react-icons/bs";

export const CountryItem = (props) => {


    return (
        <tr key = {props.country.id}>
            <td> {props.country.name} </td>
            <td> {props.country.continent}</td>

        </tr>

    )
}