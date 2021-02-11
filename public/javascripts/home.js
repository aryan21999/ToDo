



function SignOff() {
	axios.post('/api/logout')
		.then(function (response) {
			if (response.data.isLogged == false) {
				location.replace('/')
				alert('you logged out');
		}
	
	})
}


function addTodo() {
	var text = '';
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
    alert('input some message');
    return false;
    } else{
        text = inputValue;
    }

	axios.post('/api/add', {
        text: text,
        completed: false
	})
		.then(function (response) {
			if (response) {
            return response;
			}
		})
		.then(function (res) {
            
            if(res.data.status==='todo already exist')
                {
                    alert('Todo is already exist');
                    location.reload();
                }
                else{
            listAfterAdd();
                }
		})
		.catch(function (error) {
			console.log(error);
		});
}

function listTodo() {

	axios.post('/api/list')
		.then(function (response) {
			for (var i = 0; i < response.data.result.length; i++) {
                 var li = document.createElement("li");
                 var span = document.createElement("SPAN");
                 var txt = document.createTextNode("\u00D7");
                 span.className = "close";
                 span.appendChild(txt);
        var inputValue = response.data.result[i].text;
        var t = document.createTextNode(inputValue);               
        li.appendChild(span);
                 
        
        var span2 = document.createElement("SPAN");
        span2.appendChild(t);
        span2.className = "data";
        li.appendChild(span2);
        
        var sign = document.createTextNode("\u2713");
        

        if(response.data.result[i].completed == true)
            {
                span2.appendChild(sign);
            }

        span.addEventListener("click", deleteTodo, false);
        span2.addEventListener('click', checkTodo, false);
        
        document.getElementById("myUL").appendChild(li);
        
        
       


            }
        });
}





function listAfterAdd()
 { 
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    document.getElementById("myInput").value = "";
    var t = document.createTextNode(inputValue);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
        var span2 = document.createElement("SPAN");
        span2.appendChild(t);
        span2.className = "data";
        li.appendChild(span2);
        
  
        span.addEventListener("click", deleteTodo, false);
        span2.addEventListener('click', checkTodo, false);
  
        document.getElementById("myUL").appendChild(li);
}



function deleteTodo()
{
    var str = this.parentElement.textContent;
    var text='';
    var sign = String.fromCharCode(parseInt(2713,16))
    text=str.slice(str.length-1);
    if(text === sign)
        {
            var n=str.length-1;
            text = str.slice(1,n);
        }
        else{
                text = str.slice(1);
        }
    
    console.log(text);
        var j;
        var parent = document.getElementById("myUL");
        var child = this.parentElement;
        for (j = 0; j < close.length; j++) 
        {
        var div = close[j].parentElement;
        parent.removeChild(div);
         }
    
	axios.post('/api/delete', {
		text: text,
	})
		.then(function (response) {

			if (response) {
                console.log(response);
				location.reload();
			}
		})
		.catch(function (error) {
			console.log(error);
        });

}
    
function checkTodo()
{
        var str = this.parentElement.textContent;
        var last='';
        var completed=true;
        var sign = String.fromCharCode(parseInt(2713,16))
        last=str.slice(str.length-1);
        if(last === sign)
            {
                var n=str.length-1;
                text = str.slice(1,n);
                var t = document.createTextNode(text);
                    
                completed=false;

                // this.appendChild(t);
            }
            else{
                    text = str.slice(1);
                    completed=true;
                    var sign = document.createTextNode("\u2713");
                    this.appendChild(sign);
            }

        // var str = this.parentElement.textContent;    
        // var sign = document.createTextNode("\u2713");
        // this.appendChild(sign);
        // var completed=true;
        // var str = this.parentElement.textContent;
        
        
        // var text='';
        // var n=str.length-1;
        // text = str.slice(1,n);
        axios.post('/api/check', {
        completed: completed,
        text: text
        })
        .then(function (response) {
            if(response)
                {
        console.log(response);
        location.reload();
                }
        })
        .catch(function (error) {
			console.log(error);
		});
}
        
listTodo();



