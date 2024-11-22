import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: '1',
    name: 'Floor Replacement_10/2024_3 Elizabeth Street #104',
    status: 'In Progress',
    phase: 'Inspection',
    lastUpdated: '2 hours ago',
  },
  {
    id: '2',
    name: 'Kitchen Remodel_09/2024_157 Main Street',
    status: 'Planning',
    phase: 'Design',
    lastUpdated: '1 day ago',
  },
  {
    id: '3',
    name: 'Bathroom Renovation_11/2024_892 Oak Avenue',
    status: 'Scheduled',
    phase: 'Planning',
    lastUpdated: '3 days ago',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <Card className="divide-y">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/`}
            className="flex items-center justify-between p-6 hover:bg-muted/50"
          >
            <div className="space-y-1">
              <p className="font-medium">{project.name}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{project.status}</span>
                <span>•</span>
                <span>{project.phase}</span>
                <span>•</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
            </div>
            <Button variant="ghost">View</Button>
          </Link>
        ))}
      </Card>
    </div>
  );
}