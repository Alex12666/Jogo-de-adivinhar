









function calnum(){
	const num = document.getElementById('number').value;


	const adi = Math.floor(Math.random() * 10);

	



	

	if(num == adi){

		 document.getElementById('res').innerHTML='Ganhom';

		console.log("Ganhom");
		
		

		


	}else{

		console.log("perdeu");

		document.getElementById('res').innerHTML='perdeu';

		
		
		
		
	}


}







