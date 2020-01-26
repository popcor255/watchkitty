function get_git_repos(payload){
    var repos = [];

    payload.items.forEach(repo => {
        if(repo.spec.type == "git"){
            var git_url = repo.spec.params[1].value;
            var piplinerun_id = repo.metadata;
            repos.push({git_url : ""});
        }
    });

    return repos;
}

module.exports = { get_git_repos };