const {
	get_git_repos_as_array,
	map_pipelines_to_repos,
	get_pipelinerun_from_resource
} = require('./get_git_repos.js');

const endpoint_response_mock = require('../mocks/pipeline_resources_mocks/resource_with_1_repo.json');

describe('Tests for the getGitRepos.js', () => {
	test('canary test', () => {
		expect(true).toBe(true);
	});
	test('expect get_git_repos_array to a repo in an array from a json object', () => {
		const result = get_git_repos_as_array(endpoint_response_mock);
		expect(result).toEqual([
			'https://github.com/GoogleContainerTools/skaffold'
		]);
	});

	test('given the resource return the pipeline-run name', () => {
		const params = [
			endpoint_response_mock,
			'git',
			'https://github.com/GoogleContainerTools/skaffold'
		];
		const result = get_pipelinerun_from_resource(...params);
		expect(result).toBe('skaffold-git-pipelinerun');
	});

	test('expect get_git_repos_map to return a map where the key is the repo and piplinerun being the value', () => {
		const git_repos = get_git_repos_as_array(endpoint_response_mock);
		const result = map_pipelines_to_repos(git_repos, endpoint_response_mock);
		expect(result).toEqual({
			'https://github.com/GoogleContainerTools/skaffold':
				'skaffold-git-pipelinerun'
		});
	});
});
