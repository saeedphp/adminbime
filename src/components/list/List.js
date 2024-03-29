import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {BASE_ADD_USER_URL, BASE_IMAGE_URL, BASE_URL, Elements} from '../config/Config'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import {Spinner} from "react-bootstrap";
import PageTitle from "../PageTitle";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const List = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const {model} = useParams()
    const [allRecords, setAllRecords] = useState([]);
    const [addUser, setAddUser] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(BASE_URL + Elements[model]['list_route'], {
            headers: {
                'cultureLcid': 1065,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(async response => {
                const data = await response.json();
                setIsLoading(false);
                setAllRecords(data.result);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setIsLoading(false);
            });
    }, []);

    const deleteItem = (id) => {

        let fetch_method = "DELETE";
        let route = BASE_URL + Elements[model]['detail_route'] + id;

        Swal.fire({
            title: 'آیا مطمئنید که رکورد حذف شود؟',
            icon: "warning",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'بله',
            denyButtonText: `خیر`,
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(route, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    method: fetch_method,
                })
                    .then(async response => {
                        if (!response.ok) {
                            throw new Error('عملیات مورد نظر اجرا نشد!');
                        } else if (response.ok) {
                            const data = await response.json();

                            // setRecord(data.result);
                            console.log(data);
                            window.location.reload();
                        }

                    })
                    /*.catch(error => {
                        // this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });*/
                    .then((data) => data.json())
                    .then(console.log).catch((error) => {
                    setError(error.message)
                });
            }
        })
    }

    const currPath = window.location.href;
    //const curr = window.location.pathname;
    //console.log('curr is: ' + curr);

    const [inputText, setInputText] = useState("");
    const onChange = (event) => {
        setInputText(event.target.value);
    };

    function search() {
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        table = document.getElementById('myTable');
        tr = table.getElementsByTagName('tr');

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display = "";
                }else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    return (
        <>
            <PageTitle title={Elements[model]['metaTitle']}>
                <div>


                    {currPath !== BASE_ADD_USER_URL + 'list/PersonalUsers' && currPath !== BASE_ADD_USER_URL + 'list/VendorsUsers' && currPath !== BASE_ADD_USER_URL + 'list/suggestions' &&  currPath !== BASE_ADD_USER_URL + 'list/ContactUs' && (
                        <Link to={`/create/${model}`}>
                            <button className="btn btn-info mb-4">
                                افزودن مورد جدید
                            </button>
                        </Link>
                    )}
                    {currPath === BASE_ADD_USER_URL + 'list/PersonalUsers' && (
                        <Link to={`/list/users`}>
                            <button className="btn btn-info mb-4">
                                افزودن
                            </button>
                        </Link>
                    )}
                    {currPath === BASE_ADD_USER_URL + 'list/VendorsUsers' && (
                        <Link to={`/list/users`}>
                            <button className="btn btn-info mb-4">
                                افزودن
                            </button>
                        </Link>
                    )}

                    {/*<Link to={`/create/${model}`}>
                <button className="btn btn-info mb-4">
                    افزودن مورد جدید
                </button>
            </Link>*/}

                    <ul className="d-flex align-items-center justify-content-start text-right">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home ml-1"></i>
                                خانه
                            </Link>
                        </li>
                        <span className="mr-1 ml-1">
                            /
                        </span>
                        <li>
                            <a>
                                {Elements[model]['metaTitle']}
                            </a>
                        </li>
                    </ul>

                    <div className="search_bar">
                        <input type="text" id="myInput"  onChange={search} placeholder="جستجو..."/>
                        <i className="fa fa-search"></i>
                    </div>
                    {currPath === BASE_ADD_USER_URL + 'list/ContactUs' && (
                        <ReactHTMLTableToExcel table="myTable" filename="Export ContactUs Data" sheet="Sheet" buttonText="Excel" className="download-table-xls-button" />
                    )}
                    {currPath === BASE_ADD_USER_URL + 'list/suggestions' && (
                        <ReactHTMLTableToExcel table="myTable" filename="Export ContactUs Data" sheet="Sheet" buttonText="Excel" className="download-table-xls-button" />
                    )}
                    {error && <p className="login_error">{error}</p>}
                    <table id="myTable" className='table table-bordered table-striped'>
                        <thead>
                        <tr>
                            {Elements[model]['list_fields'].map((item, i) => (
                                <th key={i}>{item.title}</th>
                            ))}
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading && allRecords.length > 0 && allRecords.map((data_item, i) => (
                            <>

                                <tr key={i}>
                                    {Elements[model]['list_fields'].filter((item) => {
                                        return (
                                            item.title.includes(inputText)
                                        )
                                    }).map((item, j) => {
                                        switch (item.type) {
                                            case 'btn' :
                                                return (
                                                    <td key={j}>
                                                        <Link className='btn btn-light me-3'
                                                              to={`/form/${model}/${data_item.id}`}>ویرایش</Link>
                                                    </td>
                                                )
                                            case 'resetPassword' :
                                                return (
                                                    <td key={j}>
                                                        <Link className='btn btn-light me-3'
                                                              to={`/form/reset/${data_item.id}`}>ویرایش رمز</Link>
                                                    </td>
                                                )
                                            case 'removeBtn' :
                                                return (
                                                    <td key={j}>
                                                        <button className="btn btn-danger" onClick={() => {
                                                            deleteItem(data_item.id)
                                                        }} id={data_item.id}>حذف
                                                        </button>
                                                    </td>
                                                )
                                            case 'object':
                                                return (<td key={j}
                                                            dangerouslySetInnerHTML={{__html: data_item[item.name][item.object_field]}}></td>)
                                            case 'list':
                                                return (<td key={j}
                                                            dangerouslySetInnerHTML={{__html: data_item[item.name].map((value, z) => (value.name))}}></td>)
                                            default:
                                                if (item.type === "image") {
                                                    return (
                                                        <td key={j} className="img_file">
                                                            <img
                                                                src={BASE_IMAGE_URL + data_item[item.get.field][item.get.url]}/>
                                                        </td>
                                                    )
                                                } else if (item.type === "boolean") {
                                                    if (data_item[item.name] === true) {
                                                        return <td key={j}>
                                                            بله
                                                        </td>
                                                    } else {
                                                        return (
                                                            <td key={j}>
                                                                خیر
                                                            </td>
                                                        )
                                                    }
                                                } else {
                                                    return (
                                                        <td key={j}
                                                            dangerouslySetInnerHTML={{__html: data_item[item.name]}}></td>)
                                                }
                                        }
                                    })}
                                </tr>
                            </>
                        ))}
                        {isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                        </tbody>
                    </table>
                </div>
            </PageTitle>
        </>
    )
}

export default List