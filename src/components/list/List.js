import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {BASE_IMAGE_URL, BASE_URL, Elements} from '../config/Config'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

const List = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const {model} = useParams()
    const [allRecords, setAllRecords] = useState([]);

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

                // // check for error response
                // if (!response.result) {
                //     // get error message from body or default to response statusText
                //     const error = (data && data.message) || response.statusText;
                //     return Promise.reject(error);
                // }

                setIsLoading(false);
                setAllRecords(data.result);
                // this.setState({ totalReactPackages: data.total })
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
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
                        'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ZbbBOWa0qAXAGkCAy6IhdPAe8a7ksykBSMJAWRt0oPxVLTyJNx04lA.Qb26tcLJFtrBL2ELtt38iQ.Vqiq7pT7_PyfQONwXjuSmUsf_lUKChfNXpFtZPfdAIbiXbxM56B5_wLAOJ77CI1ryyshe2J6CI-H5cV5-hx2GYjf6tb4S18HJA8_EMd3aTsHczvJ5cbNmKDVFx9S2YK7wnGOjeL-on65qvIgzEj--MuBg-N-UdCW3UP1W4XXM34DYST2FYphoaF5PaGveHOVaFT5oRBoI6ona6EXiEBRK42U7ERtRNQfA8ACIbYhH5FCRqsghLJmUIbz6VXkEDFQ1Ef0vJZxxbJ7QjY0G1k7c--fR5W44csQtNeaOOK9cSHHPfZtdlkRci54MNGEPtKJQ-KPmYccbu2Mk0P_lu0COquSOVJjrdNB6wMSk71sM8ZEAc_X35LZDCuR6WvOyqWhbKW-biL9TzfRGQQT_jL7N4WC1lk-q-g86yq40TrCNgHkOZoYJByIuKjnFFlC_SfbKc9_DV-UTexu2g2Ny4GsOQ1v8yCWh-ex8zH_le6mXOk.2S7HTDscwwmWn8ln9NFOZA'
                    },
                    method: fetch_method,
                })
                    .then(async response => {
                        const data = await response.json();

                        // setRecord(data.result);
                        console.log(data);
                        //window.location.reload();
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
                {!isLoading && allRecords.length > 0 && allRecords.map((data_item, i) => (
                    <tr key={i}>
                        {Elements[model]['list_fields'].map((item, j) => {
                            switch (item.type) {
                                case 'btn' :
                                    return (
                                        <td key={j}>
                                            <Link className='btn btn-light me-3' to={`/form/${model}/${data_item.id}`}>ویرایش</Link>
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
                                                <img src={BASE_IMAGE_URL + data_item[item.get.field][item.get.url]}/>
                                            </td>
                                        )
                                    }else if (item.type === "boolean") {
                                        if (data_item[item.name] === true) {
                                            return <td key={j}>
                                                بله
                                            </td>
                                        } else{
                                            return (
                                                <td key={j}>
                                                    خیر
                                                </td>
                                            )
                                        }
                                    } else {
                                        return (
                                            <td key={j} dangerouslySetInnerHTML={{__html: data_item[item.name]}}></td>)
                                    }
                            }
                        })}
                    </tr>
                ))}
                {isLoading && <p>Loading...</p>}
                </tbody>
            </table>
        </div>
    )
}

export default List