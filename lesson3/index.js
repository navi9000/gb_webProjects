import './src/file.scss'

import items from './src/items.js'
import buildCard from './src/buildCard.js'

const root = document.getElementById('grid')
items.map(item => root.appendChild(buildCard(item.header, item.content, item.type)))

