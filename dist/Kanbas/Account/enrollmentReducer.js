import { createSlice } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json";
const initialState = {
    enrollments: enrollmentsData.map((enrollment) => ({
        courseId: enrollment.course,
        userId: enrollment.user,
    })),
};
const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
        enrollCourse: (state, action) => {
            const newEnrollment = {
                courseId: action.payload.courseId,
                userId: action.payload.userId,
            };
            state.enrollments.push(newEnrollment);
        },
        unenrollCourse: (state, action) => {
            state.enrollments = state.enrollments.filter((enrollment) => enrollment.courseId !== action.payload.courseId ||
                enrollment.userId !== action.payload.userId);
        },
    },
});
export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
