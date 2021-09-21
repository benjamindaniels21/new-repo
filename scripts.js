const para = document.querySelector("#para");

para.addEventListener("click", () => changeText());

function changeText(){
    para.textContent="You changed me."
      setTimeout(() => {para.textContent="Psych!"}, 5000);

}