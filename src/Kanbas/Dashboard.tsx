import { Link, useNavigate } from "react-router-dom";
import * as db from "./Database";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./Account/enrollmentReducer";

interface Course {
    _id: string;
    name: string;
    description: string;
    image: string;
}

interface Enrollment {
    userId: string;
    courseId: string;
}

interface DashboardProps {
    courses: Course[];
    course: Course;
    setCourse: (course: Course) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}

export default function Dashboard({
                                      courses,
                                      course,
                                      setCourse,
                                      addNewCourse,
                                      deleteCourse,
                                      updateCourse,
                                  }: DashboardProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments: Enrollment[] = useSelector((state: any) => state.enrollmentReducer.enrollments);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isFaculty = currentUser?.role === "FACULTY";
    const isStudent = currentUser?.role === "STUDENT";

    const [showAllCourses, setShowAllCourses] = useState(false);

    const toggleEnrollments = () => {
        setShowAllCourses(!showAllCourses);
    };

    const isEnrolled = (courseId: string) => {
        return enrollments.some((enrollment) =>
            enrollment.userId === currentUser._id &&
            enrollment.courseId === courseId
        );
    };

    const displayedCourses = (isStudent && !showAllCourses)
        ? courses.filter((course) => isEnrolled(course._id))
        : courses;

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />

            {isFaculty && (
                <div>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        defaultValue={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        defaultValue={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </div>
            )}

            {isStudent && (
                <button
                    className="btn btn-primary float-end"
                    onClick={toggleEnrollments}
                >
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <img
                                    src={course.image}
                                    width="100%"
                                    height={160}
                                    alt={`${course.name} image`}
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                        {course.description}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between p-2">
                                    {(isEnrolled(course._id) || isFaculty) && (
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => navigate(`/Kanbas/Courses/${course._id}/Home`)}
                                        >
                                            Go
                                        </button>
                                    )}

                                    {isStudent && (
                                        isEnrolled(course._id) ? (
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() =>
                                                    dispatch(unenrollCourse({
                                                        courseId: course._id,
                                                        userId: currentUser._id
                                                    }))
                                                }
                                            >
                                                Unenroll
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() =>
                                                    dispatch(enrollCourse({
                                                        courseId: course._id,
                                                        userId: currentUser._id
                                                    }))
                                                }
                                            >
                                                Enroll
                                            </button>
                                        )
                                    )}

                                    {isFaculty && (
                                        <div className="d-flex justify-content-end">
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}