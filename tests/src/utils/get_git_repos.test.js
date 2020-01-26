describe('Tests for the getGitRepos.js', () => {
    test('expect getGitRepos to extract array of git repos from payload', () => {
        let endpoint_response_mock = require('../mocks/pipeline_resources_mocks/resource_with_1_repo.json.js.js.js');
        let { get_git_repos } = require('../../../src/utils/get_git_repos.js');
        
        expect(get_git_repos(endpoint_response_mock)).toBe("get_git_repo");
    });
})