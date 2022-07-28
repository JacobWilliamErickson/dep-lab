brokenbtn=()=>{
    try {
        nonExistentFunction();
      } catch (error) {
        axios
            .get('/api/contact')
            .then(res => {
            }).catch()
      }
}
let broken = document.querySelector("#broken");
broken.addEventListener("click", brokenbtn);
