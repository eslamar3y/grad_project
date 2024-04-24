export const IsSubscriped = async ({ userId, signal }) => {
    const response = await fetch(`https://localhost:7289/api/Accounts/farmOwner/IsSubscripted?id=${userId}`, { signal });
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the expert details, please try again later.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    console.log(data);
    return data;
}