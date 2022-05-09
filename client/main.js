
const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const jokeBtn = document.getElementById("randomJoke")
const getJoke = () => {
    axios.get("http://localhost:4000/api/joke")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const newJokeInput = document.getElementById('NewJokeInput')
const addUrJokeBtn = document.querySelector('#add-your-joke')

const addUrJoke = () => {
    const newJoke = newJokeInput.value
    axios.post("http://localhost:4000/api/joke", {newJoke})
    .then(res => {
        newJokeInput.value = ''
        alert(res.data)
        
    })
    
}
addUrJokeBtn.addEventListener('click', addUrJoke)


const deleteBtn = document.getElementById('delete')

const deleteBtnInput = document.querySelector('#delete-input')

const deleteJoke = () => {
    axios.delete(`http://localhost:4000/api/joke/${deleteInput.value}`)
    .then(res => {
        alert(res.data)
        deleteInput.value = ''
    })
    .catch(err => {
        alert(err)
    })
}






complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

jokeBtn.addEventListener('click', getJoke)




deleteBtn.addEventListener('click', deleteJoke)







