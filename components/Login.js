import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const[inputs, setInputs] = useState({})
    const{id, pw} = inputs
    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} =e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const loginRequest = {id,pw}
        alert(`Login: ${JSON.stringify(loginRequest)}`)
    }
    return<Layout>
        <form>
            <h1>Login</h1>
            <div>
                <label><b>ID</b></label>
                <input type ="text" name ="id" onChange={handleChange}/><br/>
                <label><b>PW</b></label>
                <input type= "text" name ="pw" onChange={handleChange}/><br/>
                <button onClick={handleClick}>Login</button>
            </div>
        </form>
    </Layout>
    
    /*const [id, setId] = useState()
    const [password, setPassword] = useState()
    const res =()=>{
        let id = document.getElementById('id').value
        let password = document.getElementById('password').value
        setId(id)
        setPassword(password)
    }
    return <Layout><h1>로그인폼</h1>
    
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>id</b></label><br/>
            <input id = "id" type = ""/><br/>
            <label htmlFor=""><b>passWord</b></label><br/>
            <input password ="password" type ="" /><br/>
            <button>Login</button><br/>
            <label htmlFor="">
                <input type="text" />
            </label>
        </div>

        <div>
            <button>Cancel</button>
            <span>Forgot <a href="">password?</a><br/>
            </span>
        </div>
    </form>
        </Layout>*/
} 
