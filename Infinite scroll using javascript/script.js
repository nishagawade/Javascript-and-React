//https://jsonplaceholder.typicode.com/posts?_limit=4_page=1

const container = document.querySelector('.container')
let limit = 4;
let postCount = 1;
let pageCount = 1;

const getPosts = async() =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}`)
    const data = await response.json();
    console.log(data);

    data.map((currEle, index)=>{
        const htmlData = `
        <div class="posts">
           <p id="post-id">${postCount++}</p>
           <h2 class="title">${currEle.title}</h2>
           <p class="post-info">${currEle.body}</p>
        </div>
        `

        container.insertAdjacentHTML("beforeend", htmlData)
    })
}

getPosts()

const showData = () =>{
    setTimeout(()=>{
        pageCount++
        getPosts(); 
    }, 300)
}

window.addEventListener("scroll", ()=>{
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        showData()
    }
})
