import fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

import dirTree from 'directory-tree'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirToList = path.join(__dirname, 'public/docs')

const callback = (item, path) => {
  item.path = path.substring(dirToList.length)
}

const tree = dirTree(dirToList, { normalizePath: true }, callback, callback)

fs.writeFileSync(path.join(__dirname, 'public/docs.js'), 'window.docs = ' + JSON.stringify(tree))
