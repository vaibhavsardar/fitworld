import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../actions/authAction";


axios.defaults.withCredentials = true;

const SignUp = () => {
  const dispatch = useDispatch();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  // const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [respdata, setRespData] = useState();
  const navegate = useNavigate();
  // const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const auth = localStorage.getItem("user");
    console.log("im state=", isAuthenticated);
    if (isAuthenticated) {
      navegate("/");
    }
  });

  const submit = async (e) => {
    // e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/register",
          {
            username: fname + lname,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((resp) => {
          localStorage.setItem("user", JSON.stringify(resp.data._id));
        });
      // setRespData(result.data);
    } catch (error) {
      console.log("error while post api", error);
    }
  };

  return (
    <>
      <section class="register-section spad" style={{ paddingBottom:"150px"}}>
        <div class="containe" style={{ marginInline: "auto", width: "50%"}}>
          <div class="register-text">
            <div class="section-title">
              <h2>Register </h2>
              <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
            </div>
            <form action="#" class="register-form">
              <div class="row">
                <div class="col-lg-6">
                  <label for="name">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="fname"
                    onChange={(e) => {
                      setfname(e.target.value);
                    }}
                  />
                </div>
                <div class="col-lg-6">
                  <label for="email">Last Name</label>
                  <input
                    type="text"
                    id="email"
                    name="lname"
                    onChange={(e) => {
                      setlname(e.target.value);
                    }}
                  />
                </div>
                <div class="col-lg-6">
                  <label for="last-name">Your email address</label>
                  <input
                    type="text"
                    id="last-name"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="col-lg-6">
                  <label for="mobile">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="passsword"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <Link to={"/login"} style={{display:"flex",alignItems:"center", justifyContent:"center"}} >Already Registered User? Click here to login</Link>
              </div>
              
              <button type="submit" class="register-btn" onClick={submit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const prevLocation = useLocation();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const auth = localStorage.getItem("user");
    console.log("im state=", isAuthenticated);
    if (isAuthenticated) {
      // const { redirectTo } = location;
      // navegate(location);
      navegate("/");
    }
  });

  const loginSubmit = async (e) => {
    e.preventDefault();
    // alert("login")

    dispatch(login(email, password));

    
      


    // try {
    //   await axios
    //     .post("http://localhost:5000/login", {
    //       email,
    //       password,
    //     },{
    //       // withCredentials: true
    //     },)
    //     .then((resp) => {
    //       if(resp) {
    //         localStorage.setItem("user", JSON.stringify(resp.data._id));
    //         navegate("/");
    //       } else {
    //         alert("Please enter currect details");
    //       }
    //     });
    // } catch (error) {
    //   console.log("error while post api", error);
    // }
  };

  return (
    <>

      <section class="register-section spad" style={{paddingBottom:"245px"}}>
        <div class="containe" style={{ marginInline: "auto", width: "50%" }}>
          <div class="register-text">
            <div class="section-title">
              <h2>Login Page </h2>
              <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
            </div>
            <form action="#" class="register-form">
              <div class="row">
               
                <div class="col-lg-6">
                  <label for="last-name">Your email address</label>
                  <input
                    type="text"
                    id="last-name"
                    name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
                  />
                </div>
                <div class="col-lg-6">
                  <label for="mobile">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="passsword"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" class="register-btn" onClick={loginSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </section>

    

    </>
  );
};

export { SignUp, Login };
