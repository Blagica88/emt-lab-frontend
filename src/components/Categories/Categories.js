import React, {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {CategoryItem} from "./CategoryItem";


export const Categories = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`/api/category-type`)
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <div className={"mx-0 my-3 px-0"}>
            <h2 className="text-center">Category List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> Categories:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        categories.map(category => {
                            return <CategoryItem category={category} key={category}/>
                        })
                    }
                    </tbody>
                </table>

            </div>

        </div>


    )
}