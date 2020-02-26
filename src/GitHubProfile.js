import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const gitHubProfile = gql`
  {
    github {
      user(username: "SaraBurgin") {
        login
        avatar_url
        repos {
          name
        }
      }
    }
  }
`;
function GitHubProfile() {
  const { loading, error, data } = useQuery(gitHubProfile);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <div>{data.github.user.login}</div>
      <img src={data.github.user.avatar_url} alt=" " />
      <div>
        {data.github.user.repos.map(repo => {
          console.log('REPOSITORIES: ', repo);
          return (
            <div key={repo.name}>
              <p style={{ border: '1px solid grey', marginBottom: '20px' }}>
                {repo.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GitHubProfile;
