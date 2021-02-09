//Function to randomly choose an element from an array (but also removes it):
export const popChoice = (array) => {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array.splice(randomIndex, 1)[0];
}
