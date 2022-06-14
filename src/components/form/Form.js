import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, Elements } from '../config/Config';
import Element from "../Element";
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2'

const Form = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const {model, id} = useParams()
    const [record, setRecord] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(BASE_URL + Elements[model]['detail_route'] + id, {
                headers: {
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

                    setRecord(data.result);
                    console.log(data.result);
                    // this.setState({ totalReactPackages: data.total })
                })
                .catch(error => {
                    // this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        }
    }, []);

    let handleSubmit = async (event) => {

        event.preventDefault();
        let form = document.getElementById('page-form');
        var formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());
        let data_keys = Object.keys(data);
        let send_data = {};

        data_keys.forEach(key => {
            Elements[model]['form_fields'].forEach(element => {
                if (element.name == key) {
                    switch(element.type) {
                        case 'number':
                        case 'dropdown':
                            send_data[key] = parseInt(data[key]);
                            break;
                        case 'boolean':
                            send_data[key] = (data[key] === 'true');
                            break;
                        default:
                            send_data[key] = data[key];
                    }
                }
            });
        });

        console.log(send_data);
        send_data = JSON.stringify(send_data);
        const token = cookies.get('token');
        let fetch_method = "POST";
        if (id) {
            fetch_method = "PUT";
        }

        let route = BASE_URL + Elements[model]['create_route'];
        if (id) {
            route = BASE_URL + Elements[model]['detail_route'] + id;
        }

        Swal.fire({
            title: 'آیا مطمئنید که رکورد اضافه شود؟',
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
                    body: send_data
                }).then(async response => {
                    const data = await response.json();

                    // setRecord(data.result);
                    console.log(data);
                    //window.location.reload();
                    window.location.replace('/list/' + model)
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
            <form id='page-form' onSubmit={handleSubmit} method="POST">
            {Elements[model]['form_fields'].map((item, i) => {
                if (item.type == 'hidden') {
                    return (<Element field={item} data={record} />)
                } else {
                    return (
                        <div className="mb-3 row" key={i}>
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">{item.title}</label>
                            <div className="col-sm-10"> 
                                <Element field={item} data={record} />
                            </div>
                        </div>
                    )
                }
            })}
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10"> 
                    <button type='submit' defaultValue='ثبت' className='btn btn-primary px-5' >ثبت</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Form