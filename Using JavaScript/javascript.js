function getPokemon() {
    const n = Math.ceil(Math.random() * 80)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${n}.json`
    try {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById('pid').innerHTML = data.id;
                document.getElementById('pname').innerHTML = data.name;
                document.getElementById('purl').innerHTML = data.height + " Meter";


            });
        // fetch(baseUrl)
        //     .then(response => {
        //         const responseJson = response.json()
        //         return responseJson
        //     })
        //     .then(data => {





        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    } catch (error) {
        console.error(error)
    }

}