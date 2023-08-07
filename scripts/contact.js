const submitBtn = document.getElementsByClassName('submit-btn');
const inputs = document.getElementsByClassName('formInputs');

// const serverUrl = 'http://localhost:3000';
const serverUrl = 'http://13.51.241.75:3000';

submitBtn[0].addEventListener('click', async function (event) {
    event.preventDefault();
    console.log('submit button clicked');
    let data = {};
    for(let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    }
    const resonse = await fetch(`${serverUrl}/api/contact/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if(!resonse.ok && !resonse.status !== 400) {
        alert('Something went wrong. Please try again later.');
    }

    const json = await resonse.json();
    showSentIcon();
    
});


function showSentIcon() {
    const sentIcon = document.createElement("img");
    sentIcon.src = "../images/sent-icon.png";
    sentIcon.alt = "Sent Icon";
    sentIcon.style.position = "fixed";
    sentIcon.style.top = "10px";
    sentIcon.style.right = "10px";
    document.body.appendChild(sentIcon);
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000);
}