import React from 'react'
import {Menu} from '../config/Menu'
import logo from '../../assets/images/logo.webp'
import Cookies from "universal-cookie";
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                        <div key={i}>
                            <Accordion.Item eventKey={i}>
                                <Accordion.Header className="menu_link">
                                    <i className={item.icon} />
                                    مدیریت
                                    {" " + item.title}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {item.children && <ul>
                                        {item.children.map((child, i) => {
                                            return (
                                                <a className="nav-link align-middle px-0 text-black" href={`/list/${child.name}`}>
                                                    {child.title}
                                                </a>
                                            )
                                        })}
                                    </ul>}
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion>

            </div>
        </div>

    )
}

export default Sidebar