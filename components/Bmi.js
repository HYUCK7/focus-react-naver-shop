import React from "react"
import Layout from "../containers/Layout";
export default function Bmi(){
    return <Layout><h1>BMI</h1>
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>length</b></label><br/>
            <input type="text" />
            <label htmlFor=""><b>weight</b></label>
            <input type="text" />
        </div>
    </form>
    </Layout>
}
