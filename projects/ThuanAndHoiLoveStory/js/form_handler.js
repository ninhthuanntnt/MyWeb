function handleSubmitPasswordGift(event) {
    let password = event.target[0].value;
    event.preventDefault();
    if (CryptoJS.MD5(password).toString() === "391a72c8a0456d60aa637dc51d306144") {
        console.log("Password ok")
        window.location = "random-asooipzoixopiu214iouhiuo2134uhiasiufknb1k2bn34klj2134iohpojiasdvn0106.html"
    }

    return false;
}