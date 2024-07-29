function bgchanger() {
    let img = document.getElementById("num1").value;
    console.log(img);
    // document.body.style.background = 'red';
    document.body.style.background = `url(${img})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
