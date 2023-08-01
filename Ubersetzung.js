const Korean = 0;
const English = 1;

function ubersetzung(matrix, langEnum, name) {
    if(matrix[langEnum] == undefined || document.getElementsByTagName(name).length != matrix[langEnum].length) 
    {
        return 1;
    }

    for(let i = 0; i < matrix[langEnum].length; i++) 
    {
        document.getElementsByTagName(name)[i].innerHTML = matrix[langEnum][i];
    }
    
    return 0;
}