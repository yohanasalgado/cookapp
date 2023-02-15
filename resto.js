function Contacto() 
{
	var a = document.getElementById("nombre");
	var b = document.getElementById("apellido");
	var c = document.getElementById("telefono");
    var d = document.getElementById("email");
	if(a.value == "" || b.value == "" || c.value == "" || d.value == "")
	{
		alert("Por favor, complete todos los campos requeridos");
		document.getElementById("apellido").focus();
		return false;
	}
	else
	{
		if(a.value.length <= 3 || b.value.length <= 3)
		{
			alert("Ni el nombre, ni el apellido pueden ser menos de 3 caracteres");
			document.getElementById("apellido").focus();
			return false;
		}
		else
		{
			if(isNaN(c.value))
			{
				alert("El telefono debe estar compuesto con numeros unicamente");
				c.value = "";
				document.getElementById("telefono").focus();
				return false;
			}
			else
			{
                if(c.value.length < 8)
				{
					alert("Por favor introduzca un telefo valido, minimo de 8 caracteres");					
                    document.getElementById("telefono").focus();
                    return false;
				}
				else
				{
					nombre=contac.nombre.value;
					sessionStorage.setItem("nombre",nombre);
					apellido=contac.apellido.value;
					sessionStorage.setItem("apellido",apellido);
					telefono=contac.telefono.value;
					sessionStorage.setItem("telefono",telefono);
					email=contac.email.value;
					sessionStorage.setItem("email",email);
					consulta=contac.consulta.value;
					sessionStorage.setItem("consulta",consulta);
	                alert("¡Gracias! Nos pondremos en contacto con usted brevemente.");
	                return true;
				}
			}
		}
	}
}
function VerContacto()
{
	nombre=sessionStorage.getItem("nombre");
	document.getElementById('n').value=nombre;
	apellido=sessionStorage.getItem("apellido");
	document.getElementById('a').value=apellido;
	telefono=sessionStorage.getItem("telefono");
	document.getElementById('t').value=telefono;
    email=sessionStorage.getItem("email");
    document.getElementById('e').value=email;
    consulta=sessionStorage.getItem("consulta");
    document.getElementById('c').value=consulta;
}
function Pedido() 
{
	persona=ped.personas.value;
	sessionStorage.setItem("persona",persona);
	adulto=ped.adulto.value;
	sessionStorage.setItem("adulto",adulto);
	niño=ped.niño.value;
	sessionStorage.setItem("niño",niño);
	comida=ped.comidas.value;
	sessionStorage.setItem("comida",comida);
	postre=ped.postres.value;
	sessionStorage.setItem("postre",postre);
	bebida=ped.bebidas.value;
	sessionStorage.setItem("bebida",bebida);
	trago=ped.tragos.value;
	sessionStorage.setItem("trago",trago);
	observaciones=ped.observaciones.value;
	sessionStorage.setItem("observaciones",observaciones);
    alert("¡Gracias por su pedido!");
}
function Pedidos()
{
	persona=sessionStorage.getItem("persona");
	document.getElementById('p').value=persona;
	adulto=sessionStorage.getItem("adulto");
	document.getElementById('ad').value=adulto;
	niño=sessionStorage.getItem("niño");
	document.getElementById('ni').value=niño;
	comida=sessionStorage.getItem("comida");
	document.getElementById('c').value=comida;
	postre=sessionStorage.getItem("postre");
	document.getElementById('po').value=postre;
	bebida=sessionStorage.getItem("bebida");
	document.getElementById('b').value=bebida;
	trago=sessionStorage.getItem("trago");
	document.getElementById('tr').value=trago;
	observaciones=sessionStorage.getItem("observaciones");
	document.getElementById('o').value=observaciones;
}
function Reserva()
{
	var a = document.getElementById("nombre");
	var b = document.getElementById("apellido");
	var c = document.getElementById("telefono");
    var d = document.getElementById("email");
    var x = document.getElementById("fecha");
    var y = document.getElementById("hora");
    var z = document.getElementById("personas");
    var o = document.getElementById("observaciones");
	if(a.value == "" || b.value == "" || c.value == "" || d.value == "")
	{
		alert("Por favor, complete todos los campos requeridos");
		document.getElementById("apellido").focus();
		return false;
	}
	else
	{
		if(a.value.length <= 3 || b.value.length <= 3)
		{
			alert("El nombre y apellido no pueden ser menos de 3 caracteres");
			document.getElementById("apellido").focus();
			return false;
		}
		else
		{
			if(isNaN(c.value))
			{
				alert("El telefono debe estar compuesto de números");
				c.value = "";
				document.getElementById("telefono").focus();
				return false;
			}
			else
			{
				if(c.value.length < 8)
				{
					alert("Por favor introduzca un teléfono valido, mínimo de 8 caracteres");					
                    document.getElementById("telefono").focus();
                    return false;
				}
				else
				{
					fecha=reser.fecha.value;
					sessionStorage.setItem("fecha",fecha);
					hora=reser.hora.value;
					sessionStorage.setItem("hora",hora);
					persona=reser.personas.value;
					sessionStorage.setItem("persona",persona);
					nombre=reser.nombre.value;
					sessionStorage.setItem("nombre",nombre);
					apellido=reser.apellido.value;
					sessionStorage.setItem("apellido",apellido);
					telefono=reser.telefono.value;
					sessionStorage.setItem("telefono",telefono);
					email=reser.email.value;
					sessionStorage.setItem("email",email);
					observaciones=reser.observaciones.value;
					sessionStorage.setItem("observaciones",observaciones);
                    alert("¡Gracias por su reserva!");
                    return true;
				}
			}
		}
	}
}
function Reservas()
{
	fecha=sessionStorage.getItem("fecha");
	document.getElementById('f').value=fecha;
	hora=sessionStorage.getItem("hora");
	document.getElementById('h').value=hora;
	persona=sessionStorage.getItem("persona");
	document.getElementById('p').value=persona;
	nombre=sessionStorage.getItem("nombre");
	document.getElementById('n').value=nombre;
	apellido=sessionStorage.getItem("apellido");
	document.getElementById('a').value=apellido;
	telefono=sessionStorage.getItem("telefono");
	document.getElementById('t').value=telefono;
	email=sessionStorage.getItem("email");
	document.getElementById('e').value=email;
	observaciones=sessionStorage.getItem("observaciones");
	document.getElementById('o').value=observaciones;
}