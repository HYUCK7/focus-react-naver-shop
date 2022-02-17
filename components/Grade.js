import React from "react";
import Layout from "../containers/Layout";
export default function Grade  ()  {
    return<Layout><h1>성적표</h1>
    <form >
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>국어</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>영어</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>수학</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>total</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>avg</b></label><br />
            <input type="text" /><br />
        </div>
    </form>
    </Layout>

}
