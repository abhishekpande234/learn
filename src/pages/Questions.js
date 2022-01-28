import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const Questions = () => {
    const [quest, setQuest] = useState([]);

    useEffect(() => {
        loadQuest();
    }, []);

    const loadQuest = async () => {
        const result = await axios.get("http://localhost:3003/Questions");
        setQuest(result.data.reverse());
        console.log(result.data);
    }

    const deleteQuest =async id =>{
        await axios.delete(`http://localhost:3003/Questions/${id}`);
        loadQuest();
    }

    return (
        <div className='container'>
            <div className='py-2'>
                <h1>React Questions and Answers <span className='mx-2'><Link className='btn btn-outline-dark' to="Questions/AddQuestions">Add Question<span className="mx-2"><i class="fa fa-user" aria-hidden="true"></i></span></Link></span></h1>
                
                <div className='pt-3'>
                    <table className="table border shadow">
                        <thead className="thead-dark" variant="dark">
                            <tr>



                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                quest.map((questionn, index) => (< >
                               
                                    <tr>
                                        
                                        <th scope="row">#</th>
                                        <th scope="row">{index+1}</th>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Ouestion</th>
                                        <td scope="row">{questionn.question}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Answers</th>
                                        <td scope="row">{questionn.answer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Actions</th>
                                        <td scope="row">
                                            {/* <Link className="btn btn-primary mx-2">View</Link> */}
                                            <Link className="btn btn-primary mx-2" to={`/Questions/EditQuestions/${questionn.id}`}>Edit <i className='fas fa-pen' aria-hidden="true"></i></Link>
                                            <Link className="btn btn-danger mx-2" onClick={() => deleteQuest(questionn.id)}>Delete <i className="fa fa-trash" aria-hidden="true"></i></Link>

                                        </td>
                                    </tr>
                                    {/* <tr>
                                    <br></br>
                                        
                                    </tr> */}
                                </>


                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Questions;
