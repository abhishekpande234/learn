import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddQuestions = () => {
    let history = useHistory();
    const [quest,setQuest] = useState({
        question:"",
        answer:""
    });

    const{question,answer} = quest;


    const onInputChange = e =>{
        setQuest({...quest, [e.target.name] : e.target.value})
        
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/Questions", quest);
        alert("New Question and Answer added..!!");
        history.push("/Questions");
    };

    return (
        <div className='container'>
            <div className='py-3'>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group mt-4">
                    <h1>Add Question and Answer</h1>
                        <label for="idQuestion">Question</label>
                        <textarea class="form-control" id="idQuestion" rows="2" name="question" value={question} onChange={e => onInputChange(e)}></textarea>
                    </div>

                    <div class="form-group mt-4">
                        <label for="idAnswer1">Answer</label>
                        <textarea class="form-control" id="idAnswer1" rows="3"name="answer" value={answer} onChange={e => onInputChange(e)}></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary mt-3" >Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddQuestions;
