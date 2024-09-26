const fig = document.getElementById("fig");
const timeTaken = document.getElementById("timeTaken");
const lowestTimeElement = document.getElementById("lowestTime"); // Element to display lowest time

let start = new Date().getTime();
let reflexTimes = [];  // Array to store reflex times

// Function to change color of the figure
const figureColor = () => {
    const colorArray = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        hash += colorArray[Math.floor(Math.random() * 16)];
    }
    fig.style.backgroundColor = hash;
};

// Function to change the figure position
const figurePosition = (top, left) => {
    fig.style.top = `${top}%`;
    fig.style.left = `${left}%`;
    fig.style.transform = `translate(-50%, -50%)`;
};

// Function to change the figure shape
const figureShape = (size) => {
    start = new Date().getTime();
    const choice = Math.floor(Math.random() * 2);
    fig.style.width = `${size}px`;
    fig.style.height = `${size}px`;
    fig.style.borderRadius = choice === 0 ? "50%" : "0";
};

// Function to update and display the lowest reflex time
const updateLowestTime = () => {
    let lowestTime = Math.min(...reflexTimes);  // Calculate lowest time
    // Update the lowest time in the top-right corner
    lowestTimeElement.textContent = `Lowest Time: ${lowestTime}s`;
};

// Event listener to change the figure properties once it is clicked
fig.addEventListener("click", () => {
    const end = new Date().getTime();
    const reactionTime = (end - start) / 1000;

    // Display the current reaction time
    timeTaken.innerHTML = reactionTime;

    // Add the time to the reflexTimes array and update the lowest time
    reflexTimes.push(reactionTime);
    updateLowestTime();

    // Randomize the position, size, and color of the figure
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const size = Math.floor(Math.random() * 100) + 50;
    figurePosition(top, left);
    figureShape(size);
    figureColor();
});
