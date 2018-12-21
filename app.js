(()=>{
    let formulario = document.getElementById('formulario'),
        inputCaracteres = document.getElementById('caracteres'),
        botonMas = document.getElementById('mas'),
        botonMenos = document.getElementById('menos'),
        botonGenerar = document.getElementById('generar'),
        inputGenerar = document.getElementById('inputGenerar'),
        configuracion = {
            caracteres: parseInt(inputCaracteres.value),
            numeros: true,
            mayusculas: true,
            simbolos: true,
            minusculas: true
        },
        caracteres = {
            numeros: '0 1 2 3 4 5 6 7 8 9',
            simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? / ─ · ^ ¨ ~ | ° ¬ · @ ¸ æ « » ß ł € ð ¢ đ ¶ t ŧ ŋ ħ ← ↓ µ → ł ø',
            mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
            minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
        },
        newConfiguracion;
        
        function agregar(){
            configuracion.caracteres++;
		    inputCaracteres.value = configuracion.caracteres;
        }
        function sustraer(){
            if(configuracion.caracteres>4){
                configuracion.caracteres--;
                inputCaracteres.value = configuracion.caracteres;
            }
        }
        function generarContraseña(){
            var caracteresFinales = '';
            var password = '';
            for(propiedad in configuracion){
                if (configuracion[propiedad] == true){
                    caracteresFinales += caracteres[propiedad] + ' ';
                }
            }
            caracteresFinales = caracteresFinales.trim();
            caracteresFinales = caracteresFinales.split(' ');
            for(var i = 0; i < configuracion.caracteres; i++){
                password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
            }
		    inputGenerar.value = password;
        }
        function letras(e){
            const referencia=e.target.id;
            if ((e.target.nodeName==='INPUT' || e.target.type==='button') && e.target.value==="si"){
            e.target.value="no"
            newConfiguracion=!configuracion[referencia]
            configuracion[referencia]=newConfiguracion
            }
            else if ((e.target.nodeName==='INPUT' || e.target.type==='button') && e.target.value==="no"){
                e.target.value= "si"
                newConfiguracion=!configuracion[referencia]
                configuracion[referencia]=newConfiguracion
            }
        }
        function copiar(){
            inputGenerar.select()
            document.execCommand("copy");
            alert('copiado')
        }

        botonMas.addEventListener('click',agregar)
        botonMenos.addEventListener('click',sustraer)
        botonGenerar.addEventListener('click',generarContraseña)
        formulario.addEventListener('click',letras)
        inputGenerar.addEventListener('click',copiar)
        generarContraseña()
})() 