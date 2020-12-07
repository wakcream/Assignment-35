class Player {
    constructor() {
    }
    getCount(){
        var count = database.ref("playercount");
        count.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    updateName(name){
        var playerindex = "player" + playerCount;
        database.ref(playerindex).set({
            name:name
        })
    }
}