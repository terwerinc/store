const ptapi = globalThis.ptapi

class HelloWorldAdaptor extends ptapi.BaseBlogApi {
    async onMount(){
        console.log("HelloWorldAdaptor mounted")
    }

    async getMetaData(){
        console.log("getMetaData invoked at HelloWorldAdaptor")
    }

    async getUsersBlogs(){
        console.log("getUsersBlogs invoked at HelloWorldAdaptor")
    }

    async newPost(post, publish = true) {
        console.log("newPost invoked at HelloWorldAdaptor")
    }

    async editPost(postid, post, publish = true){
        console.log("editPost invoked at HelloWorldAdaptor")
    }

    async deletePost(postid){
        console.log("deletePost invoked at HelloWorldAdaptor")
    }

    async onUnmount(){
        console.log("HelloWorldAdaptor unmounted")
    }
}

ptapi.mount(HelloWorld)