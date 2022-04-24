import React, {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {AuthorItem} from "./AuthorItem";


export const Authors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get(`/api/author`)
            .then(response => {
                setAuthors(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <div className={"mx-0 my-3 px-0"}>
            <h2 className="text-center">Authors List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> Name</th>
                        <th> Surname</th>
                        <th> Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        authors.map(author => {
                            return <AuthorItem author={author} key={author.id}/>
                        })
                    }
                    </tbody>
                </table>

            </div>

        </div>


    )
}