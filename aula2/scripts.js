(()=>{
    const ArraylistFruit = new Array();

    /**@type {HTMLInputElement}*/
    const inputFruit = document.querySelector("#fruit");
    /**@type {HTMLButtonElement}*/
    const btnAddFruit = document.querySelector(".add-fruit");
    /**@type {HTMLUListElement}*/
    const ulListFruit = document.querySelector(".list-fruit");

    btnAddFruit.onclick = () => {
        const fruit = inputFruit.value;

        ArraylistFruit.push(fruit);
        ArraylistFruit.sort();

        ulListFruit.innerHTML = ArraylistFruit.map(f => `<li>${f}</li>`).join("");
    }
})();