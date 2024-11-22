import { ProjectHeader } from '@/components/project/project-header';
import { ProjectOverview } from '@/components/project/project-overview';
import { ProjectTeam } from '@/components/project/project-team';
import { ProjectTimeline } from '@/components/project/project-timeline';
import { ProjectMedia } from '@/components/project/project-media';
import { ProjectDocuments } from '@/components/project/project-documents';
import { ProjectTasks } from '@/components/project/project-tasks';

export default function ProjectPage() {
  return (
    <div className="max-w-[1600px] mx-auto px-6">
      <ProjectHeader />
      <ProjectOverview />
      <div className="grid grid-cols-[1fr_2fr] gap-6 mt-6">
        <div className="space-y-6">
          <ProjectTeam />
          <ProjectMedia />
          <ProjectDocuments />
        </div>
        <div className="space-y-6">
          <ProjectTimeline />
          <ProjectTasks />
        </div>
      </div>
    </div>
  );
}