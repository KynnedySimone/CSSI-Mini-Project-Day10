const priceInput = document.querySelector("#price");
const waitInput = document.querySelector("#wait");


//check value of activity

// const getActivity = () => {
//     const activityInput = document.querySelector("#activity");
//     console.log(activityInput);
//     const activityValue = activityInput.value;
//     return activityValue;
//     console.log(activityValue);
// };

const getActivity = () => {
    const activity1 = document.getElementById('activity').value;
    return activity1;
    console.log(activity1);
}

//getActivity();

const testRun = document.addEventListener("click", e => {
    getActivity();
});

//check wait
const getWait = () => {
    const waitValue = waitInput.value;
    return waitValue;
};

//check price
const getPrice = () => {
    const priceValue = priceInput.value;
    return priceValue;
};

//get data from database