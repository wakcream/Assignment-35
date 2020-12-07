class Game {
    constructor() {

    }
    getState() {
        var checkState = database.ref("gamestate");
        checkState.on("value", function (data) {
            gameState = data.val();
        });
    }
    updateState(state) {
        database.ref("/").update({
            gamestate: state
        })
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount()
            form = new Form();
            form.display();

        }
    }
}