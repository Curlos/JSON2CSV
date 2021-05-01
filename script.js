document.getElementById('convert-csv').addEventListener('click', () => {
    let convertedCSV = convertJSONtoCSV();

    if(convertedCSV) {
        document.getElementById('csv-data').value = convertedCSV;
    }
});

document.getElementById('clear-json-csv').addEventListener('click', () => {
    let jsonData = document.getElementById('json-data');
    let csvData = document.getElementById('csv-data');

    console.log(jsonData);
    console.log(csvData);
    jsonData.value = '';
    csvData.value = '';
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

    console.log(jsonData);

    let lines = [];
    let firstLineArr = [];

    for (let key of Object.keys(jsonData[0])) {
        firstLineArr.push(`"${key}"`);
    }

    let firstLineStr = firstLineArr.join() + '\n';
    lines.push(firstLineStr);

    for (let obj of jsonData) {
        let lineArr = []

        for(let value of Object.values(obj)) {
            lineArr.push(`"${value}"`);
        }
        let lineStr = lineArr.join() + '\n';
        lines.push(lineStr);
    }

    let convertedCsv = lines.join('')
    console.log(convertedCsv);
    return convertedCsv;
}

const displayErrorMessage = () => {
    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "block";
}