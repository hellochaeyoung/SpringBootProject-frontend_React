import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Bbswrite() {

    const [idValue, setIdValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const titleHandleChange = (e) => setTitleValue(e.target.value);
    const contentHandleChange = (e) => setContentValue(e.target.value);

    let history = useNavigate();

    var loginId = "";

    const checkLogin = () => {
        loginId = sessionStorage.getItem("loginId");
        setIdValue(loginId);

        if(loginId == null) {
            alert("로그인 후 이용해주십시오.");

            history("/login");
        }
    }

    useEffect( () => {
        checkLogin();
    }, []);

    const fetchData = async (id, title, content) => {

        await axios.post("http://localhost:3000/addBbs", {"id": id, "title": title, "content": content})
                    .then(function(resp) {
                        alert("게시물 등록이 완료되었습니다!");

                        history("/bbslist");
                    })
                    .catch(function(error) {
                        alert("게시물 등록을 실패하였습니다.");
                    }) 
    }

    function addBbsBtn() {

        fetchData(idValue, titleValue, contentValue);

    }

    return (
        <div>
            <h3>게시물 작성</h3>
            <br />
            
            <table className="table">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" value={idValue} readOnly /></td>
                    </tr>

                    <tr>
                        <th>제목</th>
                        <td><input type="text" value={titleValue} onChange={titleHandleChange} /></td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td><textarea cols="120" rows="18" value={contentValue} onChange={contentHandleChange}></textarea></td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button type="button" className="btn btn-primary" onClick={addBbsBtn}>작성완료</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>

        </div>
    )
}