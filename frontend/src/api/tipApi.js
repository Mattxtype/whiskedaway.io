export async function fetchRandomTip() {
    const response = await fetch('http://localhost:80/tip/get-random-tip');

    if(!response.ok) {
        const error = new Error("An Error occured when fetching random tip");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const {tip} = await response.json();

    return tip;
}