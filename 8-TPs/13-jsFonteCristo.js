/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function
NumerosPares ()
{

  let num; //numero que me dan como parametro
  let cantPares;// variable donde cuento cuantos pares hay

  cantPares = 0;
  num = parseInt (document.getElementById ("txtIdNumero").value);//Guardo en la variable num el numero que pase el cliente
  if (num >= 0 && !(isNaN (num)))// 1ero es positov? 2do es un numero?
    {
      do
	{
	  if ((num % 2) == 0)
	    {cantPares++}
	  num--;
	}
      while (num != 0);
    }
  else
    {
      alert ("numero no positivo");
    }
    if (cantPares != 0)
    {
      alert ("Cantidad de numeros pares: " + cantPares);
    }
    else
    {
        alert("El numero ingresado es 0");
    }
}
