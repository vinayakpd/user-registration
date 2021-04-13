import React, { useState } from 'react'

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        EmailID:"",
        state:"",
        JobTitle:"",
        Role:""

    });
    const [records, setRecords] = useState([]);


    const handleInput=(e)=>{
        const name =e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({...userRegistration, [name]:value});

    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord = {...userRegistration, id:new Date().getTime().toString()}
        setRecords([...records, newRecord]);
        setUserRegistration({username:"", EmailID:"",state:"",JobTitle:"", Role:""});
    }


    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text"
                value={userRegistration.username}
                onChange={handleInput}
                name="username" id="username"/>
            </div>

           

            <div>
                <label htmlFor="EmailID">E-mail ID</label>
                <input type="text"
                value={userRegistration.EmailID}
                onChange={handleInput}
                name="EmailID" id="EmailID"/>
            </div>

            <div>
                <label htmlFor="state">state</label>
                <input type="text"
                value={userRegistration.state}
                onChange={handleInput}
                name="state" id="state"/>
            </div>

            <div>
                <label htmlFor="JobTitle">Job Title</label>
                <input type="text"
                value={userRegistration.JobTitle}
                onChange={handleInput}
                name="JobTitle" id="JobTitle"/>
            </div>

            <div>
                <label htmlFor="Role">Role</label>
                <input type="text"
                value={userRegistration.Role}
                onChange={handleInput}
                name="Role" id="Role"/>
            </div>
            <button type="submit">ADD</button>
            <button type="submit">Cancel</button>
        </form>
        <div>
            {
                records.map((curElem)=>{
                    const {id, username, EmailID, state, JobTitle, Role} = curElem;
                    return (
                        <div className="showDataStyle" key={id}>
                            <p>{username}</p>
                            <p>{EmailID}</p>
                            <p>{state}</p>
                            <p>{JobTitle}</p>
                            <p>{Role}</p>
                        </div>
                    )
                })
            }
        </div>

            
        </>
    )
}

export default MultipleInputs
