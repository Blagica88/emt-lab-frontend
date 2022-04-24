import React from "react";
import axios from "../../axios/axios";
import {BsFillBookmarkStarFill} from "react-icons/bs";
import {Link} from "react-router-dom";

export const BookItem = (props) => {

    const markAsTakenHandler = () => {
        axios.patch(`/api/book/${props.book.id}?isTaken=true`)
            .then(response => {
                props.onBookChange(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <tr key = {props.book.id}>
            <td> {props.book.name} </td>
            <td> {props.book.author.name}</td>
            <td> {props.book.categoryType}</td>
            <td> {props.book.availableCopies}</td>

            <td>
                <Link to={`/book/edit/${props.book.id}`}  className="btn btn-info">Edit </Link>
                <button style={{marginLeft: "10px"}}  className="btn btn-danger" onClick={() => props.onDeleteHandle(props.book.id)}>Delete </button>
                <button style={{marginLeft: "10px"}} className={"btn btn-outline-dark"} onClick={markAsTakenHandler}><BsFillBookmarkStarFill/></button>
            </td>
        </tr>

    )
}