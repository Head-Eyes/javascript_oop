/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
*/

/**
 * @callback RenderRowCallback
 * @type {HeaderType[]} 
 *  
 * */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table
{
    /**
     * @type {HeaderType}
     */
    #tbody

    /** 
     * @param {HeaderType}  headerArray
     */
    constructor(headerArray)
    {
        this.#tbody = makeTableBodyWithHeader(headerArray)
    }

    get tbody (){
        return this.#tbody
    }

    appendRow(callback)
    {
        callback(this.#tbody)
    }
}

class ColspanTable extends Table
{
    /** 
     * @param {HeaderType}  headerArray
     */
    constructor(headerArray)
    {
        super(headerArray)
    }

    /** 
     * @param {HeaderType}  headerArray
     */
    render(colspanRowTypeTomb)
    {
        renderColspanBody(this.tbody, colspanRowTypeTomb)    
    }
}

class RowspanTable extends Table
{
    /** 
     * @param {HeaderType}  headerArray
     */
    constructor(headerArray)
    {
       super(headerArray)
    }

    /** 
     * @param {HeaderType}  headerArray
     */
    render(rowspanRowTypeTomb)
    {
        renderRowspanBody(this.tbody, rowspanRowTypeTomb)    
    }
}

/** 
 * @type {ColspanTable}
 */
const colspan = new ColspanTable(colspanHeaderArr)
colspan.render(colspanBodyArr)
/** 
 * @type {RowspanTable}
 */
const rowspan = new RowspanTable(rowspanHeaderArr)
rowspan.render(rowspanBodyArr)

function nemtudom(){
    console.log("jgrf")
    const obj = {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
    }
    
    this.appendRow(function (body)
    {
        const sor = document.createElement("tr")
        body.appendChild(sor)

        const cella = document.createElement("td")
        sor.appendChild(cella)
        cella.innerText = obj.author

        const cella2 = document.createElement("td")
        sor.appendChild(cella2)
        cella2.innerText = obj.title1

        const cella3 = document.createElement("td")
        sor.appendChild(cella3)
        cella3.innerText = obj.concepts1
    })
}

const gombbah = document.createElement("button")
document.body.appendChild(gombbah)
gombbah.innerText = "RowSpan hozzáadás"
gombbah.addEventListener('click', nemtudom.bind(rowspan))