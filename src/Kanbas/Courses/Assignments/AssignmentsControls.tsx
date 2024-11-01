import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoSearch } from "react-icons/io5";
import AssignmentEditor from "./AssignmentEditor";
import React from 'react';

interface AssignmentsControlsProps {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    points: number;
    setPoints: (points: number) => void;
    dueDate: string;
    setDueDate: (date: string) => void;
    availableFrom: string;
    setAvailableFrom: (date: string) => void;
    availableUntil: string;
    setAvailableUntil: (date: string) => void;
    addAssignment: () => void;
}

export default function AssignmentsControls({
                                                title,
                                                setTitle,
                                                description,
                                                setDescription,
                                                points,
                                                setPoints,
                                                dueDate,
                                                setDueDate,
                                                availableFrom,
                                                setAvailableFrom,
                                                availableUntil,
                                                setAvailableUntil,
                                                addAssignment
                                            }: AssignmentsControlsProps) {
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-between align-items-end">
            <form className="d-flex me-3 align-items-center">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <IoSearch />
                    </span>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </div>
            </form>
            <div>
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1" data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-4">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>

            {/* AssignmentEditor Modal */}
            <AssignmentEditor
                dialogTitle="Add Assignment" // Pass the title here
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
                addAssignment={addAssignment}
            />
        </div>
    );
}