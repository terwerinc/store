export default class HelloWorldPlugin extends BasePlugin {
    async postConstruct() {
        console.log("HelloWorldPlugin inited")
    }
}
