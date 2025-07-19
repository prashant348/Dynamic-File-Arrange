const fs = require('fs')

function arrangeFiles(folderName) {
    const files = fs.readdirSync(folderName)
    
    files.forEach(file => {
        const extension = file.split('.')[1]
        const existingFiles = fs.readdirSync(__dirname)
        if (existingFiles.includes(extension)) {
            try {
                fs.rename(`assets/${file}`, `${extension}/${file}`, (err) => {
                    if (err) console.log('Error from callback func of .rename() dfgfdg: ', err)
                })
                console.log(`Success: ${file} file moved to ${extension} successfully!`)
            } catch (error) {
                console.log('Failure: Error in moving file: ', error)
            }
        } else {
            fs.mkdir(extension, (err) => {
                if (err) {
                    console.log(`Error in making dir ${extension}: `, err)
                } else {
                    try {
                        fs.rename(`assets/${file}`, `${extension}/${file}`, (err) => {
                            if (err) console.log('Error from callback func of .rename(): ', err)
                        })
                        console.log(`Success: ${file} file moved to ${extension} successfully!`)
                    } catch (error) {
                        console.log('Failure: Error in moving file: ', error)
                    }
                }
            })
        }
    })
}

arrangeFiles("assets") // enter the folder name 

// const files = fs.readdirSync(__dirname)
// console.log(files)



