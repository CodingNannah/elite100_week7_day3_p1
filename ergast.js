const element = document.getElementById("submit");
element.addEventListener("click", (event)=>handleSubmit(event));

async function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    const ergInfo = await document.getElementsByName('year')[0].value
    console.log(ergInfo)
    doAPICall(ergInfo);
}

async function doAPICall(pokeName){
    let result = await axios.get(`https://ergast.com/api/f1/${season}/driverstandings.json`)
    console.log(result)
    result = result.data

    // let tbody = document.getElementsByTagName('tbody')[0]['MRData']['StandingsTable']['StandingsLists']['DriverStandings'];

    let tr = document.createElement('tr');
    tbody.appendChild(tr)

    let th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['givenName'];
    tr.appendChild(th);
    
    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['familyName'];
    tr.appendChild(th);
    
    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['dateOfBirth'];
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data["Driver"]['nationality'];
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data[0]['position'];
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data[0]['wins'];
    tr.appendChild(th);

    th = document.createElement('th');
    th.scope="col";
    th.innerText = result.data['Constructors']['name'];
    tr.appendChild(th);
}

