import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const [id, setId] = useState()
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
        </Layout>
} 
