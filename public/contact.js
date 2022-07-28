brokenbtn=()=>{
    try {
        nonExistentFunction();
      } catch (error) {
        axios
            .get('/api/contact')
            .then(res => {
            }).catch()
            alert("c'mon I said not to click it");
}}
let broken = document.querySelector("#broken");
broken.addEventListener("click", brokenbtn);
