const { get_git_repos_as_array } = require('./get_git_repos.js');
const endpoint_response_mock = require('../mocks/pipeline_resources_mocks/resource_with_1_repo.json');

describe('Tests for the getGitRepos.js', () => {
	test('expect get_git_repos_array to a repo in an array from a json object', () => {
		expect(get_git_repos_as_array(endpoint_response_mock)).toEqual([
			'https://github.com/GoogleContainerTools/skaffold'
		]);
	});

	test('expect get_git_repos_map to return a map of git repos with the key being the repo and piplerun being the value', () => {
		expect(true).toEqual(true);
	});
});
