import data from './data.json' with {type:'json'}
import { FormController } from './form.js'
import { Manager } from './manager.js'
import { Table } from './table.js'


/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} elem 
 */
const renderColspanBody = (tbody,elem) =>
{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = document.createElement('td')
    td1.innerText = elem.neve
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = elem.kor
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = elem.szerelme1
    tr.appendChild(td3)

    if(elem.szerelme2)
    {
        const td4 = document.createElement('td')
        td4.innerText = elem.szerelme2
        tr.appendChild(td4)
    }
    else
    {
        td3.colSpan = 2
    }
}

const manager = new Manager()

// manager.addCallback = (element) =>
// {
//     console.log(element)
// }

const table = new Table(data.colspanHeaderArray, manager)
table.setAppendRow(renderColspanBody)

for (let a of data.colspanDataArr)
{
    manager.addElement(a)
}

const form = new FormController(data.colspanFormFieldList, manager)