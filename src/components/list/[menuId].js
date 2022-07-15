import {Fragment} from "react";
import {useEffect, useState} from "react";
import {BASE_URL} from "../config/Config";
import {useParams} from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const MenuChildren = () => {


    const cookies = new Cookies();
    const token = cookies.get('token');
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState([]);
    const [parent, setParent] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            fetch(BASE_URL + "cms/menuitem/list/active/" + id, {
                headers: {
                    'cultureLcid': 1065,
                }
            })
                .then(async response => {
                    const data = await response.json();

                    // // check for error response
                    // if (!response.result) {
                    //     // get error message from body or default to response statusText
                    //     const error = (data && data.message) || response.statusText;
                    //     return Promise.reject(error);
                    // }
                    setMenu(data.result);
                    // this.setState({ totalReactPackages: data.total })
                })

                .catch(error => {
                    // this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        }

    }, []);

    const deleteItem = (id) => {

        let fetch_method = "DELETE";
        let route = BASE_URL + 'cms/menuitem/' + id;

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

    /*useEffect(() => {
        fetch(BASE_URL + "cms/menuitem/list", {
            headers: {
                'cultureLcid': 1065,
            }
        })
            .then(async response => {
                const data = await response.json();

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }
                setParent(data.result);
                // this.setState({ totalReactPackages: data.total })
            })

            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }, []);*/

    return (
        <Fragment>
            <div className="col py-3 position-absolute w-100 content">
                <div><a href="/create/MenuItems">
                    <button className="btn btn-info mb-4">افزودن مورد جدید</button>
                </a>
                    <ul className="d-flex align-items-center justify-content-start text-right">
                        <li><a href="/"><i className="fa fa-home ml-1"></i>خانه</a></li>
                        <span className="mr-1 ml-1">/</span>
                        <li><a>منو</a></li>
                    </ul>

                    <table id="myTable" className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>عنوان</th>
                            <th>آدرس</th>
                            {/*<th>والد</th>*/}
                            <th>ویرایش</th>
                            <th>حذف</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {menu.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.url}
                                    </td>
                                    {/*<td>
                                        {parent.map((value, i) => {
                                            return (
                                                <p key={i}>
                                                    {id === value.id && value.title}
                                                </p>
                                            )
                                        })}
                                    </td>*/}
                                    <td><a className="btn btn-light me-3" href={`/form/MenuItems/${item.id}`}>ویرایش</a></td>
                                    <td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => {deleteItem(item.id)}} id={item.id}>حذف</button>
                                        </td>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
};

export default MenuChildren;