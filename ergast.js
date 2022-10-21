async function doAPICall(year, round){
    let result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(result)
    result = result.data

    let tbody = document.getElementsByTagName('tbody')['DriverStandings'];

    let thead = document.getElementById('thead');
    th.scope="col";
    th.innerText = result.data;
    tbody.appendChild(thead);

    let th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data;
    thead.appendChild(th);
    
    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['familyName'];
    thead.appendChild(th);
    
    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['dateOfBirth'];
    thead.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['nationality'];
    thead.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data[0]['position'];
    thead.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data[0]['wins'];
    thead.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data['Constructors']['name'];
    tr.appendChild(th);
}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    const year = document.getElementsByName('year')[0].value
    const round = document.getElementsByName('round')[0].value
    console.log(year, round);
    doAPICall(year, round);
}

const element = document.getElementById("submit");
element.addEventListener("click", (event)=>handleSubmit(event));
