Array.prototype.shuffle = function() {
    let input = this;

    for (let i = input.length - 1; i >= 0; i--) {

        let randomIndex = Math.floor(Math.random() * (i + 1));
        let randomItem = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = randomItem;
    }

    return(input);
}