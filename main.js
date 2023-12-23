document.write("29.to fill an array with values (numeric, string with one character) on supplied bounds."+"<br>");
function test29(s,e,stp){
    var ab=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var x=[];
    var y=ab.indexOf(s);
    var z=ab.indexOf(e);
    // console.log(y);
    for(let i=y;i<z;i++){
        if(i%stp==0){
            x.push(ab[i]);
        }
    }
    return x;
}
document.write(test29("a","z",2)+"<br><br>");