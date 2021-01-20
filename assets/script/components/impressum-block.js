var impressumBlockComponent = {
    data () {
        return {
            person_list: [
                {name: "N. Zumbusch", function: "Webdev & Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=NathanZumbusch"},
                {name: "D. Jansen", function: "Leitung des HBZ", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=DavidJansen"},
                {name: "P. Hartleitner", function: "Schulleitung", image: "/HP/assets/img/HBZ-Logo.png", link: "https://suso.schulen.konstanz.de/HP/"},
                {name: "Maxim", function: "Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=Maxim"},
                {name: "Hannah", function: "Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=Hannah"},
                {name: "Meret", function: "Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=Meret"},
                {name: "David", function: "Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=David"},
                {name: "Pia", function: "Orgateam", image: "/HP/assets/img/HBZ-Logo.png", link: "/forum/?userName=Pia"}
            ],
            containerStyle: {
                marginTop: "min(14vw, 80px)",
                bottom: "0px",
                width: "90%",
                marginLeft: "5%"
            },
            flexContainerStyle: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            },
            personStyle: {
                width: "120px",
                padding: "5px",
                borderRadius: "4px",
                margin: "10px",
                paddingBottom: "30px",
                paddingTop: "30px",
                backgroundImage: "linear-gradient(135deg,rgba(108,117,125, 0.7), rgba(173,181,189, 0.6))"
            },
            personImageStyle: {
                maxWidth: "80px",
                maxHeight: "80px",
                marginLeft: "20px",
                borderRadius: "40px",
                marginBottom: "10px",
            },
            personFunctionStyle: {
                textAlign: "center",
            },
            personNameStyle: {
                textAlign: "center",
            },
            impressumHeadingStyle: init.mainBlockHeadingStyle,
            impressumHeading: "Impressum",
            hovered: "none"
        }
    },
    template: `
        
        <div :style="containerStyle">
            <p :style="impressumHeadingStyle"> {{ impressumHeading }} </p>
            <div :style="flexContainerStyle">
                <div v-for="(person, index) in person_list" :style="getPersonStyle(index)" @mouseover="enteredPerson(index)" @mouseleave="leftPerson(index)" @click="clickedPerson(person.link)">
                    <img :src="person.image" :style="personImageStyle">
                    <p :style="personNameStyle"> {{ person.name }} </p>
                    <p :style="personFunctionStyle"> {{ person.function }} </p>
                </div>
            </div>
        </div>
    `,
    methods: {
        getPersonStyle (index) {
            back = Object.assign({}, this.personStyle);
            if (this.hovered === index) {
                back.cursor = "pointer";
                back.backgroundImage = "linear-gradient(135deg,rgba(108,117,125, 0.95), rgba(173,181,189, 0.85))";
            }
            return back;
        },
        enteredPerson (index) {
            this.hovered = index;
        },
        leftPerson (index) {
            if (this.hovered === index) {
                this.hovered = "none";
            }
        },
        clickedPerson (link) {
            try {
                if (link === "" || link === undefined) {
                    return;
                }
                window.location = link;
            } catch (e) {
                console.debug(e);
            }
        }
    },
    mounted () {
        this.person_list.shuffle();
    }
}