var Usrdata = document.querySelector('.box');

var userDetail = [
    {
        name : "Dune",
        year : "2021",
        img_src : "Dune.jpg",
        movie_link : "https://www.imdb.com/title/tt1160419/?ref_=hm_fanfav_tt_i_1_pd_fp1",
        movie_desc : "eature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
    },
    {
        name : "Squid Game",
        year : "2021",
        img_src : "SquidGame.jpg",
        movie_link : "https://www.imdb.com/title/tt10919420/?ref_=hm_fanfav_tt_i_2_pd_fp1",
        movie_desc : "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake."
    },
    {
        name : "No Time to Die",
        year : "2021",
        img_src : "NoTimeToDie.jpg",
        movie_link : "https://www.imdb.com/title/tt2382320/?ref_=hm_fanfav_tt_i_3_pd_fp1",
        movie_desc : "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."
    },
    {
        name : "Free Guy",
        year : "2021",
        img_src : "FreeGuy.jpg",
        movie_link : "https://www.imdb.com/title/tt6264654/?ref_=hm_fanfav_tt_i_4_pd_fp1",
        movie_desc : "A bank teller discovers that he's actually an NPC inside a brutal, open world video game."
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },
    {
        name : "",
        year : "",
        img_src : "",
        movie_link : "",
        movie_desc : ""
    },    
]

document.getElementById('movieList').innerHTML = userDetail.map(user => 
    `<div>
        <img src="Assets/MoviePics/${user.img_src}">
        <div>
            <h3>${user.name}</h3>
            <h4>${user.year}</a>
        </div>
    </div>`
).join('')