var jumbotron = new Vue({
    el: '#jumbotron',
    data: {
        message: 'Justin Feldmann',
        emailBtn: "Hire Me!"
    }
})

var modal = new Vue({
    el: '#blah',
    data: {
        images: [
            { url: "img/java.png", alt: "Java", height: "50", width: "50" },
            { url: "img/js.png", alt: "JavaScript", height: "50", width: "50" },
            { url: "img/jquery.png", alt: "jQuery", height: "100", width: "100" },
            { url: "img/mysql.jpg", alt: "MySQL", height: "50", width: "50" }
        ]
    },
})