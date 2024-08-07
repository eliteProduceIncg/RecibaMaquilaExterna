const apiKey ='AIzaSyB_etOfj-AxKXFYXThjEj5MGHOcZ8X_FxE'
const spreadsheetId ='1q4xvTk9R2fEBU7P9Se978xnKs0ppKbphcdY_yse54nk'

const rangeEmpaque = 'Catalogos!K2:K';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeEmpaque}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Empaque');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeFolio = 'Catalogos!M2:M';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeFolio}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Folio');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeVehiculo = 'Catalogos!L2:L';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeVehiculo}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('tipoVehiculo');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));

const rangeVariedad = 'Catalogos!E2:E';
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeVariedad}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('Variedad');
        data.values.forEach(row => {
            const option = document.createElement('option');
            option.textContent = row[0];
            option.value = row[0];
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data: '));