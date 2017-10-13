function solve(input) {
    //let candidates = new Map();
    let systems = new Map();

    for (let obj of input) {
        let row = obj;
        let system = row.system;
        let candidate = row.candidate;
        let votes = Number(row.votes);

        //if (!candidates.has(candidate)) {
        //    candidates.set(candidate, new Map());
        //    candidates.get(candidate).set(system, votes);
        //} else {
        //    if (!candidates.get(candidate).has(system)) {
        //        candidates.get(candidate).set(system, votes);
        //    } else {
        //        candidates.get(candidate).set(system, candidates.get(candidate).get(system) + votes);
        //    }
        //}


        if (!systems.has(system)) {
            systems.set(system, new Map());
            systems.get(system).set(candidate, votes);
        } else {
            if (!systems.get(system).has(candidate)) {
                systems.get(system).set(candidate, votes);
            } else {
                systems.get(system).set(candidate, systems.get(system).get(candidate) + votes);
            }
        }
    }

    //let sortedSystems = [...systems.entries()]
    //    .sort(sortSys);




    let winners=new Map();
    for (let [candidate, votes] of systems) {
        let firstCandidate="";
        let secondCandidate="";
        let votesFirst=0;
        let max=0;
        for (let vote of votes) {
            if(vote>max){
                max=vote;
                firstCandidate=cand;
                votesFirst+=vote;
            }
        }
        winners.set(firstCandidate,votesFirst);
    }

    console.log();
    console.log(systems);

    console.log(winners);

}

solve([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);