function get_git_repos_as_array(payload){
    let repos = [];

    payload.items.forEach(repo => {
        if(repo.spec.type == "git"){
            let git_url = repo.spec.params[1].value;
            repos.push(git_url);
        }
    });

    return repos;
}

module.exports = { get_git_repos_as_array };