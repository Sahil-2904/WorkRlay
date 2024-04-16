import {Schema} from "mongoose";

interface IWorker{
    // worker_id --> check this
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    dob: Date, // calculate AGE
    gender: string // check enum
    skills: [string],
    location: string,
    address: string, //check
    available: boolean,
    industry: [string],
    experience: number,
    languages: [string],
    education: string
    type: string, //check this -> Part-Time/Full
    jobs_applied: [number] //check
    jobs_shortlisted: [number] //check
    acc_type: string
}