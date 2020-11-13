class Player
{
    constructor()
    {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    
    getCount()
    {
        database.ref("playerCount").on("value", function(data)
        {
            playerCount = data.val();
        });
    }

    updateCount(count)
    {
        database.ref("/").update(
            {
                "playerCount": count
            
            })
    }

    update()
    {
        var playerref = "players/player" + this.index;
        database.ref(playerref).set({
            'name': this.name,
            'distance': this.distance
        })
    }

    static getPlayersInfo()
    {
        database.ref("players").on("value", (data)=>{
            allPlayers = data.val();
        })
    }
    
}