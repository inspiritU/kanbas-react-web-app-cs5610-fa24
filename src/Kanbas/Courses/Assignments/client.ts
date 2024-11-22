import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api`;

export const createAssignment = async (courseId: string, assignment: any) => {
    const { data } = await axios.post(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`, assignment);
    return data;
};

export const fetchAssignments = async (courseId: string) => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/courses/${courseId}/assignments`);
    return data;
};

export const addAssignment = async (assignment: any) => {
    const response = await axios.post('/api/assignments', assignment);
    return response.data;
};

export const updateAssignment = async (assignmentId: string, updates: any) => {
    await axios.put(`${ASSIGNMENTS_API}/assignments/${assignmentId}`, updates);
};

export const deleteAssignment = async (assignmentId: string) => {
    await axios.delete(`${ASSIGNMENTS_API}/assignments/${assignmentId}`);
};