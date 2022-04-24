import React, {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {CountryItem} from "./CountryItem";


export const Countries = (props) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(`/api/country`)
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <div className={"mx-0 my-3 px-0"}>
            <h2 className="text-center">Countries List</h2>

            <div>
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Name</th>
                        <th> Continent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        countries.map( country => {
                            return <CountryItem country={country} key={country.id}/>
                        })
                    }
                    </tbody>
                </table>

            </div>

        </div>


    )
}