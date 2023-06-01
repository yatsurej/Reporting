const fs = require('fs'); //fs = file system

//read files; fs functions are asynchronous which means it takes some time to do

fs.readFile('./file.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// write files
fs.writeFile('./file.txt', 'Hello, world', () => {
    console.log('file was written');
});

fs.writeFile('./file2.txt', 'Hello, again', () => {
    console.log('file was written');
});

//directories
// fs.mkdir('./assets', (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log('folder created');
// });

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//delete files
if (fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}