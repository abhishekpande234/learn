import axios from 'axios';
import React, { useEffect, useState } from 'react';




const EffectTutorial = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {

                setData(response.data);

                console.log(response.data);

                console.log(response.data[0]);

            });
    }, []);

    return (
        <div className="container">
            <div className="py-3">
                <h1>useEffect Tutorial </h1>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Sr. no.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default EffectTutorial;