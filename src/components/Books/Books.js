import React, {useEffect, useState} from "react";
import {BookItem} from "./BookItem";
import axios from "../../axios/axios";
import {AiOutlinePlus} from "react-icons/ai";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import {initPagination, Pagination} from "../UI/Pagination";


export const Books = (props) => {
    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState({...initPagination})

    useEffect(() => {
        fetchData();
    }, [pagination.page, pagination.size])

    const fetchData = () => {
        axios.get(`/api/book?page=${pagination.page}&size=${pagination.size}`)
            .then(response => {
                setBooks(response.data.content)
                setPagination(prevState => {
                    return {
                        ...prevState,
                        totalPages: response.data.totalPages
                    }
                })
            })
            .catch(error => console.log(error))
    }

    const onBookChange = (newBook) => {
        // const newBooks = books;
        // const newBookIndex = newBooks.findIndex(b => b.id === newBook.id);
        // newBooks[newBookIndex] = newBook;
        //
        // setBooks(newBooks);
        fetchData()
    }

    const onDeleteHandle = (id) => {
        axios.delete(`/api/book/${id}`)
            .then(response => {
                fetchData()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={"mx-0 my-3 px-0"}>
            <h2 className="text-center">Books List</h2>
            <div>
                <Link to={"/book/create"} className={"btn btn-outline-dark m-1 ms-0 rounded-2"}><AiOutlinePlus/> Add
                    book</Link>
            </div>
            <br></br>
            <div>
                <table className="table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Book Name</th>
                        <th> Author Name</th>
                        <th> Category Type</th>
                        <th> Available Copies</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map(book => {
                            return <BookItem book={book} onBookChange={onBookChange} onDeleteHandle={onDeleteHandle}
                                             key={book.id}/>
                        })
                    }
                    </tbody>
                </table>
                <Pagination totalPages={pagination.totalPages}
                            page={pagination.page}
                            onChange={(selected) => setPagination({
                                ...pagination,
                                page: selected
                            })}/>

            </div>

        </div>


    )

}