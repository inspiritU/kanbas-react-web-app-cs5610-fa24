import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentContentControlButtons from "./AssignmentContentControlButtons";
import { FaRegFileLines } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } from "./reducer";
import * as client from "./client";

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
    editing: boolean;
    course: string;
}

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");

    // Fetch assignments on mount
    useEffect(() => {
        const fetchAssignments = async () => {
            if (cid) {
                const fetchedAssignments = await client.fetchAssignments(cid);
                dispatch(setAssignments(fetchedAssignments));
            }
        };
        fetchAssignments();
    }, [cid, dispatch]);

    const handleAddAssignment = async () => {
        if (cid) {
            const newAssignment = {
                title,
                description,
                points,
                dueDate,
                availableFrom,
                availableUntil,
                course: cid,
            };
            const createdAssignment = await client.createAssignment(cid, newAssignment);
            dispatch(setAssignments([...assignments, createdAssignment]));
            setTitle("");
            setDescription("");
            setPoints(100);
            setDueDate("");
            setAvailableFrom("");
            setAvailableUntil("");
        }
    };

    const handleUpdateAssignment = async (assignment: Assignment, updates: Partial<Assignment>) => {
        await client.updateAssignment(assignment._id, updates);
        const updatedAssignments = assignments.map((a: Assignment) =>
            a._id === assignment._id ? { ...a, ...updates } : a
        );
        dispatch(setAssignments(updatedAssignments));
    };

    const handleDeleteAssignment = async (assignmentId: string) => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            await client.deleteAssignment(assignmentId);
            const remainingAssignments = assignments.filter((a: Assignment) => a._id !== assignmentId);
            dispatch(setAssignments(remainingAssignments));
        }
    };

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
                    addAssignment={handleAddAssignment}
                />
            )}
            <br />
            <br />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: Assignment) => assignment.course === cid)
                            .map((assignment: Assignment) => (
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
                                                            handleUpdateAssignment(assignment, { title: e.target.value })
                                                        }
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                handleUpdateAssignment(assignment, { editing: false });
                                                            }
                                                        }}
                                                        defaultValue={assignment.title}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong>{" "}
                                                {!assignment.editing ? (
                                                    assignment.availableFrom
                                                ) : (
                                                    <input
                                                        className="form-control d-inline-block w-auto"
                                                        type="date"
                                                        onChange={(e) =>
                                                            handleUpdateAssignment(assignment, { availableFrom: e.target.value })
                                                        }
                                                        defaultValue={assignment.availableFrom}
                                                    />
                                                )}{" "}
                                                | <strong>Due</strong>{" "}
                                                {!assignment.editing ? (
                                                    assignment.dueDate
                                                ) : (
                                                    <input
                                                        className="form-control d-inline-block w-auto"
                                                        type="date"
                                                        onChange={(e) =>
                                                            handleUpdateAssignment(assignment, { dueDate: e.target.value })
                                                        }
                                                        defaultValue={assignment.dueDate}
                                                    />
                                                )}{" "}
                                                | {!assignment.editing ? (
                                                `${assignment.points} pts`
                                            ) : (
                                                <input
                                                    className="form-control d-inline-block w-auto"
                                                    type="number"
                                                    onChange={(e) =>
                                                        handleUpdateAssignment(assignment, { points: Number(e.target.value) })
                                                    }
                                                    defaultValue={assignment.points}
                                                />
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                    {currentUser?.role === "FACULTY" && (
                                        <AssignmentContentControlButtons
                                            id={assignment._id}
                                            deleteAssignment={() => handleDeleteAssignment(assignment._id)}
                                            editAssignment={() => handleUpdateAssignment(assignment, { editing: true })}
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