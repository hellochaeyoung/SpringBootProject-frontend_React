import axios from "axios";
import {useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Pagination from "react-js-pagination";

// import "./bbslist.css";
import "./page.css";

function Bbslist() {
    const [bbslist, setBbslist] = useState([]);

    // 검색용
    const [choiceValue, setChoiceValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    // paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    // link용(함수) == jacascript의 location.href
    let history = useNavigate();

    const fetchData = async (c, s, p) => {

        await axios.get("http://localhost:3000/getBbsReactList", {params: {"choice": c, "search": s, "pageNumber": (p-1)}})
            .then(function(resp) {
                setBbslist(resp.data.bbslist);

                setTotalCnt(resp.data.cnt);

            })
            .catch(function(error) {
                console.log("error");
            })
    }

    useEffect( () => {
        fetchData('', '', 1);
    },[]);
    
    const choiceChange = (e) => setChoiceValue(e.target.value);
    
    const searchChange = (e) => setSearchValue(e.target.value);

    const searchBtn = () => {
        // alert(choiceValue);
        // alert(searchValue);

        history('/bbslist');

        fetchData(choiceValue, searchValue, 1);
        
    }

    const handlePageChange = (page) => {
        setPage(page);
        fetchData(choiceValue, searchValue, page);
    }

    return(
        <div>

            {/* 검색 */}
            <table className="search">
                <tr>
                    <td>
                        <select className="custom-select" value={choiceValue} onChange={choiceChange}>
                            <option selected>선택</option>
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="writer">작성자</option>
                        </select>
                    </td>

                    <td>
                        <input type="text" className="form-control" placeholder="검색어" value={searchValue} onChange={searchChange} />
                    </td>

                    <td>
                        <button type="button" className="btn btn-primary" onClick={searchBtn}>검색</button>
                    </td>

                </tr>
            </table>

            <br />

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>아이디</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bbslist.map(function(object, i) {
                            return (
                                <TableRow obj={object} key={i} cnt={i+1} />
                            )
                        }) 
                    }
                </tbody>
            </table>

            <Pagination 
                activePage={page} 
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange} />

            <div className="my-5 d-flex justify-content-center mb-5">
                <Link className="btn btn-primary" to="/bbswrite">글쓰기</Link>
            </div>
        </div>
    )
}

function TableRow(props) {
    return (
        <tr>
            <th>{props.cnt}</th>
            <td className="underline">
                <Link to={`/bbsdetail/${props.obj.seq}`}>{props.obj.title}</Link>
            </td>
            <td>{props.obj.id}</td>
        </tr>
    )
}

export default Bbslist;
