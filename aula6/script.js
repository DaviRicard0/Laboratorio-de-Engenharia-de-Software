(()=>{
    const fields = Object.freeze({
        main: {
            el: document.createElement("div"),
            get element(){
                const div = this.el;
                Object.assign(div.style,this.style)

                return div;
            },
            /**@type {CSSStyleDeclaration} */
            style:{
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent:'center',
                alignItems:'center'
            }
        },
        calculator: {
            el: document.createElement("div"),
            get element(){
                const div = this.el;
                Object.assign(div.style,this.style)

                return div;
            },
            /**@type {CSSStyleDeclaration} */
            style:{
                background: 'black',
                display:"flex",
                justifyContent:'center',
                width: '400px',
                height: '500px',
                flexDirection:"column"
            }
        },
        display: {
            el: document.createElement("div"),
            get element(){
                const div = this.el;
                Object.assign(div.style,this.style)
                div.textContent = 0;

                return div;
            },
            /**@type {CSSStyleDeclaration} */
            style:{
                width: '90%',
                height: '20%',
                marginTop:'5px',
                color:'white',
                display: 'flex',
                justifyContent: 'end',
                alignItems:'center',
                fontSize:'70px',
                paddingRight:'30px'
            }
        },
        key: {
            element(key,color){
                const buttom = document.createElement("button");
                Object.assign(buttom.style,this.style)
                buttom.textContent = key;
                buttom.style.backgroundColor = color;
                buttom.onclick = function () {
                    calculator.insertDisplay(key);
                }

                return buttom;
            },
            /**@type {CSSStyleDeclaration} */
            style:{
                width:'90px',
                height:'60px',
                margin:'5px',
                borderRadius:'5px',
                fontSize:'20px',
                cursor:'pointer'
            }
        },
        keyboard:{
            el: document.createElement("div"),
            get element(){
                const div = this.el;
                Object.assign(div.style,this.style);

                [
                    ["AC","lightgray"],
                    ["+/-","lightgray"],
                    ["%","lightgray"],
                    ["/","orange"],
                    ["7","default"],
                    ["8","default"],
                    ["9","default"],
                    ["x","orange"],
                    ["4","default"],
                    ["5","default"],
                    ["6","default"],
                    ["-","orange"],
                    ["1","default"],
                    ["2","default"],
                    ["3","default"],
                    ["+","orange"],
                    ["0","default"],
                    [",","default"],
                    ["=","orange"]
                ].forEach((val)=> {
                    div.appendChild(fields.key.element(val[0],val[1] === 'default' ? '' : val[1]));
                })

                return div;
            },
            /**@type {CSSStyleDeclaration} */
            style:{
                width: '100%',
                height: '80%',
            }
        }
    });

    const calculator = {
        display:fields.display.element,
        insertDisplay(key) {
            if (this.display.textContent === "0") {
                this.display.textContent = key;
                return;
            }

            if (key === ",")
                key = ".";

            if (key === "AC") {
                this.display.textContent = "0";
                return;
            }

            if (key === "%") {
                const result = this.display.textContent;
                this.display.textContent = result / 100;
                return;
            }

            if (key === "=") {
                try {
                    let result = this.display.textContent.replaceAll("x","*");
                    this.display.textContent = eval(result);
                } catch (error) {
                    alert("Valor inválido!");
                }
                return;
            }

            this.display.textContent = this.display.textContent + key;
        }
    }


    const app = document.getElementById("app");

    document.body.style = "margin:0px";
    app.appendChild(fields.main.element).appendChild(fields.calculator.element).append(fields.display.element,fields.keyboard.element);
})()