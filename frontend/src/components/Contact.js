import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setmail] = useState("");
    const [msg, setmsg] = useState("");


    const submit = async (e) => {
        // e.preventDefault();
        try {
          await axios
            .post(
              "http://localhost:5000/contactus",
              {
                "name":name,
                "email":email,
                "msg":msg,
              },
              
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
    <div>
        <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-info">
                        <h4>Contacts Us</h4>
                        <div class="contact-address">
                            <div class="ca-widget">
                                <div class="cw-icon">
                                    <img src="img/icon/icon-1.png" alt=""/>
                                </div>
                                <div class="cw-text">
                                    <h5>Our Location</h5>
                                    <p>Vishnupuri Nanded</p>
                                </div>
                            </div>
                            <div class="ca-widget">
                                <div class="cw-icon">
                                    <img src="img/icon/icon-2.png" alt=""/>
                                </div>
                                <div class="cw-text">
                                    <h5>Phone:</h5>
                                    <p>7666267412</p>
                                </div>
                            </div>
                            <div class="ca-widget">
                                <div class="cw-icon">
                                    <img src="img/icon/icon-3.png" alt=""/>
                                </div>
                                <div class="cw-text">
                                    <h5>Mail</h5>
                                    <p>vaibhavs@ gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="contact-form">
                        <h4>Leave A Comment</h4>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input type="text" name='name'onChange={(e)=>{setname(e.target.value)}} placeholder="Your name"/>
                                </div>
                                <div class="col-lg-6">
                                    <input type="text" name='email'onChange={(e)=>{setmail(e.target.value)}} placeholder="Your email"/>
                                </div>
                                <div class="col-lg-12">
                                    <textarea placeholder="Your messages" name='msg' onChange={(e)=>{setmsg(e.target.value)}}></textarea>
                                    <button type="submit" onClick={submit}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  );
}

export default Contact;
