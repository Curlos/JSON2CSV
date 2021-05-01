document.getElementById('convert-csv').addEventListener('click', () => {
    let convertedCSV = convertJSONtoCSV();
});

const convertJSONtoCSV = () => {

    if(!document.getElementById('json-data').value) {
        displayErrorMessage();
        return;
    }

    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "None";

    let jsonString = document.getElementById('json-data').value;
    let jsonData = JSON.parse(jsonString);

    let firstRow = Object.keys(jsonData[0]);

    for(let obj of jsonData) {
        let lineArr = []

        for(let value of Object.values(obj)) {
            lineArr.push(`"${value}"`);
        }
        let lineStr = lineArr.join();
        console.log([lineStr])
        console.log(lineStr.slice(0, -1) + '\n');
    }
    console.log(Object.values(jsonData[0]));
}

const displayErrorMessage = () => {
    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "block";
}