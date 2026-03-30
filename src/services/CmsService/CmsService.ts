import { experiences } from "@data/experiences";
import { works } from "@data/works";
import { projects } from "@data/projects";
import {
  AllProjects,
  ExperiencesType,
  ProjectType,
  WorksType,
} from "./CmsService.type";

class CmsServiceClass {
  public async getAllExperiences(): Promise<ExperiencesType[]> {
    return experiences;
  }

  public async getAllWorks(): Promise<WorksType[]> {
    return works;
  }

  public async getUniqueWork(slug: string): Promise<WorksType> {
    const work = works.find((w) => w.slug === slug);
    if (!work) throw new Error(`Work not found: ${slug}`);
    return work;
  }

  public async getAllProjects(): Promise<AllProjects[]> {
    return projects;
  }

  public async getUniqueProject(slug: string): Promise<ProjectType> {
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error(`Project not found: ${slug}`);
    return project;
  }
}

export const CmsService = new CmsServiceClass();
