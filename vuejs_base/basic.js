function GetMessage(){
    let string = "HOLA "
    let a = ["PIKACHU", "MUDKIP","TOGEPI","ARCEUS"];
    string += a[Math.floor(Math.random()* a.length)]
    return string
}

var app = new Vue({ 
    el: '#app',
    data: {
        message: GetMessage()
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"primer pagina ok"  },
            { message:"Segunda pagina Nok" },
            { message:'Tercer pagina ok' },
        ]
    }
  })

function getImage(){
    let string = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"
    string += Math.floor(Math.random() * 500).toString() + ".svg"
    return string
}

