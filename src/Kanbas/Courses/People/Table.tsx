import { FaUserCircle } from "react-icons/fa";
import React from "react";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Tony</span>{" "}
                    <span className="wd-last-name">Stark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Bruce</span>{" "}
                    <span className="wd-last-name">Wayne</span></td>
                    <td className="wd-login-id">001234562B</td>
                    <td className="wd-section">S102</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-02</td>
                    <td className="wd-total-activity">09:14:45</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Steve</span>{" "}
                    <span className="wd-last-name">Rogers</span></td>
                    <td className="wd-login-id">001234563C</td>
                    <td className="wd-section">S103</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-03</td>
                    <td className="wd-total-activity">08:34:21</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Natasha</span>{" "}
                    <span className="wd-last-name">Romanoff</span></td>
                    <td className="wd-login-id">001234564N</td>
                    <td className="wd-section">S104</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-04</td>
                    <td className="wd-total-activity">11:12:50</td></tr>
                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Clint</span>{" "}
                    <span className="wd-last-name">Barton</span></td>
                    <td className="wd-login-id">001234565C</td>
                    <td className="wd-section">S105</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-05</td>
                    <td className="wd-total-activity">07:45:33</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Peter</span>{" "}
                    <span className="wd-last-name">Parker</span></td>
                    <td className="wd-login-id">001234566P</td>
                    <td className="wd-section">S106</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-06</td>
                    <td className="wd-total-activity">12:20:14</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Thor</span>{" "}
                    <span className="wd-last-name">Odinson</span></td>
                    <td className="wd-login-id">001234567T</td>
                    <td className="wd-section">S107</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-07</td>
                    <td className="wd-total-activity">06:55:42</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Wanda</span>{" "}
                    <span className="wd-last-name">Maximoff</span></td>
                    <td className="wd-login-id">001234568W</td>
                    <td className="wd-section">S108</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-08</td>
                    <td className="wd-total-activity">09:02:37</td></tr>

                <tr><td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Scott</span>{" "}
                    <span className="wd-last-name">Lang</span></td>
                    <td className="wd-login-id">001234569S</td>
                    <td className="wd-section">S109</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-09</td>
                    <td className="wd-total-activity">10:45:18</td></tr>
                </tbody>
            </table>
        </div> );}

