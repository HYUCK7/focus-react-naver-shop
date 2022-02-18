import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade  ()  {
    const[kor, eng, math, total, avg, serKor, setEng, setMath] = useState(0)
    return<Layout><h1>성적표</h1>
    <form >
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>kor</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>eng</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>math</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>total</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>avg</b></label><br />
            <input type="text" /><br />
        </div>
    </form>
    </Layout>

}
