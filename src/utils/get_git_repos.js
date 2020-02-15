function get_git_repos_as_array(payload) {
	const repos = [];

	payload.items.forEach((repo) => {
		if (repo.spec.type === 'git') {
			const git_url = repo.spec.params[1].value;
			repos.push(git_url);
		}
	});

	return repos;
}

function get_pipelinerun_from_resource(payload, type, value) {
	let pipelinerun = null;

	payload.items.forEach((item) => {
		if (item.spec.type === type && item.spec.params[1].value === value) {
			pipelinerun = item.metadata.name;
		}
	});

	return pipelinerun;
}

function map_pipelines_to_repos(git_repos, payload) {
	const map = {};

	git_repos.forEach((repo) => {
		map[repo] = get_pipelinerun_from_resource(payload, 'git', repo);
	});

	return map;
}

module.exports = {
	get_git_repos_as_array,
	map_pipelines_to_repos,
	get_pipelinerun_from_resource
};
