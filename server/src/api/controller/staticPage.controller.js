const StaticPageController = {
    GetAll(req, res){
        res.send("get all");
    },
    Post(req, res){
        res.send("post");
    },
    Put(req, res){
        res.send("put");
    },
    Delete(req, res){
        res.send("get all");
    },
    GetById(req, res){
        res.send("get by id");
    }
}

export default StaticPageController;