const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll(".draggable")


draggables.forEach((draggable)=>{
  draggable.addEventListener("dragstart", ()=>{
    draggable.classList.add("dragging")
  })


  draggable.addEventListener("dragend", ()=>{
    draggable.classList.remove("dragging")
  })
})



containers.forEach((container)=>{
  container.addEventListener("dragover", ()=>{
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable)
  })
})