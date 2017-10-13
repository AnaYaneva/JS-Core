function sole(input) {
    let heroData=[];

    for (let i = 0; i < input.length; i++) {
        let currentHero=input[i].split(" / ");

        let currentHeroName=currentHero[0];
        let currentHeroLevel=Number(currentHero[1]);
        let currentHeroItems=[];

        if(currentHero.length>2) {
            currentHeroItems = currentHero[2].split(", ");
        }

        let hero={
            name:currentHeroName,
            level:currentHeroLevel,
            items:currentHeroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));

}