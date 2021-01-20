var mainBlockComponent = {
    data () {
        return {
            mainBlockStyleNormal: {
                position: "absolute",
                left: "180px",
                right: "180px",
                top: "0px",
                backgroundImage: "linear-gradient(135deg, #0096C7, #90E0EF)",
                minHeight: "100%",
                "-webkit-transform": "translate3d(0,0,20px)"
            },
            mainBlockStyleThin: {
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                backgroundImage: "linear-gradient(135deg, #0096C7, #90E0EF)",
                minHeight: "100%",
                "-webkit-transform": "translate3d(0,0,20px)"
            },
            usedMainStyle: this.mainBlockStyleWide,
            mode: "normal",
        }
    },
    template: `
    <div :style="usedMainStyle">
        <info-text-block></info-text-block>
        <impressum-block></impressum-block>
    </div>
    `,
    methods: {
        resizeHandler () {
            if (window.innerWidth > init.mainBlockSwitchWidth && !window.mobileCheck()) {
                this.mode = "normal";
                this.usedMainStyle = this.mainBlockStyleNormal;
            } else if (window.innerWidth <= init.mainBlockSwitchWidth || window.mobileCheck()) {
                this.usedMainStyle = this.mainBlockStyleThin;
                this.mode = "thin";
            }
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