export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" >
The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
</textarea>
            <br /><br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} /><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="exams">Exams</option>
                            <option value="quizzes">Quizzes</option>
                        </select><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                            <option value="letter-grade">Letter Grade</option>
                        </select><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                            <option value="external-tool">External Tool</option>
                        </select><br/><br/>
                    </td>

                </tr>
                <tr>
                    <td></td>
                    <td>
                        <label>Online Entry Options</label><br/>
                        <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>
                        <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>
                        <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                        <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                        <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label>Assign to</label><br/>
                        <input id="wd-assign-to" value="Everyone" /><br/><br/>
                    </td>

                </tr>
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date"> Due </label><br/>
                        <input type="date"
                               id="wd-due-date"
                               value="2024-05-13"/><br/><br/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <tr>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="date" id="wd-available-from" value="2024-05-06"/>
                        </td>
                        <td>
                            <input type="date" id="wd-available-until" value="2024-05-20"/>
                        </td>
                    </tr>
                </tr>

            </table>
            <hr className="wd-name"/>
            <div style={{ textAlign: 'right' }}>
                <button type="button">Cancel</button>&nbsp;
                <button type="submit">Save</button>
            </div>
        </div>
    );}