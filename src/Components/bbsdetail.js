import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Bbsdetail() {

    const seq = useParams().seq;


    const [bbs, setBbs] = useState([]);

    const fetchData = async (s) => {
        
        await axios.post("http://localhost:3000/getBbs", null, {params:{"seq": parseInt(s)}})
                    .then(function(resp) {
                        console.log(resp);

                        setBbs(resp.data);
                    })
                    .catch(function(error) {
                        console.log("error");
                    })
    }

    useEffect( () => {
        console.log(seq);

        fetchData(seq);
    },[]);

    let history = useNavigate();

    function backBtn() {

        history("/bbslist");

    }

    function updateBtn() {
        
        history('/bbsupdate', {
            state: {
                seq: seq,
                id: bbs.id,
                title: bbs.title,
                content: bbs.content
            }
        });
        
    }

    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>{bbs.id}</td>
                    </tr>

                    <tr>
                        <th>제목</th>
                        <td>{bbs.title}</td>
                    </tr>

                    <tr>
                        <th>작성시간</th>
                        <td>{bbs.wdate}</td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td><textarea cols="50" rows="18" value={bbs.content} readOnly></textarea></td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button type="button" onClick={backBtn}>뒤로가기</button>
                        </td>
                        <td colSpan="2" align="center">
                            <button type="button" onClick={updateBtn}>글수정</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}