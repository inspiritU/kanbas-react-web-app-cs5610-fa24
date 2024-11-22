import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
    userId: string;
    courseId: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
            state.enrollments = action.payload;
        },
        enrollCourse: (state, action: PayloadAction<Enrollment>) => {
            state.enrollments.push(action.payload);
        },
        unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const { userId, courseId } = action.payload;
            state.enrollments = state.enrollments.filter(
                (enrollment) => !(enrollment.userId === userId && enrollment.courseId === courseId)
            );
        },
    },
});

export const { setEnrollments, enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;