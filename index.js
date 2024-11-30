const cl = document.getElementById("close")
const modal = document.getElementById("modal")
const search = document.querySelector(".search")

cl.onclick = ()=>{
    modal.style.display = "none"
}

search.onclick = ()=>{
    modal.style.display = "flex"
}
