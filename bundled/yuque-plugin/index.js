export default class YuquePlugin extends BasePlugin {
    blogCfg = new ptapi.BlogConfig()
    async postConstruct() {
        this.blogCfg.apiUrl = "https://www.yuque.com/api/v2"

        console.log("YuquePlugin inited", this.blogCfg)
    }
}
