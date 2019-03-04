    document.getElementById("btn_encriptar").addEventListener("click",()=>{
    const string = document.getElementById("string").value;
    const offset = parseInt(document.getElementById("offset").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = cipher.encode(string,offset);
});
document.getElementById("btn_desencriptar").addEventListener("click",()=>{
    const string = document.getElementById("string").value;
    const offset = parseInt(document.getElementById("offset").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML=cipher.decode(string,offset);
});

