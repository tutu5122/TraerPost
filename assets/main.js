const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    try{
        const response = await fetch(url);
        const datos = await response.json();
        console.log(datos)

        let listaPost = document.getElementById("post-data");

        datos.forEach(element => {
            listaPost.innerHTML += `<ul> 
                                        <li style="font-weight: bold;">${element.title}</li> 
                                        <li  style="list-style-type: none;">${element.body}</li> 
                                    </ul> `;

        });
        
    }catch (error){
        console.error(error);
    }
};
