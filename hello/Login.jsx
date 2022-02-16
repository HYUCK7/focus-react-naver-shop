import React from "react";

const Login=()=>{
    return <><h1>로그인폼</h1>
    
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>Username</b></label><br/>
            <input type="text" /><br/>
            <label htmlFor=""><b>PassWord</b></label><br/>
            <input type="text" /><br/>
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
        </>
} 
export default Login