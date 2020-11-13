class Form
{
    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display()
    {
        console.log("in the form class")
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(530, 20);

        this.input.position(540, 300);

        this.button.position(580,340);

        this.button.mousePressed(() =>
        {
            this.input.hide();
            this.button.hide();

            playerCount++;

            player.name = this.input.value();
            player.index = playerCount
            player.updateCount(playerCount);

            player.update();

            this.greeting.html("Welcome " + player.name + "!");
            this.greeting.position(530,100);
        });
    }
}