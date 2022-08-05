import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Bbsdetail() {

    var loginId = sessionStorage.getItem("loginId");

    const seq = useParams().seq;

    const [bbs, setBbs] = useState([]);
    const [commentlist, setCommentlist] = useState([]);

    const [id, setId] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const [readCount, setReadCount] = useState(0);

    const contentChange = (e) => setCommentContent(e.target.value);

    const fetchData = async (s) => {
        
        await axios.post("http://localhost:3000/getBbs", null, {params:{"seq": parseInt(s)}})
                    .then(function(resp) {
                        console.log(resp);

                        setBbs(resp.data);
                        setReadCount(resp.data.readCount);
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

    const addCommentData = async (seq, commentContent) => {

        await axios.post("http://localhost:3000/addComment", {"bbs":seq, "id":loginId, "content":commentContent})
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

    const updateReadCount = async (seq) => {

        await axios.post("http://localhost:3000/checkReadBbs", {"bbs":seq, "id":loginId})
                    .then(function(resp) {
                        setReadCount(resp.data);
                    })
                    .catch(function(error) {
                        console.log("error");
                    })
    }

    useEffect( () => {

        fetchData(seq);

        updateReadCount(seq);

        commentData(seq);

    },[]);

    function backBtn() {

        history("/bbslist");

    }

    function updateBtn() {

        if(loginId !== bbs.id) {
            alert("수정할 권한이 없습니다.");
        }else {
            history('/bbsupdate', {
                state: {
                    seq: seq,
                    id: bbs.id,
                    title: bbs.title,
                    content: bbs.content
                }
            });
        }
        
        
        
    }

    function deleteBtn() {

        if(loginId !== bbs.id) {
            alert("삭제할 권한이 없습니다.");
        }else {
            deleteBbsData(seq);
        }

    }

    function addCommentBtn() {
        
        if(loginId == null) {
            alert("로그인 후 이용해주십시오.");

            history("/login");
        }
        addCommentData(seq, commentContent);
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
                        <th>조회수</th>
                        <td>{readCount}</td>
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
                            <td><input type="text" value={loginId} readOnly disabled={loginId === null ? true : false}/></td>
                        </tr>

                        <tr>
                            <th>댓글내용</th>
                            <td>
                                <textarea id="commentContent" cols="120" rows="3" onChange={contentChange} disabled={loginId === null ? true : false}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align="center">
                                <button type="button" className="btn btn-primary" onClick={addCommentBtn} disabled={loginId === null ? true : false}>댓글등록</button>
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