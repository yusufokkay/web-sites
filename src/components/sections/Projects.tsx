import { ProjectCard } from '../ui/ProjectCard';
import { AnimatedText } from '../ui/AnimatedText';
import { useGitHubProjects } from '../../hooks/useGitHubProjects';

export const Projects = () => {
  // GitHub kullanıcı adınızı buraya yazın
  const { projects, loading, error } = useGitHubProjects('yusufokkay');

  if (error) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedText
            text="GitHub Projelerim"
            className="text-4xl font-bold text-center mb-12"
          />
          <p className="text-red-600">
            Projeler yüklenirken bir hata oluştu. Lütfen GitHub kullanıcı adınızı kontrol edin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedText
          text="GitHub Projelerim"
          className="text-4xl font-bold text-center mb-12"
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};