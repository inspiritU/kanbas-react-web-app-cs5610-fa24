import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ withCredentials: true });

/**
 * Fetch all courses the current user is enrolled in.
 * @returns List of courses.
 */
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};

/**
 * Enroll in a course (API wrapper for enrollments).
 */
export const enrollInCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.post(`${USERS_API}/current/enroll`, { userId, courseId });
};

/**
 * Unenroll from a course (API wrapper for enrollments).
 */
export const unenrollFromCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.delete(`${USERS_API}/current/enroll`, { data: { userId, courseId } });
};

