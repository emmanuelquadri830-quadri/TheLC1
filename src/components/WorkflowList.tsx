import { Workflow, Play, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const workflows = [
  {
    name: 'Customer Support Triaging',
    steps: 5,
    status: 'Running',
    priority: 'High',
  },
  {
    name: 'Automated Code Review',
    steps: 3,
    status: 'Paused',
    priority: 'Medium',
  },
  {
    name: 'Market Sentiment Analysis',
    steps: 8,
    status: 'Completed',
    priority: 'Low',
  },
];

export function WorkflowList() {
  return (
    <Card className="h-full border-none shadow-none bg-transparent">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center gap-2">
          <Workflow className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-lg">Active Workflows</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-3">
          {workflows.map((wf) => (
            <div key={wf.name} className="p-3 rounded-xl border bg-white hover:bg-slate-50 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold truncate max-w-[180px]">{wf.name}</h4>
                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[10px] font-medium">
                  {wf.steps} Steps
                </Badge>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    wf.status === 'Running' ? 'bg-blue-500' : 
                    wf.status === 'Paused' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">{wf.status}</span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full border-dashed h-12 text-muted-foreground hover:text-primary hover:border-primary">
            <Play className="w-4 h-4 mr-2" />
            New Workflow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
