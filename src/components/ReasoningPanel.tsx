import { Brain, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const reasoningSteps = [
  {
    id: 1,
    title: 'Contextual Analysis',
    desc: 'Processing input parameters and historical data.',
    status: 'completed',
    time: '12ms',
  },
  {
    id: 2,
    title: 'Hypothesis Generation',
    desc: 'Creating multiple potential solution paths.',
    status: 'completed',
    time: '45ms',
  },
  {
    id: 3,
    title: 'Constraint Validation',
    desc: 'Checking against safety and logic protocols.',
    status: 'active',
    time: 'running',
  },
  {
    id: 4,
    title: 'Final Synthesis',
    desc: 'Aggregating results into a structured output.',
    status: 'pending',
    time: '-',
  },
];

export function ReasoningPanel() {
  return (
    <Card className="h-full border-none shadow-none bg-transparent">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-lg">Reasoning Module</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-6">
            {reasoningSteps.map((step) => (
              <div key={step.id} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-6 last:pb-0">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${
                  step.status === 'completed' ? 'bg-blue-500' : 
                  step.status === 'active' ? 'bg-amber-500 animate-pulse' : 'bg-slate-200'
                }`} />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold">{step.title}</h4>
                  <span className="text-[10px] font-mono text-muted-foreground">{step.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
