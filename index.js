

function generatePassword(x) {
    var length = x,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


var btn = document.querySelector('#bttn')

btn.addEventListener('click', function abc() {
    var x = prompt("Input Length of Password")
    if (x === '') {
        alert("enter value")
    } else {
        var a = generatePassword(x)
        document.getElementById('text').value = a;
        var cpy = document.getElementById('copy')
        cpy.addEventListener('click', function name() {

            var txt = document.getElementById('text')
            // Select the text field
            txt.select();
            txt.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the text field
            navigator.clipboard.writeText(txt.value);
            alert("Value Copied is: " + txt.value);
            txt.value = "";
        })
    }
})

