import React, {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {Link, useHistory, useParams} from "react-router-dom"

export const CreateBook = (props) => {

    const [book, setBook] = useState({
        id: null,
        name: '',
        author: null,
        categoryType: null,
        availableCopies: 0
    });
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            axios.get(`/api/book/${params.id}`)
                .then(response => {
                    setBook({
                        id: response.data.id,
                        name: response.data.name,
                        author: response.data.author.id,
                        categoryType: response.data.categoryType,
                        availableCopies: response.data.availableCopies
                    })
                })
                .catch(error => console.log(error))
        }
        axios.get(`/api/author`)
            .then(response => {
                setAuthors(response.data)
            })
            .catch(error => console.log(error))

        axios.get(`/api/category-type`)
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => console.log(error))
    }, [params.id])

    const onChangeHandle = (event) => {
        const value = event.target.value;
        const key = event.target.name;

        setBook((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();
        if (book.name && book.author && book.categoryType) {
            if (params.id){
                axios.put(`/api/book/${params.id}`, book)
                    .then(response => {
                        history.push("/");
                    })
                    .catch(error => console.log(error))
            }
            else {
                axios.post(`/api/book`, book)
                    .then(response => {
                        history.push("/");
                    })
                    .catch(error => console.log(error))
            }

        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Book</h3>
                        <div className="card-body">
                            <form onSubmit={onSubmitHandle}>
                                <div className="form-group my-1">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" value={book.name} onChange={onChangeHandle} className="form-control"/>
                                </div>
                                <div className="form-group my-1">
                                    <label> Author: </label>
                                    <select
                                        className="form-select"
                                        value={book.author}
                                        name={"author"}
                                        onChange={onChangeHandle}
                                        aria-label="Default select example">
                                        <option value={"default"} >Choose author</option>
                                        {
                                            authors.map(author => {
                                                return <option value={author.id}>{author.name} {author.surname}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group my-1">
                                    <label> Category Type: </label>
                                    <select
                                        className="form-select"
                                        name={"categoryType"}
                                        value={book.categoryType}
                                        onChange={onChangeHandle}
                                        aria-label="Default select example">
                                        <option value={"default"} >Choose category</option>
                                        {
                                            categories.map(category => {
                                                return <option value={category}>{category}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group my-1">
                                    <label> Available Copies: </label>
                                    <input type={"number"} min={0} placeholder="Available Copies:" name="availableCopies" value={book.availableCopies} onChange={onChangeHandle}
                                           className="form-control"/>
                                </div>
                                <div className={"my-2"}>
                                    <button type="submit" className="btn btn-success me-1">Save</button>
                                    <button type={"button"} className="btn btn-danger" onClick={() => history.goBack()}>Cancel</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}