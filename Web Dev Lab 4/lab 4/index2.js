
window.onload = doStuff // when the window is finished loading, call the doStuff function
function doStuff()
{
let textbox = document.getElementById("t")
let paras = document.getElementsByTagName('p');
textbox.onkeyup = function()
{
    document.getElementById('para').innerHeight = this.value
}

textbox.onclick = function()
{
    if(this.value.toLowerCase() == "dog")
    {
        document.getElementById('dog').style.border = "5px red dashed"
    }
    else
    {
        document.getElementById('dog').style.border = ""
    }
    if(this.value.toLowerCase() == "bird")
    {
        document.getElementById('bird').style.border = "5px red dashed"
    }
    else
    {
        document.getElementById('bird').style.border = ""
    }
    if(this.value.toLowerCase() == "cat")
    {
        document.getElementById('cat').style.border = "5px red dashed"
    }
    else 
    {
        document.getElementById('cat').style.border = ""
    }
    if(this.value.toLowerCase() == "fish")
    {
        document.getElementById('fish').style.border = "5px red dashed"
    }
    else
    {
        document.getElementById('fish').style.border = ""
    }
    if(this.value.toLowerCase() == "turtle")
    {
        document.getElementById('turtle').style.border = "5px red dashed"
    }
    else
    {
        document.getElementById('turtle').style.border = ""
    }
    if(this.value.toLowerCase() == "all")
    {
        paras = document.getElementsByTagName('img');
        for(let i = 0; i < paras.length; i++)
        {
            paras[i].style.border = "3px red dashed"
        }
    }
    if(this.value.toLowerCase() == "")
    {
        alert("missing data")
        document.getElementById('t').style.backgroundColor = "yellow"
    }
    if(this.value.toLowerCase() == "water")
    {
        document.getElementById('fish').style.border = "3px red dashed"
        document.getElementById('turtle').style.border = "3px red dashed"
    }
    
    let textvalue = this.value;
    if(textvalue.toLowerCase().includes("joke"))
    {
        paras = document.getElementsByTagName('p');
        for(var i = 0; i < paras.length; i++)
        {
            paras[i].style.border = "2px red dashed"
        }
    }
}

function paraYellow()
{
    this.style.backgroundColor = "yellow"
}
function paraWhite()
{
    this.style.backgroundColor = "white" 
}

onload = function()
{
    var paras = document.getElementsByTagName('p')

    for(var i = 0; i < paras.length; i++)
    {
        paras[i].onmouseover = paraYellow
    }
    for(var i = 0; i< paras.length; i++)
    {
        paras[i].onmouseleave = paraWhite
    }

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
