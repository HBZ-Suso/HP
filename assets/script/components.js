var components = {
    init () {
        this.root = Vue.createApp(rootComponent);

        this.sideBar = this.root.component('side-bar', sideBarComponent);
        this.mainBlock = this.root.component('main-block', mainBlockComponent);
        this.impressumBlock = this.root.component('impressum-block', impressumBlockComponent)
        this.backgroundElement = this.root.component('background-element', backgroundElementComponent)
        this.infoTextBlock = this.root.component('info-text-block', infoTextBlockComponent)

        this.root.mount("#v-root");
    }
}
