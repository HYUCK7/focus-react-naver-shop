import React from "react";

const Calc =()=>{
    return <><h1>계산기</h1>
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor="">
                <b>First Num</b>
            </label><br/>
            <input type="text" /><br/>

            <label htmlFor="">
                <b>연산자</b>
            </label><br/>
            <input type="text" /><br/>

            <label htmlFor="">
                <b>Second Num</b>
            </label><br/>
            <input type="text" /><br/>

            <button>계산</button><br/>
            <label>
                <input type="text" />
            </label>
        </div>
        <div>
            <button>Cancel</button>
        </div>
    </form>
    </>
    
}
export default Calc;