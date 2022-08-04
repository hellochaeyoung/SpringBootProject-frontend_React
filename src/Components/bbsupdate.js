import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Bbsupdate() {

    const [seq, setSeq] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const location = useLocation();

    useEffect( () => {
        setSeq(location.state.seq);
        setId(location.state.id);
        setTitle(location.state.title);
        setContent(location.state.content);
    }, [])

    const titleHandleChange = (e) => setTitle(e.target.value);
    const contentHandleChange = (e) => setContent(e.target.value);

    let history = useNavigate();

    const fetchData = async(seq, title, content) => {

        await axios.post("http://localhost:3000/updateBbs", {"seq":seq, "title":title, "content":content})
                    .then(function(resp) {
                        alert("게시물 수정이 완료되었습니다!");

                        history("/bbslist");
                    })
                    .catch(function(error) {
                        console.log("update error");
                    })
    }

    function updateBbsBtn() {
        fetchData(seq, title, content);
    }


    return (
        <div>

            <br />

            <h3>게시물 수정</h3>

            <br />
            
            <table className="table">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" value={id} readOnly/></td>
                    </tr>

                    <tr>
                        <th>제목</th>
                        <td><input type="text" value={title} onChange={titleHandleChange} /></td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td><textarea cols="120" rows="18" value={content} onChange={contentHandleChange}></textarea></td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button type="button" className="btn btn-primary" onClick={updateBbsBtn}>수정완료</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}