const jsYaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const main = () => {
  const episodePath = process.env.YAML_PATH
  if (episodePath) {
    const yaml = readYaml(episodePath)
    const json = JSON.stringify(yaml)
    try {
      const filePath = path.join(__dirname, '../public/episode.json')
      console.log(filePath)
      fs.writeFileSync(filePath, json)
    } catch (e) {
      console.log(e)
    }
  } else {
    console.error('process.env.YAML_PATH is require.')
  }
}


const readYaml = (path) => {
  // https://github.com/nodeca/js-yaml
  // Get document, or throw exception on error
  try {
    const text = fs.readFileSync(path, 'utf8')
    const doc = jsYaml.safeLoad(text)
    return doc
  } catch (e) {
    console.log(e)
  }
}

main()
