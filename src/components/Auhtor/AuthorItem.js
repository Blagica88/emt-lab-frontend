import React from "react";
import axios from "../../axios/axios";
import {BsFillBookmarkStarFill} from "react-icons/bs";

export const AuthorItem = (props) => {


    return (
        <tr key = {props.author.id}>
            <td> {props.author.name} </td>
            <td> {props.author.surname}</td>
            <td> {props.author.country.name}</td>
        </tr>

    )
}