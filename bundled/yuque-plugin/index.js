export default class YuquePlugin extends BasePlugin {
    postConstruct(callback) {
        console.log("YuquePlugin inited", this)
    }

    // private methods
    initBlogCfg = () =>{
        const cfg = this.api.config
        const blogCfg = cfg.blogCfg
        // ====== blogCfg start ======
        blogCfg.apiUrl = "https://www.yuque.com/api/v2"
        // ====== blogCfg end ========
        cfg.blogCfg = blogCfg
        this.api.config = cfg
    }

    setDynCfg = (dynCfg) =>{
        const cfg = this.api.config
        cfg.dynCfg = dynCfg
        this.api.config = cfg
    }
}