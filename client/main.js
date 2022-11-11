const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune')
const funnyBtn = document.getElementById('funny')
const pictureBtn = document.getElementById('picture')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data;
        alert(data);
    } );
};
fortuneBtn.addEventListener('click', getFortune)

const getFunny = () => {
    axios.get('http://localhost:4000/api/funny/')
    .then(res => {
        const data = res.data;
        alert(data);
    } );
};
funnyBtn.addEventListener('click', getFunny)

const getPicture = () => {
    axios.get('http://localhost:4000/api/picture/')
    .then(res => {
        const data = res.data;
        alert(data);
    } );
};
pictureBtn.addEventListener('click', getPicture)