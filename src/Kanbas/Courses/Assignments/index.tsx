import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AssignmentsControls from './AssignmentsControls';
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentContentControlButtons from "./AssignmentContentControlButtons";
import { FaRegFileLines } from "react-icons/fa6";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
    editing: boolean;
}

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    return (
        <div id="wd-assignments">
            {/* Show AssignmentsControls only if user is Faculty */}
            {currentUser?.role === "FACULTY" && (
                <AssignmentsControls
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    points={points}
                    setPoints={setPoints}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    availableFrom={availableFrom}
                    setAvailableFrom={setAvailableFrom}
                    availableUntil={availableUntil}
                    setAvailableUntil={setAvailableUntil}
                    addAssignment={() => {
                        dispatch(addAssignment({
                            title,
                            description,
                            points,
                            dueDate,
                            availableFrom,
                            availableUntil,
                            course: cid,
                        }));
                        setTitle("");
                        setDescription("");
                        setPoints(100);
                        setDueDate("");
                        setAvailableFrom("");
                        setAvailableUntil("");
                    }}
                />
            )}
            <br /><br />

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <FaRegFileLines className="me-3 text-success" />
                                        <div>
                                            <div>
                                                {!assignment.editing ? (
                                                    <strong>{assignment.title}</strong>
                                                ) : (
                                                    <input
                                                        className="form-control w-50 d-inline-block"
                                                        onChange={(e) =>
                                                            currentUser.role === "FACULTY" &&
                                                            dispatch(updateAssignment({ ...assignment, title: e.target.value }))
                                                        }
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" && currentUser.role === "FACULTY") {
                                                                dispatch(updateAssignment({ ...assignment, editing: false }));
                                                            }
                                                        }}
                                                        defaultValue={assignment.title}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <span className="text-danger">Multiple Modules</span> |
                                                <strong> Not available until </strong>
                                                {!assignment.editing ? (
                                                    assignment.availableFrom
                                                ) : (
                                                    <input
                                                        className="form-control d-inline-block w-auto"
                                                        type="date"
                                                        onChange={(e) =>
                                                            currentUser.role === "FACULTY" &&
                                                            dispatch(updateAssignment({ ...assignment, availableFrom: e.target.value }))
                                                        }
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" && currentUser.role === "FACULTY") {
                                                                dispatch(updateAssignment({ ...assignment, editing: false }));
                                                            }
                                                        }}
                                                        defaultValue={assignment.availableFrom}
                                                    />
                                                )}
                                                | <strong> Due </strong>
                                                {!assignment.editing ? (
                                                    assignment.dueDate
                                                ) : (
                                                    <input
                                                        className="form-control d-inline-block w-auto"
                                                        type="date"
                                                        onChange={(e) =>
                                                            currentUser.role === "FACULTY" &&
                                                            dispatch(updateAssignment({ ...assignment, dueDate: e.target.value }))
                                                        }
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" && currentUser.role === "FACULTY") {
                                                                dispatch(updateAssignment({ ...assignment, editing: false }));
                                                            }
                                                        }}
                                                        defaultValue={assignment.dueDate}
                                                    />
                                                )}
                                                | {!assignment.editing ? (
                                                `${assignment.points} pts`
                                            ) : (
                                                <input
                                                    className="form-control d-inline-block w-auto"
                                                    type="number"
                                                    onChange={(e) =>
                                                        currentUser.role === "FACULTY" &&
                                                        dispatch(updateAssignment({ ...assignment, points: Number(e.target.value) }))
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" && currentUser.role === "FACULTY") {
                                                            dispatch(updateAssignment({ ...assignment, editing: false }));
                                                        }
                                                    }}
                                                    defaultValue={assignment.points}
                                                />
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Render AssignmentContentControlButtons only for Faculty */}
                                    {currentUser?.role === "FACULTY" && (
                                        <AssignmentContentControlButtons
                                            id={assignment._id}
                                            deleteAssignment={() => dispatch(deleteAssignment(assignment._id))}
                                            editAssignment={() => dispatch(editAssignment(assignment._id))}
                                        />
                                    )}
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}