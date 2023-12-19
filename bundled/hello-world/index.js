export default class HelloWorldAdaptor extends globalThis.ptapi.BaseBlogApi {
    async postConstruct() {
        console.log("HelloWorldAdaptor mounted")
    }

    async beforeDestroy() {
        console.log("HelloWorldAdaptor unmounted")
    }

    async getMetaData() {
        console.log("getMetaData invoked at HelloWorldAdaptor")
    }

    async getUsersBlogs() {
        console.log("getUsersBlogs invoked at HelloWorldAdaptor")
    }

    async newPost(post, publish = true) {
        console.log("newPost invoked at HelloWorldAdaptor")
    }

    async editPost(postid, post, publish = true) {
        console.log("editPost invoked at HelloWorldAdaptor")
    }

    async deletePost(postid) {
        console.log("deletePost invoked at HelloWorldAdaptor")
    }
}