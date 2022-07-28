brokenbtn=()=>{
    try {
        nonExistentFunction();
      } catch (error) {
        axios
            .get('/api/contact')
            .then(res => {
            })
      }
}
let broken = document.querySelector("#broken");
broken.addEventListener("click", brokenbtn);
