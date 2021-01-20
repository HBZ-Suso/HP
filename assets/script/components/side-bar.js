var sideBarComponent = {
    props: [
        'currentTitle'
    ],
    data () {
        return {
            link_elements: [
                {title: "Home", link: "./"},
                {title: "Grundschulprojekt \"Kopfrechnen\"", link: "/calc/"},
                {title: "HBZ-Projektwoche", link: "/projektwoche"},
                {title: "Snap!-AG", link: "/forum/?user=snap!-ag"},
                {title: "Orga-Team", link: "/forum/?user=orga-team"},
                {title: "Offizielle Homepage", link: "https://www.suso.schulen.konstanz.de./hbz"},
                {title: "Forum", link: "/forum/"},
                {title: "Ehemalige", link: "/forum/?user=Ehemalige"}
            ],
            mainStyleNormal: {
                width: init.smallMenuWidth,
                height: "100%",
                position: "fixed",
                "-webkit-transform": "translate3d(0,0,30px)",
                zIndex: "1"
            },
            mainStyleSmall: {
                width: "100%",
                position: "fixed",
                "-webkit-transform": "translate3d(0,0,30px)",
                zIndex: "1"
            },
            usedMainStyle: this.mainStyleNormal,
            elementListStyle: {
                backgroundColor: "gray",
                display: "flex",
                flexDirection: "column",
                borderRadius: "0px 0px 15px 0px",
                "-webkit-transform": "translate3d(0,0,30px)",
                zIndex: "1"
            },
            elementStyle: {
                fontSize: "20px",
                color: "black",
                textDecoration: "none",
                paddingTop: "5px",
                paddingLeft: "6px",
            },
            logoStyle: {
                maxWidth: "100%",
                backgroundColor: "gray",
                cursor: "pointer",
                borderRadius: "0px 0px 15px 0px"
            },
            logoSrc: "./assets/img/HBZ-Logo.png",
            show_list: false,
            hovered: "none",
            show_logo: true,
            mode: "normal"
        };
    },
    template: `
    <div id="v-side-bar" :style="usedMainStyle">
        <img :src="logoSrc" :style="logoStyle" @click="toggle_show_list()" @mouseover="logo_entered()" @mouseleave="logo_left()" v-if="show_logo" id="v-side-bar-logo">
        <div v-if="show_list" :style="elementListStyle" id="v-side-bar-element-list">
            <a @mouseover="element_entered(id)" @mouseleave="element_left(id)" v-for="(link_element, id) in link_elements" :href="link_element.link" :style="getElementStyle(id)"> {{ link_element.title }} </a>
        </div>
    </div>
    `,
    methods: {
        element_entered (id) {
            this.hovered = id;
        },
        element_left (id) {
            if (this.hovered == id) {
                this.hovered = "none";
            }
        },
        logo_entered () {
            
        },
        logo_left () {
            
        },
        toggle_show_list() {
            if (this.show_list === false) {
                this.show_list = true;
                this.logoStyle.borderRadius = "0px"
                if (this.mode === "small") {
                    this.show_logo = false;
                }
            } else {
                this.show_list = false;
                this.logoStyle.borderRadius = "0px 0px 15px 0px";
                this.show_logo = true;
            }

            if (this.mode === "small" && this.show_list === true) {
                setTimeout(() => { if (this.mode === "small") {this.toggle_show_list(); this.setSmallStyles()} }, 2000)
            }
        },
        getElementStyle(id) {
            let back = Object.assign({}, this.elementStyle);
            if (this.hovered === id) {
                back.backgroundColor = "rgb(80, 80, 80)";
            }

            if (this.link_elements.length - 1 === id) {
                if (this.mode !== "small") {
                    back.borderRadius = "0px 0px 15px 0px";
                }
            }
            return back;
        },
        resizeHandler () {
            if (window.innerWidth > init.sideBarSwitchWidth && !window.mobileCheck()) {
                this.setNormalStyles()
                this.mode = "normal",
                this.show_logo = true;
            } else if (window.innerWidth <= init.sideBarSwitchWidth || window.mobileCheck()) {
                this.mode = "small";
                this.setSmallStyles();
                this.show_list = false;
            }
        },
        setSmallStyles () {
            this.logoStyle.borderRadius = "0px";
            this.elementListStyle.borderRadius = "0px";
            this.usedMainStyle = this.mainStyleSmall;
            this.elementStyle.fontSize = "min(10vw, 120px)";
            this.elementStyle.textAlign = "center";
        },
        setNormalStyles () {
            this.usedMainStyle = this.mainStyleNormal;
            if (!this.show_list) {
                this.logoStyle.borderRadius = "0px 0px 15px 0px";
            }
            this.elementListStyle.borderRadius = "0px 0px 15px 0px";
            this.elementStyle.fontSize = "20px"
            this.elementStyle.textAlign = "left";
        }
    },
    created() {
        window.addEventListener("resize", this.resizeHandler);
        this.resizeHandler()
    },
    unmounted() {
        window.removeEventListener("resize", this.resizeHandler);
    }
}
