import {React, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const idChange = (e) => {
        setId(e.target.value);
    }

    const pwChange = (e) => {
        setPw(e.target.value);
    }

    let history = useNavigate();

    let sessionStorage = window.sessionStorage;

    useEffect( () => {
        var loginId = sessionStorage.getItem("loginId");
        if(loginId !== null) {
           history("/bbslist"); 
        }
    }, []);

    const login = async () => {
        
        await axios.post("http://localhost:3000/login", {"id":id, "pwd":pw})
                    .then(function(resp) {
                        if(resp.data === "FAIL") {
                            alert("아이디와 비밀번호가 일치하지 않습니다.");
                        }else {
                            sessionStorage.setItem("loginId", resp.data);

                            alert("로그인을 성공하였습니다!");

                            history("/bbslist");
                        }
                        
                    })
                    .catch(function(error) {
                        alert("로그인에 실패했습니다.");
                    })
    }

    function loginBtn() {
        login();
    }

    function regiBtn() {
        history("/register");
    }

    return (
        <div>
            <br />
            <h2>로그인</h2>
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
                        <td colSpan="2" align="center">
                            <button type="button" onClick={loginBtn}>로그인</button>&nbsp;
                            <button type="button" onClick={regiBtn}>회원가입</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}