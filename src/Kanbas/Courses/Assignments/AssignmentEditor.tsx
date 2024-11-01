import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface AssignmentEditorProps {
    dialogTitle: string;
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

export default function AssignmentEditor({
                                                dialogTitle = "Add Assignment", // default title
                                                title, setTitle, description, setDescription, points, setPoints,
                                                dueDate, setDueDate, availableFrom, setAvailableFrom, availableUntil, setAvailableUntil, addAssignment
                                            }: AssignmentEditorProps) {
    const { cid } = useParams<{ cid: string }>(); // Retrieve 'cid' from URL params if needed

    return (
        <div id="wd-assignments-controls" className="text-nowrap">

            {/* Assignment Editor Modal */}
            <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{dialogTitle}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => { e.preventDefault(); addAssignment(); }}>
                                <div className="mb-3">
                                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                                    <input
                                        id="wd-name"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="wd-description" className="form-label">Description</label>
                                    <textarea
                                        id="wd-description"
                                        className="form-control"
                                        rows={6}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
                                    <div className="col-sm-10">
                                        <input
                                            id="wd-points"
                                            className="form-control"
                                            type="number"
                                            value={points}
                                            onChange={(e) => setPoints(Number(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label text-end">Assign</label>
                                    <div className="col-sm-10">
                                        <div className="card">
                                            <div className="card-body">
                                                <span className="d-block mb-2"><strong>Due</strong></span>
                                                <input
                                                    type="date"
                                                    id="wd-due-date"
                                                    className="form-control mb-3"
                                                    value={dueDate}
                                                    onChange={(e) => setDueDate(e.target.value)}
                                                />
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <span className="d-block mb-2"><strong>Available from</strong></span>
                                                        <input
                                                            type="date"
                                                            id="wd-available-from"
                                                            className="form-control"
                                                            value={availableFrom}
                                                            onChange={(e) => setAvailableFrom(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <span className="d-block mb-2"><strong>Until</strong></span>
                                                        <input
                                                            type="date"
                                                            id="wd-available-until"
                                                            className="form-control"
                                                            value={availableUntil}
                                                            onChange={(e) => setAvailableUntil(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel </button>
                            <button onClick={addAssignment} type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}