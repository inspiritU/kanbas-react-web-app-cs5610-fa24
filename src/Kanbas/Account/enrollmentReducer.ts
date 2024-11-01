import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json";

interface Enrollment {
    courseId: string;
    userId: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
    enrollments: enrollmentsData.map((enrollment: any) => ({
        courseId: enrollment.course,
        userId: enrollment.user,
    })),
};

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
        enrollCourse: (state, action: PayloadAction<Enrollment>) => {
            const newEnrollment: Enrollment = {
                courseId: action.payload.courseId,
                userId: action.payload.userId,
            };
            state.enrollments.push(newEnrollment);
        },
        unenrollCourse: (state, action: PayloadAction<Enrollment>) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) =>
                    enrollment.courseId !== action.payload.courseId ||
                    enrollment.userId !== action.payload.userId
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;