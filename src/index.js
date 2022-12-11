var ajaxService = null;

function init() {
    console.log("Init started")
    document.getElementById("summarize").addEventListener("click", addingFunction);
    document.getElementById("substraction").addEventListener("click", substractingFunction);
    document.getElementById("multiplication").addEventListener("click", multiplicationFunction);
    document.getElementById("division").addEventListener("click", divisionFunction);
    document.getElementById("power").addEventListener("click", powerFunction);
    ajaxService = new AjaxService();
}

function addingFunction() {
    var numberA = document.getElementById("first_number_input").value;
    console.log(numberA);
    
    var numberB = document.getElementById("second_number_input").value;
    console.log(numberB);
    ajaxService.post({
        url: 'http://127.0.0.1:5600/calculateAdd',
        data: {
            numberA: numberA,
            numberB: numberB
        },
        success: function (response) {
            var result = document.getElementById("third_number_input");
            Object.entries(response).forEach(([key, value]) => {
                if(key === "result") {
                    result.value = response.result;
                } else if (key === "message") {
                    result.value = response.message;
                }
            })
            
            
        }
    });
}

function substractingFunction() {
    var numberA = document.getElementById("first_number_input").value;
    console.log(numberA);
    
    var numberB = document.getElementById("second_number_input").value;
    console.log(numberB);
    ajaxService.post({
        url: 'http://127.0.0.1:5600/calculateSubstract',
        data: {
            numberA: numberA,
            numberB: numberB
        },
        success: function (response) {
            var result = document.getElementById("third_number_input");
            Object.entries(response).forEach(([key, value]) => {
                if(key === "result") {
                    result.value = response.result;
                } else if (key === "message") {
                    result.value = response.message;
                }
            })
            
            
        }
    });
}

function multiplicationFunction() {
    var numberA = document.getElementById("first_number_input").value;
    console.log(numberA);
    
    var numberB = document.getElementById("second_number_input").value;
    console.log(numberB);
    ajaxService.post({
        url: 'http://127.0.0.1:5600/multiply',
        data: {
            numberA: numberA,
            numberB: numberB
        },
        success: function (response) {
            var result = document.getElementById("third_number_input");
            Object.entries(response).forEach(([key, value]) => {
                if(key === "result") {
                    result.value = response.result;
                } else if (key === "message") {
                    result.value = response.message;
                }
            })
            
            
        }
    });
}

function divisionFunction() {
    var numberA = document.getElementById("first_number_input").value;
    console.log(numberA);
    
    var numberB = document.getElementById("second_number_input").value;
    console.log(numberB);
    ajaxService.post({
        url: 'http://127.0.0.1:5600/divide',
        data: {
            numberA: numberA,
            numberB: numberB
        },
        success: function (response) {
            var result = document.getElementById("third_number_input");
            Object.entries(response).forEach(([key, value]) => {
                if(key === "result") {
                    result.value = response.result;
                } else if (key === "message") {
                    result.value = response.message;
                }
            })
            
            
        }
    });
}

function powerFunction() {
    var numberA = document.getElementById("first_number_input").value;
    console.log(numberA);
    
    var numberB = document.getElementById("second_number_input").value;
    console.log(numberB);
    ajaxService.post({
        url: 'http://127.0.0.1:5600/power',
        data: {
            numberA: numberA,
            numberB: numberB
        },
        success: function (response) {
            var result = document.getElementById("third_number_input");
            Object.entries(response).forEach(([key, value]) => {
                if(key === "result") {
                    result.value = response.result;
                } else if (key === "message") {
                    result.value = response.message;
                }
            })
            
            
        }
    });
}



document.addEventListener("DOMContentLoaded", init);