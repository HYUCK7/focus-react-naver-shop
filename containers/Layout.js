import React from "react";
import styled from "styled-components";
import Bmi from "../components/Bmi";
import Footer from "./Footer";
import Header from "./Header";

const Layout =(props)=>{
    return (<div>
        <Table>
            <Tr>
                <Td><Header/></Td>
            </Tr>
            <Tr>
                <Td>{props.children}</Td>
            </Tr>
            <Tr>
                <Td><Footer></Footer></Td>
            </Tr>
        </Table>
        </div>)
}
const Table= styled.table`
    border: 1px solid black;
    width: 1000px;
    height: 500px;
`
const Tr = styled.tr`
    border: 1px solid black
`
const Th = styled.th`
    border: 1px solid black
`
const Td = styled.td`
    border: 1px solid black
`
export default Layout