import { Outlet, defer, json } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Outlet />
        </>
    )
}


async function loadDiseases() {
    const response = await fetch('https://localhost:7289/api/Disease');

    if (!response.ok) {
        throw json({ message: "failed to load data" }, { status: 500 })
    }
    else {
        const data = await response.json();
        return data;
    }
}

async function loadExperts() {
    const response = await fetch('https://localhost:7289/api/Accounts/doctor');

    if (!response.ok) {
        throw json({ message: "failed to load data" }, { status: 500 })
    }
    else {
        const data = await response.json();
        return data;
    }
}

async function loadFeedback() {
    const response = await fetch('https://localhost:7289/api/Feedbacks');

    if (!response.ok) {
        throw json({ message: "failed to load feedback" }, { status: 500 })
    }
    else {
        const data = await response.json();
        return data;
    }
}


export function DiseaseAndExpertsLoader() {
    return defer({
        diseaseData: loadDiseases(),
        expertsData: loadExperts(),
        feedbackData: loadFeedback(),
    });
}