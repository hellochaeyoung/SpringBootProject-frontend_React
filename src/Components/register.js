import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const idChange = (e) => {
        setId(e.target.value);
    }

    const pwChange = (e) => {
        setPw(e.target.value);
    }

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    let history = useNavigate();

    const register = async() => {

        await axios.post("http://localhost:3000/register", {"id":id, "pw":pw, "name":name, "email":email})
                    .then(function(resp) {
                        if(resp.data === 1) {
                            alert("회원가입이 완료되었습니다!");

                            history("/login");
                        }
                    })
                    .catch(function(resp) {
                        alert("회원가입 실패하였습니다.")
                    })
    }

    function registerBtn() {
        register();
    }

    return (
        <div>
            <br />
            <h2>회원가입</h2>
            <br />
            <table className="table">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input type="text" onChange={idChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input type="password" onChange={pwChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>이름</th>
                        <td>
                            <input type="text" onChange={nameChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>이메일</th>
                        <td>
                            <input type="text" onChange={emailChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button type="button" className="btn btn-primary" onClick={registerBtn}>회원가입</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}