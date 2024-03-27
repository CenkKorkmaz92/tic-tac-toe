let fields = [
    'circle',
    null,
    null,
    null,
    null,
    'cross',
    null,
    null,
    null
];

function init() {
    render()
}

function render() {
    let table = '<table>';
    for (let i = 0; i < 3; i++) {
        table += '<tr>';
        for (let j = 0; j < 3; j++) {
            let cell = '';
            const value = fields[i * 3 + j];
            if (value === 'circle') {
                cell = 'O';
            } else if (value === 'cross') {
                cell = 'X';
            }
            table += `<td>${cell}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';

    document.getElementById('content').innerHTML = table;
}
