

function selectVal(){
    var x = document.getElementById("val").value;

    switch(x){
        case "eon":
        eon();
        break;

        case "i10":
        i10();
        break;

        case "i20":
        i20();
        break;

        case "i20_act":
        active_i20();
        break;
        
        case "xcent":
        xcent();
        break;

        case "verna":
        Verna();
        break;

        case "elantra":
        elantra();
        break;

        case "creta":
        creta();
        break;

        case "tucson":
        tucson();
        break;
    }

}

// HATCHBACK

function eon(){

    document.getElementById("variant").innerHTML = "";
    var ele = document.getElementById("variant");
        
    var items = [
        'Era Plus',
        'D Lite Plus Option',
        'D Lite Plus',
        'D Lite'
    ]
    items.forEach(function (items){
        var li = document.createElement("li");
        li.className = "list-group-item";
        ele.appendChild(li);
        li.innerHTML += items;
    })


}



function i10(){

    document.getElementById("variant").innerHTML = "";
    var ele = document.getElementById("variant");
        
    var items = [
        'Asta',
        'Sportz',
        'Magna',
        'Era'
    ]
    items.forEach(function (items){
        var li = document.createElement("li");
        li.className = "list-group-item";
        ele.appendChild(li);
        li.innerHTML += items;
    })


}

function i20(){
    document.getElementById("variant").innerHTML = "";
    var ele = document.getElementById("variant");

    var items = [
        'Asta Dual Tone',
        'Asta',
        'Sportz',
        'Magna Era',
        'Era'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })


}

function active_i20(){
    document.getElementById("variant").innerHTML = "";
    var ele = document.getElementById("variant");

    var items = [
        'Base',
        'S',
        'SX',
        'SX Dual Tone'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })


}



// SEDAN 

function xcent(){
    document.getElementById("variant").innerHTML = "";

    var ele = document.getElementById("variant");

    var items = [
        'SX Option',
        'SX',
        'S',
        'E Plus',
        'E'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })

}

function Verna(){
    document.getElementById("variant").innerHTML = "";

    var ele = document.getElementById("variant");

    var items = [
        'SX Plus',
        'SX',
        'EX',
        'E'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })

}

function elantra(){
    document.getElementById("variant").innerHTML = "";

    var ele = document.getElementById("variant");

    var items = [
        'SX Option',
        'SX',
        'S'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })

}


// SUV

function creta(){
    document.getElementById("variant").innerHTML = "";

    var ele = document.getElementById("variant");

    var items = [
        'SX',
        'S',
        'E Plus',
        'E'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })
}

function tucson(){
    document.getElementById("variant").innerHTML = "";

    var ele = document.getElementById("variant");

    var items = [
        '4WD Diesel AT GLS',
        '2WD AT GL',
        '2WD MT Diesel | Petrol'
    ]

    items.forEach(function(items){
        var li = document.createElement("li");
        ele.appendChild(li);
        li.className = "list-group-item";
        li.innerHTML += items;
    })
}