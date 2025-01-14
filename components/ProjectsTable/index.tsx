import React, { useState, useRef, useEffect } from 'react';
import styles from './ProjectsTable.module.css';

interface Project {
  id: number;
  name: string;
  category: string;
  client: string;
  year: number;
  description: string;
  tags: string[];
  websiteUrl: string;
  images: string[];
}

const placeholderProjects: Project[] = [
  {
    id: 1,
    name: "Commissary Connect (NDA)",
    category: "Mobile/Web Development",
    client: "Commissary Connect",
    year: 2025,
    description: "Collaborated with the client team to design and develop a dynamic web application with advanced functionality. Leveraged modern frameworks to create a seamless and responsive user experience, aligning with their vision for digital transformation.",
    tags: ["Development", "Full Stack"],
    websiteUrl: "#",
    images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"]
  },
  {
    id: 2,
    name: "Spurt",
    category: "Web/mobile design, Development",
    client: "BCIT",
    year: 2024,
    description: "Led the development of a comprehensive digital platform integrating cutting-edge technologies. Created an intuitive interface that enhances user engagement while maintaining high performance standards.",
    tags: ["Web design", "Development"],
    websiteUrl: "#",
    images: ["/placeholder4.jpg", "/placeholder5.jpg", "/placeholder6.jpg"]
  },
  {
    id: 3,
    name: "Orbit",
    category: "Web design, Development",
    client: "BCIT",
    year: 2024,
    description: "Spearheaded the implementation of a scalable solution using modern architecture principles. Focused on delivering a robust platform that exceeds client expectations while ensuring maintainability.",
    tags: ["Development"],
    websiteUrl: "#",
    images: ["/placeholder7.jpg", "/placeholder8.jpg", "/placeholder9.jpg"]
  }
];

export default function ProjectsTable() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [closingProject, setClosingProject] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const toggleProject = (projectId: number) => {
    if (expandedProject === projectId) {
      setClosingProject(projectId);
      setExpandedProject(null);
      
      timeoutRef.current = setTimeout(() => {
        setClosingProject(null);
      }, 500); // Match this with CSS animation duration
    } else {
      setExpandedProject(projectId);
      setClosingProject(null);
    }
  };

  useEffect(() => {
    const cleanup: () => void = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    return cleanup;
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.projectsTable}>
        <thead>
          <tr>
            <th>PROJECT</th>
            <th>CATEGORY</th>
            <th>CLIENT</th>
            <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
          {placeholderProjects.map((project) => (
            <React.Fragment key={project.id}>
              <tr 
                onClick={() => toggleProject(project.id)}
                className={expandedProject === project.id ? styles.expanded : ''}
              >
                <td className={styles.projectName}>{project.name}</td>
                <td>{project.category}</td>
                <td>{project.client}</td>
                <td>{project.year}</td>
              </tr>
              {(expandedProject === project.id || closingProject === project.id) && (
                <tr className={`${styles.expandedContent} ${closingProject === project.id ? styles.closing : ''}`}>
                  <td colSpan={4}>
                  <div className={styles.projectDetails}>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.tags}>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.websiteUrl} className={styles.websiteButton}>
                      See website
                    </a>
                    <div className={styles.imageGrid}>
                      {project.images.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                          <div className={styles.imagePlaceholder} />
                        </div>
                      ))}
                    </div>
                  </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
