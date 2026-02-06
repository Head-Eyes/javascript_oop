import { Manager } from "./manager.js"

class Table {
    #tbody
    #manager
    /**
     * 
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray,manager)
    {
        this.#manager = manager

        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)
        const sor = document.createElement('tr')
        thead.appendChild(sor)

        for (const element of headerArray) {
            const th = document.createElement('th')
            sor.appendChild(th)
            th.innerText = element.name

            if(element.colspan == 2)
            {
                th.colSpan = element.colspan;
            }
        }

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        this.#tbody = tbody  
    }
}

export {Table}