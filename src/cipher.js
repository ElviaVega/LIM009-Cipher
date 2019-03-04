window.cipher = {
  encode: (string,offset) => {
    let msjE="";
    for(let i=0;i<string.length;i++){
      msjE+=String.fromCharCode((string.charCodeAt(i)-65+offset)%26+65);
    } return msjE;
  }
,
  decode: (string,offset) => {
  let msjD="";
    for(let i=0;i<string.length;i++){
      msjD+=String.fromCharCode((string.charCodeAt(i)-90-offset)%26+90);
    } return msjD;

  }
};
