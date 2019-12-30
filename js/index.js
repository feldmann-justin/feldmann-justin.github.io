var jumbotron = new Vue({
    el: '#jumbotron',
    data: {
        message: 'Justin Feldmann',
        emailBtn: "Hire Me!"
    }
})

var modal = new Vue({
    el: '#modal-view',
    data: {
        languages: [
            { url: "img/java.png", alt: "Java", height: "50", width: "50" },
            { url: "img/js.png", alt: "JavaScript", height: "50", width: "50" },
            { url: "img/jquery.png", alt: "jQuery", height: "100", width: "100" },
            { url: "img/mysql.jpg", alt: "MySQL", height: "50", width: "50" },
            { url: "img/c-sharp.png", alt: "C#", height: "50", width: "50" },
            { url: "img/cplusplus.png", alt: "C++", height: "50", width: "50" },
            { url: "img/html5.png", alt: "HTML5", height: "50", width: "50" },
            { url: "img/css3.png", alt: "CSS3", height: "50", width: "50" },
            { url: "img/php.png", alt: "PHP", height: "80", width: "80" },
            { url: "img/python.png", alt: "Python", height: "80", width: "80" }
        ],
        technologies: [
            { url: "img/git.png", alt: "Git", height: "50", width: "50" },
            { url: "img/spring.png", alt: "Spring", height: "50", width: "50" },
            { url: "img/sql-server.png", alt: "SQL Server", height: "50", width: "50" },
            { url: "img/maven.png", alt: "Maven", height: "50", width: "50" },
            { url: "img/react.png", alt: "React", height: "50", width: "50" },
            { url: "img/vuejs.png", alt: "Vue.js", height: "50", width: "50" },
            { url: "img/nodejs.png", alt: "Node.js", height: "50", width: "50" },
            { url: "img/npm.png", alt: "npm", height: "50", width: "50" },
            { url: "img/jenkins.png", alt: "Jenkins", height: "50", width: "50" },
            { url: "img/azure.png", alt: "Azure", height: "50", width: "50" },
            { url: "img/jboss.png", alt: "JBoss", height: "50", width: "50" },
            { url: "img/linux.png", alt: "Linux", height: "50", width: "50" }
        ],
        processes: [
            { url: "img/scrum.png", alt: "Scrum", height: "50", width: "50" }
        ]
    }
})