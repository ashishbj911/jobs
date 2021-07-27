import React, { useContext, useEffect, useReducer } from "react";
import {
  JOBS_SUCCESS,
  JOBS_LOADING,
  JOBS_ERROR,
  SINGLE_JOB_ERROR,
  SINGLE_JOB_LOADING,
  SINGLE_JOB_SUCCESS,
  ADD_CLASS,
} from "./actions";
import { JobsReducer } from "./reducer";

const url = "https://api.smartrecruiters.com/v1/companies/Refyne/postings";

const initialState = {
  jobs: [],
  jobs_loading: true,
  jobs_error: false,
  single_loading:true,
  single_error:false,
  single_job:{},
  ashish:false,
};

const JobContext = React.createContext();

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobsReducer, initialState);

  const fetchJobs = async (url) => {
    dispatch({ type: JOBS_LOADING });
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      dispatch({ type: JOBS_SUCCESS, payload: jobs });
    } catch {
      dispatch({ type: JOBS_ERROR });
    }
  };
  const fetchSingle = async (url) => {
    dispatch({ type: SINGLE_JOB_LOADING });
    try {
      const response = await fetch(url);
      const singleJob = await response.json();
      dispatch({ type: SINGLE_JOB_SUCCESS, payload: singleJob });
    } catch {
      dispatch({ type: SINGLE_JOB_ERROR });
    }
  };
  useEffect(() => {
    fetchJobs(url);
  }, []);

  const addClass = () => {
    dispatch({ type: ADD_CLASS });
  }
  return (
    <JobContext.Provider value={{ ...state,fetchSingle,addClass }}>{children}</JobContext.Provider>
  );
};

export const useJobContext = () => {
  return useContext(JobContext);
};
