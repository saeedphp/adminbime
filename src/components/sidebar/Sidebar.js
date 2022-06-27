import React from 'react'
import {Menu} from '../config/Menu'
import logo from '../../assets/images/logo.webp'
import Cookies from "universal-cookie";
import {Accordion} from "react-bootstrap";

const Sidebar = () => {

    const cookies = new Cookies();
    const token = cookies.get('token');

    const submitHandler = (e) => {
        e.preventDefault();

        cookies.remove('token', {path: "/", redirect: '/'});
        console.log(cookies.get('token'));
        window.location.reload();
    };

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar_bg">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/"
                   className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none m-auto">
                    <img src={logo} alt="logo"/>
                </a>
                {token ? (
                    <a className="text-black text-center w-100 my-3" onClick={submitHandler}>
                        <i className="fa fa-sign-out"></i>
                        خروج
                    </a>
                ) : null}
                <Accordion defaultActiveKey="0">
                    {Menu.map((item, i) => (
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header className="menu_link">
                                <i className={item.icon} />
                                مدیریت
                                {" " + item.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href={`/list/${item.name}`} className="nav-link align-middle px-0 text-black">
                                    <span className="ms-1 d-none d-sm-inline">{item.title}</span>
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

            </div>
        </div>

    )
}

export default Sidebar