let a=document.getElementById("color")
let b=document.getElementById("bradius")
let image=document.querySelector("img")

function colorchange(z){
    console.log(z);

    if(z.key==="Enter"){
        document.body.style.backgroundColor=a.value
    }
}

function radiuschange(z){
    console.log(z)
    if(z.key==="Enter"){
        image.style.borderRadius=`${b.value}px`
    }
}