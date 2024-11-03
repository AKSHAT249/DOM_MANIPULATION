let count = 1;
const error = document.getElementById("error_container");
const clear_button = document.getElementById("clear_btn");
const container = document.getElementsByClassName("container")[0];




const decrement = () => {
    
    count-=1
    // console.log("decrement", count)
    document.getElementById("para").innerHTML = `Your current count is : ${count}`;

    if(count<=0){
        error.style.display = "block"
        error.innerHTML = "Error : Cannot go below 0";
        error.style.color = "red";
        document.getElementById("decrement_btn").disabled = true;
        container.removeChild(clear_button)

    }else if(count>=1){
        error.style.display = "none";
        document.getElementById("decrement_btn").disabled = false;
        container.appendChild(clear_button)

    }

}

const increment = () => {
    
    count += 1;
    // console.log("increment", count)
    document.getElementById("para").innerHTML = `Your current count is : ${count}`;

    if(count==0){
        error.innerHTML = "Error : Cannot go below 0";
        document.getElementById("decrement_btn").disabled = true;
        container.removeChild(clear_button)
    }else if(count>=1){
        error.style.display = "none";
        container.appendChild(clear_button)
        document.getElementById("decrement_btn").disabled = false;
    }
    

}


const reset = () => {
    
    count = 1;
    // console.log("clear", count)
    document.getElementById("para").innerHTML = `Your current count is : ${count}`;
    if(count==0){
        error.innerHTML = "Error : Cannot go below 0";
        container.removeChild(clear_button)
    }else if(count>=1){
        error.style.display = "none";
        container.appendChild(clear_button)
    }
}

