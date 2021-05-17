      const email = document.querySelector("#Email");
    	const e_times = document.querySelector(".e_times");
    	const e_check = document.querySelector(".e_check");
    	const enter = document.querySelector(".enter");
    	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    	function check(){
    		if(email.value.match(pattern)){
               email.style.border='1px solid green';
	 	       e_times.style.display ='none';
	 	       e_check.style.display ='block';
	 	       enter.style.display='none';
	 	       


    		}else{
                
    		   email.style.border = '1px solid red';
	 	       e_times.style.display ='block';
	 	       e_check.style.display ='none';
	 	       enter.style.display='block';

    		}

    	}

      


