export const getExpertData = async ({ expertId, signal }) => {
    const response = await fetch(`https://localhost:7289/api/Accounts/doctor/${expertId}`, { signal });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the expert details, please try again later.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
}

export const SearchForUser = async ({ SearchTerm, signal }) => {
    const response = await fetch(`https://localhost:7289/api/Accounts?UsernameSearchTerm=${SearchTerm}`, { signal });
    if (!response.ok) {
        const error = new Error('An error occurred while searching, please try again later.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
}

export const allUsers = async () => {
    const response = await fetch(`https://localhost:7289/api/Accounts`);
    if (!response.ok) {
        const error = new Error('An error occurred while loading all users, please try again later.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data;
}

export const SendFeedback = async (feedbackData) => {
    const response = await fetch('https://localhost:7289/api/Feedbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData),
    });

    if (!response.ok) {
        const error = new Error("failed to send feedback");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
}