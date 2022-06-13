import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {BASE_IMAGE_URL, BASE_URL, Elements} from '../config/Config'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const List = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const {model} = useParams()
    const [allRecords, setAllRecords] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + Elements[model]['list_route'], {
            headers: {
                'cultureLcid': 1065,
                'Authorization': `Bearer ${token}`
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

            setAllRecords(data.result);
            // this.setState({ totalReactPackages: data.total })
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
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
                        'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.KW6MzZ_A97AuA0LS7uoKJWGIhGXlpNtZt0gEzTAekTZqmURAYKdd3g.rJ_VqqRFqt-cEdGbg-FrCA.oOA7D99RTbsiSCd6ZSZXHLTWbd75NLBIcMmwED6TS6M70uZkamCuHKIZy5W9gzIrMzzu95MmNQh2-sowZsbSZzjOFNcwiC-B_6rUIJ11esKxeeDC53Cq8RdAc0JgnwIcj3i64Z7nSG3zw1famdOvKjDVjYk-s6qR8LRRKmrxLvew116VP4P0KRLxS32iZ6jf2f8aRWTHqcNlf7KboNRnm6UKYfRpY3OCNPYhb69qJlBYES_5AsWTmgP6o2E8wRVIzLDiqi28dwWJMSOj68b3SD3B3z0zD1NQz7aCacEFVO4kCkVQ6hEDVk9JiEgLTySxXzmb5gr2-MlG28EsGk3kzQEGkSVT7gBn2pdvJ44CraBH4ILPNXWzyslw2hhiuYXMOaD2Q9Rl1dtLxfvsKDt4_eCZuWW2BMY5LhLbdK3uys3V4_n4-KL0_4TDAU_INbYMDK56G2OPxKODq4ZvVEWeKuQy8o5KgTBfiwsqrDbAkak.4LuAROEfc7LUfoADAxHVZg'
                    },
                    method: fetch_method,
                })
                    .then(async response => {
                        const data = await response.json();

                        // setRecord(data.result);
                        console.log(data);
                        window.location.reload();
                    })
                    .catch(error => {
                        // this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });
            }
          })
    }

    return (
        <div>
            <Link to={`/create/${model}`}>
                <button className="btn btn-info mb-4">
                    افزودن مورد جدید
                </button>
            </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {Elements[model]['list_fields'].map((item, i) => (
                            <th key={i}>{item.title}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allRecords.map((data_item, i) => (
                        <tr key={i}>
                            {Elements[model]['list_fields'].map((item, j) => {
                                switch (item.type) {
                                    case 'object':
                                        return (<td key={j} dangerouslySetInnerHTML={{__html: data_item[item.name][item.object_field]}}></td>)
                                    case 'list':
                                        return (<td key={j} dangerouslySetInnerHTML={{__html: data_item[item.name].map((value, z) => (value.name))}}></td>)
                                    default:
                                        if (item.type === "image") {
                                            return (
                                                <td className="img_file">
                                                    <img src={BASE_IMAGE_URL + data_item[item.get.field][item.get.url]} />
                                                </td>
                                            )
                                        } else if (item.type === "boolean"){
                                            if (data_item[item.name] == true) {
                                                return <td>
                                                    بله
                                                </td>
                                            }else {
                                                return (
                                                    <td>
                                                        خیر
                                                    </td>
                                                )
                                            }
                                        }
                                        else {
                                            return (<td key={j} dangerouslySetInnerHTML={{__html: data_item[item.name]}}></td>)
                                        }

                                }
                            })}
                            <td>
                                <Link className='btn btn-light me-3' to={`/form/${model}/${data_item.id}`}>ویرایش</Link>
                                <button className="btn btn-danger" onClick={() => {deleteItem(data_item.id)}} id={data_item.id}>حذف</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List