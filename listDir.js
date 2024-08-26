import fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

import dirTree from 'directory-tree'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirToList = path.join(__dirname, 'public/docs')

const allExt = {}

const callback = (item, path) => {
  item.path = path.substring(dirToList.length)

  if (item.extension) {
    allExt[item.extension] = allExt[item.extension] || []
    // allExt[item.extension].push(item.path)
  }
}

const tree = dirTree(
  dirToList,
  { normalizePath: true, attributes: ['extension'] },
  callback,
  callback
)

// console.log(allExt)

fs.writeFileSync(path.join(__dirname, 'public/docs.js'), 'window.docs = ' + JSON.stringify(tree))
