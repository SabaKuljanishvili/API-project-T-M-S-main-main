let inpEmail = document.querySelector('.inpEmail')
let inpPass = document.querySelector('.inpPass')

const url = "https://reqres.in/api/login"

function login(event){   
    event.preventDefault()
    fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body : JSON.stringify(
        {
            "email": inpEmail.value,
            "password": inpPass.value
        }
    )
})
.then(res => res.json()) 
.then(res => getToken(res))

}

function getToken(res){
    localStorage.setItem('token', res.token)
    window.location.href = 'index.html'
}

function checkResponse(res){
    console.log(res);
    
    if (res.ok){
        getToken(res)
    } else {
        alert("Incorrect Email Or Password.")
    }

}


