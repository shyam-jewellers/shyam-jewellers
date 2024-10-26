// dom selection and variables
const selector = document.getElementById('filter-selection')
let cardbox = document.getElementById('cardboxid')
let heading = document.getElementById('heading')
const params = new URLSearchParams(window.location.search);
const key = params.get('key');

// datatypes
const productinfo = [
    {},
    {
        name: 'Aad',
        imagesLength: 21
    },
    {
        name: 'Baaju',
        imagesLength: 19
    },
    {
        name: 'Bangels',
        imagesLength: 91
    },
    {
        name: 'Chain',
        imagesLength: 19
    },
    {
        name: 'Chokar',
        imagesLength: 23
    },
    {
        name: 'Jhumka',
        imagesLength: 79
    },
    {
        name: 'Mang Tika',
        imagesLength: 10
    },
    {
        name: 'Mangalsutra',
        imagesLength: 133
    },
    {
        name: 'Nath',
        imagesLength: 19
    },
    {
        name: 'Necklace',
        imagesLength: 37
    },
    {
        name: 'Payal',
        imagesLength: 27
    },
    {
        name: 'Rakhdi',
        imagesLength: 24
    },
    {
        name: 'Rings',
        imagesLength: 50
    },
    {
        name: 'Silver Baaju',
        imagesLength: 20
    },
    {
        name: 'Sui Dhaga',
        imagesLength: 16
    },
    {
        name: 'Tevta',
        imagesLength: 35
    }
]

// functions

const allLoad = () => {
    let data = ''
    productinfo.map((element) => {
        heading.innerHTML = "All"
        for (i = 1; i <= element.imagesLength; i++) {
            data += `<div class="card"> <img src="images/${element.name}/p${i}.jpg"></div>`
        }
    })
    cardbox.innerHTML = data
}

const handleLoad = (e) => {
    if (Number(e.target.value) == 0) {
        allLoad();
    }

    else {
        const listno = Number(e.target.value)
        heading.innerHTML = String(productinfo[listno].name)
        let data = ''
        for (i = 1; i <= productinfo[listno].imagesLength; i++) {
            data += `<div class="card"> <img src="images/${productinfo[listno].name}/p${i}.jpg"></div>`
        }
        cardbox.innerHTML = data
    }
}



// event listener
selector.addEventListener('change', handleLoad)

// funtion run when page load 
allLoad();

//handlebutton
if (key) {
    const mye = {
        target: { value: key }
    }
    selector.value=key
    handleLoad(mye);
}