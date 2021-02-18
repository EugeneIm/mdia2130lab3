
window.onload = doStuff // when the window is finished loading, call the doStuff function
function doStuff()
{
let textbox = document.getElementById("t")
textbox.onkeyup = function()
{
    document.getElementById('para').innerHeight = this.value
}

textbox.onclick = function()
{

    //if the textbox has "dog" in it, the dog image has to have a red border dotted

if(this.value.toLowerCase() == "water")
{
    document.getElementById('fish').style.border = "3px red dashed"
    document.getElementById('turtle').style.border = "3px red dashed"
}


if(this.value.toLowerCase() == "dog")
{
    document.getElementById('dog').style.border = "5px red dashed"
}
    else if (this.value.toLowerCase() == "bird")
{
    document.getElementById('bird').style.border = "5px red dashed"
}
    else if(this.value.toLowerCase() == "fish")
{
    document.getElementById('fish').style.border = "5px red dashed"
}
    else if(this.value.toLowerCase() == "cat")
{
    document.getElementById('cat').style.border = "5px red dashed"
}
    else if(this.value.toLowerCase() == "turtle")
{
    document.getElementById('turtle').style.border = "5px red dashed"
}

    else if(this.value.toLowerCase() == ("joke"))
{
    paras = document.getElementsByTagName('p');

    for(var i = 0; i < paras.length; i++)
    {
        paras[i].style.border = "2px red dashed"
    }
}

    else if(this.value.toLowerCase() == "all")
    {
        paras = document.getElementsByTagName('img');

        for(let i = 0; i < paras.length; i++)
        {
            paras[i].style.border = "3px red dashed"
        }
    }

if(this.value.toLowerCase() == "")
{
    setTimeout(alert("missing data"), 3000)
    document.getElementById('t').style.backgroundColor = "yellow"
}

if(this.value.toLowerCase() == "")
{
    document.getElementsByTagName('p').innerHTML = this.value
}
}

textbox.onkeyup = function()
{
    document.getElementById('para').innerHeight = this.value
}

var img = document.getElementsByTagName('img');
for(i = 0;i < img.length; i++)
{
    if(img.length >= 3)
    {
        img[i].style.width = "200px"
    }
}
}