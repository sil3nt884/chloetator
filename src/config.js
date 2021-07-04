const yaml  = require('yaml')
const fs = require('fs');



let config;

fs.watch('src/config.yaml', ()=> {
    const yamlFile = fs.readFileSync('src/config.yaml', 'utf8')
    config = yaml.parse(yamlFile)
})

module.exports = ()=> {


    if(!config) {
        const yamlFile  = fs.readFileSync('src/config.yaml', 'utf8');
        config = yaml.parse(yamlFile)
    }


    const getConfig = () => {
        return config
    }


    return { getConfig }
}

