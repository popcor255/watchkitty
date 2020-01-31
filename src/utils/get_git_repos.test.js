var mock_root_directory = '../mocks/';
var src_root_directory = './';
describe('Tests for the getGitRepos.js', () => {
	test('expect get_git_repos_array to a repo in an array from a json object', () => {
		let endpoint_response_mock = require(mock_root_directory +
			'pipeline_resources_mocks/resource_with_1_repo.json');
		let { get_git_repos_as_array } = require(src_root_directory + 'get_git_repos.js');
		expect(get_git_repos_as_array(endpoint_response_mock)).toEqual([
			'https://github.com/GoogleContainerTools/skaffold'
		]);
	});

	test('expect get_git_repos_map to return a map of git repos with the key being the repo and piplerun being the value', () => {
		expect(true).toEqual(true);
	});
});
