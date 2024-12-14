import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { GitHubRepo } from '../../hooks/useGitHubProjects';

interface ProjectCardProps {
  project: GitHubRepo;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const userConfirmed = window.confirm('Bu projeye gitmek istediğinizden emin misiniz?');
    if (userConfirmed) {
      window.open(project.html_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {project.name}
          <a
            href={project.html_url}
            onClick={handleLinkClick}
            className="text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </h3>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">
          {project.description}
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {project.stargazers_count}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
            {project.language}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.topics.map((topic: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};