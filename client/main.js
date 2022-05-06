const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const jokeBtn = document.getElementById("randomJoke")
const addJoke = document.getElementById("add")
const deleteJoke = document.getElementById("delete")
const updateJoke = document.getElementById("update")

globalId = 4




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const getJoke = () => {
    axios.get("http://localhost:4000/api/joke")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const addUrJoke = () => {
    axios.post("http://localhost:4000/api/addJoke")
    .then(res => {
        const data = res.data
        alert(data)
    })
}
const deleteUrJoke = id => 
    axios.delete("http://localhost:4000/api/deleteJoke")

const updateUrJoke = () => {
    axios.put("http://localhost:4000/api/updateJoke")

    
}








complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
jokeBtn.addEventListener('click', getJoke)
addJoke.addEventListener('click', addUrJoke)
deleteJoke.addEventListener('click', deleteUrJoke)
updateJoke.addEventListener('click', updateUrJoke)