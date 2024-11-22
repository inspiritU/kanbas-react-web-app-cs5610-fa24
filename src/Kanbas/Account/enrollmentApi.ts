import axios from "axios";

const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;

/**
 * Enroll a user in a course via API.
 * @param userId - The ID of the user.
 * @param courseId - The ID of the course.
 */
export const enrollCourse = async (userId: string, courseId: string) => {
    await axios.post(ENROLLMENTS_API, { userId, courseId });
};

/**
 * Unenroll a user from a course via API.
 * @param userId - The ID of the user.
 * @param courseId - The ID of the course.
 */
export const unenrollCourse = async (userId: string, courseId: string) => {
    await axios.delete(ENROLLMENTS_API, { data: { userId, courseId } });
};

/**
 * Fetch all enrollments for a user.
 * @param userId - The ID of the user.
 * @returns A list of enrollments.
 */
export const fetchUserEnrollments = async (userId: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return data;
};