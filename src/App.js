import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import List from "./components/list/List";
import Sidebar from "./components/sidebar/Sidebar";
import Cookies from 'universal-cookie';
import { useState } from "react";
import logo from './assets/images/logo.webp';
import { BASE_URL } from "./components/config/Config";
import Users from "./components/list/Users";
import Menu from "./components/list/menu";
import MenuChildren from "./components/list/[menuId]";
import Reset from "./components/form/Reset";

function App() {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(username, password)

    await fetch('https://bimeharman.faradns.ir/api/auth/signin?api-version=1.0', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(async response => {
        const data = await response.json();

        // setRecord(data.result);
        // console.log(data);
        cookies.set('token', data.accessToken.token, { path: '/' });
        console.log(cookies.get('token'));
        window.location.reload();
    })
    .catch(error => {
        setValidate(!validate);
        // this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
  };

    const [shown, setShown] = useState(false);
    const [validate, setValidate] = useState(false);

    const togglePassVisibility = () => {
        setShown(shown ? false : true);
    };

  return (
    <div className="App container-fluid">
      {token ? (
      <div className="row flex-nowrap position-relative">
        <Sidebar />

        <div className="col py-3 position-absolute w-75 content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list/:model" element={<List />} />
              <Route path="/list/users" element={<Users />} />
              <Route path="/list/menu" element={<Menu />} />
              <Route path="/list/menu/:id" element={<MenuChildren />} />
              <Route path="/form/:model/:id" element={<Form />} />
              <Route path="/form/reset/:id" element={<Reset />} />
                <Route path="/create/:model/" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      ) : (
        <div className="login-form w-100 m-auto">
            <span className="logo-wrapper">
                <img src={logo} alt="logo" />
            </span>
          <form onSubmit={submitHandler}>
              {validate ? (
                  <p className="login_error">
                      نام کاربری یا رمز عبور اشتباه می باشد!
                  </p>
              ) : null}
            <div>
              <label htmlFor="username">
                  نام کاربری
              </label>
              <input id="username" name="username" type="text" className="form-control" onChange={e => setUsername(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="password">
                  رمز عبور
              </label>
                <div className="pass_wrapper">
                    <i onClick={togglePassVisibility} className="fa fa-eye"></i>
                    <input id="password" name="password" type={shown ? 'text' : 'password'} className="form-control" onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>

            <div>
              <button className="btn btn-primary mt-3 w-100">
                  ورود
              </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );
}

export default App;
