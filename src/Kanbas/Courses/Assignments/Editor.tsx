import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";  // Importing from the Database

// Define the Assignment interface
interface Assignment {
    _id: string;
    title: string;
    course: string;
    description?: string; // Optional properties
    points?: number;
    dueDate?: string;
    availableFrom?: string;
    availableUntil?: string;
}

export default function AssignmentEditor() {
    const { cid, aid } = useParams(); // Retrieve course and assignment ID from URL

    // Cast db.assignments to a generic type to avoid type conflicts
    const assignment = (db.assignments as Assignment[]).find(
        (a) => a._id === aid && a.course === cid
    );

    // Set up the state with default values from the assignment
    const [assignmentDetails, setAssignmentDetails] = useState({
        name: assignment?.title || '',
        description: assignment?.description || 'The assignment is available online\n' +
            'Submit a link to the landing page of your Web application running on\n' +
            'Netlify.\n' +
            'The landing page should include the following:\n' +
            '• Your full name and section\n' +
            '• Links to each of the lab assignments\n' +
            '• Link to the Kanbas application\n' +
            '• Links to all relevant source code repositories\n' +
            'The Kanbas application should include a link to navigate back to the landing page.',
        points: assignment?.points || 100,
        dueDate: assignment?.dueDate || '2024-05-13',
        availableFrom: assignment?.availableFrom || '2024-05-06',
        availableUntil: assignment?.availableUntil || '2024-05-20'
    });

    return (
        <div>
            <div id="wd-assignments-editor" className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                        <input id="wd-name" className="form-control" value={assignmentDetails.name} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="wd-description" className="form-label">Description</label>
                        <textarea id="wd-description"
                                  className="form-control"
                                  rows={6}
                                  value={assignmentDetails.description}>
            </textarea>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
                        <div className="col-sm-10">
                            <input id="wd-points" className="form-control" value={assignmentDetails.points} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</label>
                        <div className="col-sm-10">
                            <select id="wd-group" className="form-select">
                                <option value="assignments">ASSIGNMENTS</option>
                                <option value="exams">Exams</option>
                                <option value="quizzes">Quizzes</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</label>
                        <div className="col-sm-10">
                            <select id="wd-display-grade-as" className="form-select">
                                <option value="percentage">Percentage</option>
                                <option value="points">Points</option>
                                <option value="letter-grade">Letter Grade</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">

                        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</label>

                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-body">
                                    <select id="wd-submission-type" className="form-select">
                                        <option value="online">Online</option>
                                        <option value="paper">Paper</option>
                                        <option value="external-tool">External Tool</option>
                                    </select>
                                    <br/>
                                    <span className="d-block mb-2"><strong>Online Entry Options</strong></span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mb-3">
                        <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label text-end">Assign</label>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-body">
                                    <span className="d-block mb-2"><strong>Assign to</strong></span>
                                    <input id="wd-assign-to" className="form-control mb-3" value="Everyone" />
                                    <span className="d-block mb-2"><strong>Due</strong></span>
                                    <input type="date" id="wd-due-date" className="form-control mb-3" value="2024-05-13" />

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <span className="d-block mb-2"><strong>Available from</strong></span>
                                            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="d-block mb-2"><strong>Until</strong></span>
                                            <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                        <button type="submit" className="btn btn-danger">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}






