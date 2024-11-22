import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [module, setModule] = useState({
        id: "CS5610",
        name: "Web Development",
        description: "Learn modern web development techniques",
        course: "CS5610 Web Development",
    });

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Module 操作 */}
            <h4>Module Operations</h4>
            <a id="wd-get-module" className="btn btn-primary me-2"
               href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <a id="wd-get-module-name" className="btn btn-primary"
               href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                   defaultValue={module.name}
                   onChange={(e) =>
                       setModule({ ...module, name: e.target.value })} />
            <a id="wd-update-module-name" className="btn btn-primary"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-module-description"
                   defaultValue={module.description}
                   onChange={(e) =>
                       setModule({ ...module, description: e.target.value })} />
            <a id="wd-update-module-description" className="btn btn-primary"
               href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <hr />

            {/* Assignment 操作 */}
            <h4>Assignment Operations</h4>
            <a id="wd-get-assignment" className="btn btn-primary"
               href={`${ASSIGNMENT_API_URL}`}>
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr/>

            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />

            <hr />
        </div>
    );
}