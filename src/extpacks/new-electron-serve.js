import * as fs from 'fs'
import * as os from 'os'

export function test(){
    return 'hello'
}

export function fstest(){
    var homedirectory = os.homedir()
    fs.writeFileSync(`${homedirectory}/information.txt`, "grease pump")
    return homedirectory
}
