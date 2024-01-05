import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import {useNavigate} from "react-router-dom"

function Test() {
  const [data, setData] = useState({});
  // const [resp, setResp] = useState("resp");
  const [reco, setRecord] = useState([]);

  // const navigate = useNavigate();

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/getdata`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecord(records);
      // console.log("recccc:",records);
    }

    // getRecords();
    return;
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submit = async () => {

    try {

      return await axios.post("http://localhost:5000/add",data);
      
    } catch (error) {

      console.log('error while post api',error);
      
    }

    // axios.post("http://localhost:5000/add",data).then((resp)=>{
    //    console.log(resp);
    // });

    // let result = await fetch("http://localhost:5000/record", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).catch((error) => {
    //   window.alert(error);
    //   return;
    // });
    // // setResp(await result.json());
    // console.warn(result);
    // console.log(result);
    // //  navigate("/");
    // window.location.reload(false);
  };

  return (
    <>
      <h1>name:{data.name}</h1>
      <h1>sname:{data.sname}</h1>
      <h2>{JSON.stringify(reco)}</h2>
      <form >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="sname"
          onChange={handleChange}
          placeholder="Sname"
        />

        <button type="submit" name="submit" onClick={submit}>
          calculator
        </button>
      </form>
    </>
  );
}

export default Test;
