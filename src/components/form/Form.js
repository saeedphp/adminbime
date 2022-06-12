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
                        'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.wXvIHG3FK6pjeLTzKYQub0iSusGC_Dkkf-HTRRzarWEFltR5G08wcQ.REJZoqfNZy9okWD57-kV2Q.6IMKD5mp0_MfcD-wxtaR2m_xW14lrBdMpPMBTHGYzqLLyJ-_yVsRUjnizl1i1V35V0uQZI27VItl4_eed7ydZPkdQGyAEVsqVUwmMLTsnTmZ-NeKcooSayLCGzUltbIP1KpYwgrQ2D6vReuOR5FDcGdh3KOQfGuHLKL3IwAUg6OTQ4UZxfTBzH3p5Hyedk_nQJUSAUUgkW5sfoUhyyVLJgEi9gL7PnTo4cM7wT_aHqgTeixiCQCPwMyMCS2Bm_yTKKh5eLEGUMNyR1ogWu5NEIICokYc0a1Ip2O-AirlA2TuDwInC-x4wvtRVR6k-xU4lJtdTi27y46mug0rX0ljH99vPpSO3DayEATeTifPukkvTfbZlMTRdsWIf7lgmEeYQ9mIr_5PeYNjWDe_XMQBa20N4f69C6jGumQmRlboc2NJ0jSXLazifFmkm99ADY7WMvuUndPSSyinFfamHEtEhI8DxgxIa8rTVsrpOXJq6D0.jCJKh-IdnzsnQil3eusjuQ'
                    },
                    method: fetch_method,
                    body: send_data
                }).then(async response => {
                    const data = await response.json();

                    // setRecord(data.result);
                    console.log(data);
                    //window.location.reload();
                    //window.location.replace('/list/' + model)
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