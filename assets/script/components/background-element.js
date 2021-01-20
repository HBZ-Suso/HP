var backgroundElementComponent = {
    data () {
        return {
            backgroundStyle: {
                backgroundColor: "lightgray",
                position: "fixed",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                zIndex: "-1",
                "-webkit-transform": "translate3d(0,0,0)"
            }
        }
    },
    template: `
        <div id="background-class" :style="backgroundStyle">
        </div>
    `
}