(()=>{
    document.addEventListener("DOMContentLoaded", function (event) {
        
        const app = document.getElementById('app');
        app.style.display = "flex";
        app.style.width = "100%";
        app.style.height = "100vh";
        app.style.alignItems = "center";
        app.style.justifyContent = "center";

        const div = document.createElement('div');
        div.style.height = '500px';
        div.style.width = '500px';
        div.style.backgroundColor = "#fff";
        div.style.border = '1px solid lightgray';
        div.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';

        const divHead = document.createElement('div');
        divHead.style.position = 'relative';
        divHead.style.width = '100%';

        const h1 = document.createElement('h1');
        h1.textContent = "Total";
        h1.style.textAlign = "center";
        const divReset = document.createElement('div');
        divReset.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/560/560463.png")';
        divReset.style.width = '25px';
        divReset.style.height = '25px';
        divReset.style.backgroundPosition = 'center';
        divReset.style.backgroundSize = 'cover';
        divReset.style.position = 'absolute';
        divReset.style.top = 0;
        divReset.style.right = 0;
        divReset.style.margin = '10px';
        divReset.style.cursor = 'pointer';
        divReset.addEventListener('click',function(){
            input.value = 0;
            inputMan.value = 0;
            inputWoman.value = 0;
        })

        const input = document.createElement('input');
        input.style.textAlign = "center";
        input.style.width = '50px';
        input.disabled = true;
        input.value = 0;

        const divCount = document.createElement('div');
        divCount.style.width = '100%';
        divCount.style.height = '100%';
        divCount.style.display = 'flex';

        const divMan = document.createElement('div');
        divMan.style.width = '50%';
        divMan.style.textAlign = 'center';
        const imgMan = document.createElement('img');
        imgMan.src = 'https://cdn-icons-png.flaticon.com/512/4042/4042356.png';
        imgMan.style.width = '100px';
        imgMan.style.height = '100px';
        const divSumSubMan = document.createElement('div');
        const buttonSumMan = document.createElement('button');
        buttonSumMan.textContent = '+';
        buttonSumMan.addEventListener('click',function(){
            inputMan.value = parseInt(inputMan.value) + 1;
            input.value = parseInt(inputMan.value) + parseInt(inputWoman.value);
        });
        const buttonSubMan = document.createElement('button');
        buttonSubMan.textContent = '-';
        buttonSubMan.addEventListener('click',function(){
            inputMan.value = parseInt(inputMan.value) - 1;
            input.value = parseInt(inputMan.value) + parseInt(inputWoman.value);
        });
        const h5Man = document.createElement('h5');
        h5Man.textContent = 'Homens';
        const inputMan = document.createElement('input');
        inputMan.style.textAlign = "center";
        inputMan.style.width = '50px';
        inputMan.disabled = true;
        inputMan.value = 0;

        const divWoman = document.createElement('div');
        divWoman.style.width = '50%';
        divWoman.style.textAlign = 'center';
        const imgWoman = document.createElement('img');
        imgWoman.style.width = '100px';
        imgWoman.style.height = '100px';
        imgWoman.src = 'https://cdn-icons-png.flaticon.com/512/4042/4042422.png';
        const divSumSubWoman = document.createElement('div');
        const buttonSumWoman = document.createElement('button');
        buttonSumWoman.textContent = '+';
        buttonSumWoman.addEventListener('click',function(){
            inputWoman.value = parseInt(inputWoman.value) + 1;
            input.value = parseInt(inputMan.value) + parseInt(inputWoman.value);
        });
        const buttonSubWoman = document.createElement('button');
        buttonSubWoman.textContent = '-';
        buttonSubWoman.addEventListener('click',function(){
            inputWoman.value = parseInt(inputWoman.value) - 1;
            input.value = parseInt(inputMan.value) + parseInt(inputWoman.value);
        });
        const h5Woman = document.createElement('h5');
        h5Woman.textContent = 'Mulheres';
        const inputWoman = document.createElement('input');
        inputWoman.style.textAlign = "center";
        inputWoman.style.width = '50px';
        inputWoman.disabled = true;
        inputWoman.value = 0;

        app.appendChild(div);
        div.appendChild(divHead);
        divHead.appendChild(h1);
        divHead.appendChild(divReset);
        div.appendChild(input);
        div.appendChild(divCount);
        // -
        divCount.appendChild(divMan);
        divMan.appendChild(imgMan);
        divMan.appendChild(divSumSubMan);
        divSumSubMan.appendChild(buttonSumMan)
        divSumSubMan.appendChild(buttonSubMan);
        divMan.appendChild(h5Man);
        divMan.appendChild(inputMan);
        // -
        divCount.appendChild(divWoman);
        divWoman.appendChild(imgWoman);
        divWoman.appendChild(divSumSubWoman);
        divSumSubWoman.appendChild(buttonSumWoman)
        divSumSubWoman.appendChild(buttonSubWoman);
        divWoman.appendChild(h5Woman);
        divWoman.appendChild(inputWoman);

    });
})();