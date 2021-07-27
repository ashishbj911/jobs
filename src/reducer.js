import {
  JOBS_SUCCESS,
  JOBS_LOADING,
  JOBS_ERROR,
  SINGLE_JOB_LOADING,
  SINGLE_JOB_ERROR,
  SINGLE_JOB_SUCCESS,
  ADD_CLASS
} from "./actions";

export const JobsReducer = (state, action) => {
  if (action.type === JOBS_LOADING) {
    return { ...state, jobs_loading: true };
  }
  if (action.type === JOBS_SUCCESS) {
    const { content } = action.payload;
    const newJobs = content.map((item) => {
      const {
        id,
        name,
        typeOfEmployment: { label },
        location: { city },
      } = item;
      return { id, name, label, city };
    });
    return { ...state, jobs_loading: false, jobs: newJobs };
  }
  if (action.type === JOBS_ERROR) {
    return { ...state, jobs_loading: false, jobs_error: true };
  }
  if (action.type === SINGLE_JOB_LOADING) {
    return { ...state, single_loading: true };
  }
  if (action.type === SINGLE_JOB_SUCCESS) {
    return { ...state, single_loading: false, single_job: action.payload };
  }
  if (action.type === SINGLE_JOB_ERROR) {
    return { ...state, single_loading: false, single_error: true };
  }
  if (action.type === ADD_CLASS) {
    return { ...state, ashish: true };
  }
};
