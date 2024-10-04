import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (4)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                        <img src="images/CS5340.IS4300.202430.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">

                                        CS5340/IS4300 - Human Computer Interaction MERGED
                            </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5340.IS4300.202430

                            </p>


                                </div>
                    </Link>
                        </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                              to="/Kanbas/Courses/1234/Home">
                        <img src="images/CS6220.21066.202510.png"  width="100%" height={160} />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">

                                    CS6220 21066 Data Mining Techniques SEC 03 Fall 2024 [SJO-2-TR]
                            </h5>
                                <p className="wd-dashboard-course-title card-text">

                                    CS6220.21066.202510
                            </p>


                            </div>
                    </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                              to="/Kanbas/Courses/1234/Home">
                        <img src="images/F-1.Orientation.U.S.Fall.2023.png" width="100%" height={160} />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">

                                    F-1.Orientation.U.S.Fall.2023
                            </h5>
                                <p className="wd-dashboard-course-title card-text">

                                    F-1.Orientation.U.S.Fall.2023
                            </p>

                            </div>
                    </Link>
                    </div>

                </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"

                                  to="/Kanbas/Courses/1234/Home">
                                <img src="images/Fall2023.New.Student.Orientation.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">

                                        Fall2023.New.Student.Orientation
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">

                                        Fall2023.New.Student.Orientation
                                    </p>


                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}