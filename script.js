document.getElementById('convert-csv').addEventListener('click', () => {
    let convertedCSV = convertJSONtoCSV();
    document.getElementById('csv-data').innerHTML = convertedCSV;
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
    
    return convertedCsv;
}

const displayErrorMessage = () => {
    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "block";
}