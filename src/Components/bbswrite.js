import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Bbswrite() {

    const [idValue, setIdValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const idHandleChange = (e) =>  setIdValue(e.target.value);
    const titleHandleChange = (e) => setTitleValue(e.target.value);
    const contentHandleChange = (e) => setContentValue(e.target.value);

    let history = useNavigate();

    const fetchData = async (id, title, content) => {

        await axios.post("http://localhost:3000/addBbs", {"id": id, "title": title, "content": content})
                    .then(function(resp) {
                        alert("게시물 등록이 완료되었습니다!");

                        history("/bbslist");
                    })
                    .catch(function(error) {
                        console.log("error");
                    }) 
    }

    function addBbsBtn() {

        fetchData(idValue, titleValue, contentValue);

    }

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" value={idValue} onChange={idHandleChange} /></td>
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