module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ['A beautiful, smart, and loving person will be coming into your life.','A hunch is creativity trying to tell you something.', 'A new perspective will come with the new year.','Any day above ground is a good day.', 'A smooth long journey. Good expectations']

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);

        
    },





    getFunny: (req, res) => {
        const joke = [`What's the best thing about Switzerland? I don't know, but the flag is a big plus.`,`I invented a new word! Plagiarism`, `Hear about the new restaurant called Karma? There's no menu: You get what you deserve.`]

        let someI = Math.floor(Math.random() * joke.length);
        let randomJoke = joke[someI];
      
        res.status(200).send(randomJoke);

}, 
    getPicture: (req, res) => {
        const picture = [`) ͡° ͜ʖ ͡°)`,`≧◔◡◔≦ `,`( ಠ ͜ʖ ಠ )`,`ヅ`]

        let randomI = Math.floor(Math.random() * picture.length);
        let randomPicture = picture[randomI];
  
        res.status(200).send(randomPicture);

},
    rollDice: (req, res) => {
    const picture = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`,`12`]

    let randomI = Math.floor(Math.random() * picture.length);
    let randomPicture = picture[randomI];

    res.status(200).send(randomPicture);

},

}
