import React from "react";


export const CategoryItem = (props) => {


    return (
        <tr key = {props.category}>
            <td> {props.category} </td>
        </tr>

    )
}