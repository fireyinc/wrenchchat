import * as fs from 'fs'
import * as os from 'os'

var data = []

export function test(){
    return 'hello'
}

export function fstest(){
    var homedirectory = os.homedir()
    fs.writeFileSync(`${homedirectory}/information.txt`, "grease pump")
    return homedirectory
}

// export async function init(presets) {
//     documentDir().then((value)=>{
//         console.log(value)
//         exists(`${value}/data.json`).then(async (val) => {
//             console.log(val)
//             if (!val){
//                 if (presets != null){
//                     await fs.writeTextFile(`data.json`, `${JSON.stringify(presets)}`, { dir: BaseDirectory.Document})
//                 }   
//                 else {
//                     await fs.writeTextFile(`data.json`, '{}', { dir: BaseDirectory.Document})
//                 }
                
//             }
//         })
//     })
// }

// export async function load(){

//     data = JSON.parse(await fs.readTextFile('data.json', { dir: BaseDirectory.Document}))
   
// }

// export function get(keyname){
//     return data[keyname]
// }

// export async function save(){
//     await fs.writeTextFile(`data.json`, `${JSON.stringify(data)}`, { dir: BaseDirectory.Document})
// }

// export async function erasedata(){
//     await fs.writeTextFile(`data.json`, " ", { dir: BaseDirectory.Document})
// }

// export function getall(){
//     return data
// }

export function set(name, value){
    var homedirectory = os.homedir()
    Object.assign(data, {[name]: value})
    fs.writeFileSync(`${homedirectory}/.wrenchchat/store.json`, JSON.stringify(data))
}


