import * as fs from 'fs'
import * as os from 'os'

var data = {}

export function test(){
    return 'hello'
}

export function fstest(){
    var homedirectory = os.homedir()
    fs.writeFileSync(`${homedirectory}/information.txt`, "grease pump")
    return homedirectory
}

export function set(name, value){
    var homedirectory = os.homedir()
    Object.assign(data, {[name]: value}) 
    fs.mkdirSync(`${homedirectory}/.wrenchchat`, {recursive: true})
    fs.writeFileSync(`${homedirectory}/.wrenchchat/store.json`, JSON.stringify(data))
    console.log(data)
}

export function get(name){
    return data[name]
}

export function load(){
    var homedirectory = os.homedir()
    fs.mkdirSync(`${homedirectory}/.wrenchchat`, {recursive: true})
    try {
        data = JSON.parse(fs.readFileSync(`${homedirectory}/.wrenchchat/store.json`))
    }
    catch{
        set("selectedguild", 0)
    }
}


