import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Bbsdetail() {

    const seq = useParams().seq;

    const [bbs, setBbs] = useState([]);
    const [commentlist, setCommentlist] = useState([]);

    const [id, setId] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const idChange = (e) => setId(e.target.value);
    const contentChange = (e) => setCommentContent(e.target.value);

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

    const commentData = async (s) => {

        await axios.get("http://localhost:3000/getCommentList", {params: {"bbs" : s}})
                    .then(function(resp) {
                        setCommentlist(resp.data);
                    })
                    .catch(function(error) {
                        alert("getCommentlist error");
                    })
    }

    let history = useNavigate();

    const addCommentData = async (seq, id, commentContent) => {

        await axios.post("http://localhost:3000/addComment", {"bbs":seq, "id":id, "content":commentContent})
                    .then(function(resp) {
                        alert("댓글 등록을 완료하였습니다!");

                        window.location.replace("/bbsdetail/" + seq);
                    })
                    .catch(function(error) {
                        alert("댓글 등록을 실패하였습니다.");
                    })
    }

    const deleteBbsData = async (seq) => {

        await axios.post("http://localhost:3000/deleteBbs", null, {params:{"seq": seq}})
                    .then(function(resp) {
                        alert("게시물 삭제를 완료하였습니다!");

                        history("/bbslist");
                    })
                    .catch(function(error) {
                        alert("게시물 삭제를 실패하였습니다.");
                    })

    }

    useEffect( () => {
        console.log(seq);

        fetchData(seq);

        commentData(seq);

    },[]);

    function backBtn() {

        history("/bbslist");

    }

    function updateBtn() {

        var loginId = sessionStorage.getItem("loginId");

        if(loginId !== bbs.id) {
            alert("권한이 없습니다.");

            window.location.replace("/bbsdetail/" + seq);
        }
        
        history('/bbsupdate', {
            state: {
                seq: seq,
                id: bbs.id,
                title: bbs.title,
                content: bbs.content
            }
        });
        
    }

    function deleteBtn() {
        deleteBbsData(seq);
    }

    function addCommentBtn() {
        addCommentData(seq, id, commentContent);
    }

    return (
        <div>

            <br />

            <table className="table">
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
                        <td><textarea cols="120" rows="18" value={bbs.content} readOnly></textarea></td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center">
                            <button type="button" className="btn btn-primary" onClick={backBtn}>뒤로가기</button>&nbsp;
                            <button type="button" className="btn btn-primary" onClick={updateBtn}>수정</button>&nbsp;
                            <button type="button" className="btn btn-primary" onClick={deleteBtn}>삭제</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>

            <br /><br />
            
            <h5>[댓글]</h5>

            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td><input type="text" onChange={idChange} /></td>
                        </tr>

                        <tr>
                            <th>댓글내용</th>
                            <td>
                                <textarea cols="120" rows="3" onChange={contentChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align="center">
                                <button type="button" className="btn btn-primary" onClick={addCommentBtn}>댓글등록</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

            <br /><br /> 

            <table className="table">
                <thead>
                    <tr>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>등록시간</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        commentlist.map(function(obj, i) {
                            return (
                                <TableRow obj={obj} key={i} cnt={i+1} />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

function TableRow(props) {
    return (
        <tr>
            <td>{props.obj.id}</td>
            <td>{props.obj.content}</td>
            <td>{props.obj.wdate}</td>
        </tr>
    )
}