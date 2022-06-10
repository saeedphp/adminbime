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
                        'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.wXvIHG3FK6pjeLTzKYQub0iSusGC_Dkkf-HTRRzarWEFltR5G08wcQ.REJZoqfNZy9okWD57-kV2Q.6IMKD5mp0_MfcD-wxtaR2m_xW14lrBdMpPMBTHGYzqLLyJ-_yVsRUjnizl1i1V35V0uQZI27VItl4_eed7ydZPkdQGyAEVsqVUwmMLTsnTmZ-NeKcooSayLCGzUltbIP1KpYwgrQ2D6vReuOR5FDcGdh3KOQfGuHLKL3IwAUg6OTQ4UZxfTBzH3p5Hyedk_nQJUSAUUgkW5sfoUhyyVLJgEi9gL7PnTo4cM7wT_aHqgTeixiCQCPwMyMCS2Bm_yTKKh5eLEGUMNyR1ogWu5NEIICokYc0a1Ip2O-AirlA2TuDwInC-x4wvtRVR6k-xU4lJtdTi27y46mug0rX0ljH99vPpSO3DayEATeTifPukkvTfbZlMTRdsWIf7lgmEeYQ9mIr_5PeYNjWDe_XMQBa20N4f69C6jGumQmRlboc2NJ0jSXLazifFmkm99ADY7WMvuUndPSSyinFfamHEtEhI8DxgxIa8rTVsrpOXJq6D0.jCJKh-IdnzsnQil3eusjuQ'
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