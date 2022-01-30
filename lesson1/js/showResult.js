import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js'

const result = document.getElementById('calc_result')

function convertValuesToString(name, value) {
    switch(value) {
        case 0: return ''
        case 1: return `${value} ${name}`.slice(0, -1)
        default: return `${value} ${name}`
    }
}

function putTogetherOutputString(data) {
    const diffObject = data[1].diff(data[0], ['years', 'months', 'days']).toObject()
    const outputParts = []
    for (const key in diffObject) {
        const value = convertValuesToString(key, diffObject[key])
        if (value) outputParts.push(value)
    }
    switch (outputParts.length) {
        case 0: return 'Same date'
        case 1: return outputParts[0]
        case 3: outputParts[0] += ','
        case 2: 
        outputParts.splice(-1, 0, 'and')
        return outputParts.join(' ')
    }
}

export default function showResult(...args) {
    result.style.color = 'black'
    const convertedArgs = args.sort().map(arg => DateTime.fromISO(arg))
    result.innerHTML = putTogetherOutputString(convertedArgs)
}