class Game
{
    constructor()
    {

    }
    
    getState()
    {
        database.ref("gameState").on("value", function(data)
        {
            gameState = data.val();
        });
        

    }

    update(state)
    {
        database.ref("/").update(
        {
            "gameState": state
        });
    }

    async start()
    {
        if(gameState == 0)
        {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();

 
        }
    }
    play()
    {
        form.hide();
        Player.getPlayersInfo();
        if(allPlayers != undefined)
        {
            var yPos = 120;
            for(var plr in allPlayers)
            {
                if(plr == "player" + player.index)
                {
                    fill(255);
                }
                else
                {
                    fill(0)
                }
                yPos += 20;
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, yPos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null)
        {
            player.distance += 50;
            player.update();
        }
    }
}