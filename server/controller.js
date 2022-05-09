const jokes = ["I'm afraid for the calendar. Its days are numbered.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "What do you call a fish wearing a bowtie? Sofishticated.", "How do you follow Will Smith in the snow? You follow the fresh prints."]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense", "A golden egg of opportunity falls into your lap this month.", "A lifetime of happiness lies ahead of you."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    getJoke: (req, res) => {
        const jokes = ["I'm afraid for the calendar. Its days are numbered.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "What do you call a fish wearing a bowtie? Sofishticated.", "How do you follow Will Smith in the snow? You follow the fresh prints."]
        
         let randomIndex = Math.floor(Math.random() * jokes.length)
        let randomJoke = jokes[randomIndex]

        res.status(200).send(randomJoke)
   
   
    },
    addUrJoke: (req, res) => {
        const { newJoke } = req.body
        
        jokes.push(newJoke)
        
        res.status(200).send('joke added')
    },
             
        deleteJoke: (req, res) => {
            const {id} = req.params

            if(jokes[+id]) {
                jokes.splice(id, 1)
                res.status(200).send('joke removed')

            } else {
                res.status(400).send('no joke to remove')
            }
            
        }    
    }
