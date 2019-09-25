
function last_update(){
    d = new Date(document.lastModified)
    str_d = str(d.getFullYear()) + str(d.getMonth()+1) + str(d.getDate())
    document.write(str_d)
    return
}

