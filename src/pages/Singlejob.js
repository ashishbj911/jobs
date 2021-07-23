import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useJobContext } from "../context";
import ReactHtmlParser from 'react-html-parser'
const url = "https://api.smartrecruiters.com/v1/companies/Refyne/postings/";

const Singlejob = () => {
  const { id } = useParams();
  const {
    single_job: job,
    single_error: error,
    single_loading: loading,
    fetchSingle,
  } = useJobContext();

  useEffect(() => {
    fetchSingle(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  if(loading){
    return <h1 className="text-center">Loading</h1>
 }
 if(error){
    return <h1 className="text-center">There is Some Error</h1>
 }
  const {
    name,
    location: { city },
    typeOfEmployment:{label},
    jobAd:{sections:{jobDescription:{title,text}}},
  } = job;
  return (
    <div className="job-single">
      <h2>{name}</h2>
      <p>{city}, <b>{label}</b></p>
      <h3>{title}</h3>
      <div className="job-main-info">
        {ReactHtmlParser(text)}
      </div>
    </div>
  );
};

export default Singlejob;
