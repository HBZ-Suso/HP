var infoTextBlockComponent = {
    data () {
        return {
            containerStyle: {
                width: "95%",
                marginLeft: "2.5%",
                marginTop: init.bigInfoContainerMarginTop,
                "-webkit-transform": "translate3d(0,0,20px)"
            },
            infoHeadingStyle: init.mainBlockHeadingStyle,
            infoTextBoxStyle: {
                marginTop: "10px",
                fontSize: "20px",
                hyphens: "auto",
                textAlign: "justify"
            },
            infoTextPassageStyle: {
                marginTop: "5px",
                fontSize: "20px",
                hyphens: "auto",
                textAlign: "justify",
                lineHeight: "24px"
            },
            infoHeading: "Die Schülerwebsite des HBZ",
            infoText: [
                "<p style=\"text-align: center; font-style: italic; font-weight: bold;\">Diese Seite befindet sich gerade noch im Aufbau! Manche Unterseiten könnten noch nicht öffentlich sein oder noch ncith den vollen Funktionsumfang besitzen!</p>",
                "Dies ist die Schülerwebsite des HBZ. Sie wird von Mitgliedern und Schülern des HBZ entwickelt und beinhaltet mehrere Unterseiten, wie bspw. das HBZ-Forum. ",
                "Weitere Projekte des HBZ beinhalten die Projektwoche, deren Website sie unter dem Punkt \"Projektwoche\" in dem Menu finden können. ",
                "Besuchen sie gerne die verschiedenen Unterseiten indem sie auf das Menüicon oben links klicken.",
                "Die verschiedenen Mitwirkenden sind unten auf dieser Seite und auf den jeweiligen Unterseiten aufgeführt. Sie können außerdem auf diese klicken, um auf deren jeweilige Benutzerseite zu kommen. Dies kann bspw. auch ein HBZ-Forums Profil sein.",
                "Wenn sie wissen wollen, wie man dem HBZ beitreten kann besuchen sie die offizielle Homepage mit den Anmeldeformularen und konkreteren Informationen durch den Punkt \"Offizielle Homepage\" im Menu.",
                "Falls sie Fragen bezüglich dieser Website haben, etwas geändert haben oder uns Kontaktieren wollen, schreiben sie einfach eine Email an n.zumbusch@gmx.de.",
                "Durch das Benutzen dieser"
            ]
        }
    },
    template: `
    <div :style="getContainerStyle()">
        <p :style="infoHeadingStyle"> {{ infoHeading }} </p>
        <div :style="infoTextBoxStyle">
            <p :style="infoTextPassageStyle" v-for="passage in infoText" v-html="passage"></p>
        </div>
    </div>
    `,
    methods: {
        getContainerStyle() {
            return this.containerStyle;
        },
        resizeHandler () {
            try {
                if (document.getElementById("v-side-bar-logo").clientHeight > 0) {
                    this.containerStyle.marginTop = document.getElementById("v-side-bar-logo").clientHeight + init.infoClientHeightSpace + "px";
                }


                if (window.innerWidth > init.mainBlockSwitchWidth && !window.mobileCheck()) {
                    this.containerStyle.marginTop = "min(2vw, 30px)";
                }
            } catch (error) {
                console.debug(error)
            }
        }
    },
    created() {
        window.addEventListener("resize", this.resizeHandler);
        setTimeout(() => {this.resizeHandler()}, 40);
    

        if (window.innerWidth > init.sideBarSwitchWidth && !window.mobileCheck()) {
            this.containerStyle.marginTop = init.mediumInfoContainerMarginTop;
        }
    },
    mounted() {
        this.resizeHandler()
    },
    unmounted() {
        window.removeEventListener("resize", this.resizeHandler);
        document.getElementById("v-side-bar-logo").removeEventListener("click", this.resizeHandler);
    }
}

