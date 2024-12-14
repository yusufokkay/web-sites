import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

export const useGitHubProjects = (username: string) => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const octokit = new Octokit();
        let allProjects: GitHubRepo[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const { data } = await octokit.repos.listForUser({
            username,
            sort: 'updated',
            per_page: 100,
            page,
            type: 'owner'
          });

          if (data.length > 0) {
            const formattedData = data
              .filter(repo => !repo.private) // Sadece açık olan repoları filtrele
              .map(repo => ({
                name: repo.name,
                description: repo.description || '',
                html_url: repo.html_url,
                topics: repo.topics || [],
                stargazers_count: repo.stargazers_count || 0, // undefined yerine 0 kullan
                language: repo.language || 'Unknown'
              }));

            allProjects = [...allProjects, ...formattedData];
            page += 1;
          } else {
            hasMore = false;
          }
        }

        setProjects(allProjects);
        console.log('Fetched projects:', allProjects); // Projeleri konsola yazdır
      } catch (err) {
        console.error('Error fetching projects:', err); // Hata mesajını konsola yazdır
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
};