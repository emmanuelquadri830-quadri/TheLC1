import { motion } from 'motion/react';
import { Cpu, Zap, ShieldCheck, Activity, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function OrchestrationLayer() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50/50 to-transparent border border-blue-100/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Central Core */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-dashed border-blue-200/50"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-16 rounded-full border border-dashed border-blue-100/30"
          />
          
          <Card className="w-48 h-48 rounded-full flex flex-col items-center justify-center gap-3 border-2 border-blue-500/20 bg-white/80 backdrop-blur-sm shadow-xl shadow-blue-500/10">
            <div className="p-4 rounded-2xl bg-blue-500/10">
              <Cpu className="w-10 h-10 text-blue-600" />
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Orchestrator</p>
              <p className="text-lg font-bold">Core v2.4</p>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Connecting Nodes */}
      <Node 
        icon={Zap} 
        label="Fast Reasoning" 
        status="active" 
        position={{ top: '15%', left: '25%' }} 
        delay={0.2}
      />
      <Node 
        icon={ShieldCheck} 
        label="Eval Loop" 
        status="active" 
        position={{ top: '15%', right: '25%' }} 
        delay={0.4}
      />
      <Node 
        icon={Activity} 
        label="Workflow Sync" 
        status="idle" 
        position={{ bottom: '15%', left: '25%' }} 
        delay={0.6}
      />
      <Node 
        icon={Network} 
        label="Agent Mesh" 
        status="active" 
        position={{ bottom: '15%', right: '25%' }} 
        delay={0.8}
      />

      {/* Connection Lines (SVGs) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59 130 246 / 0.1)" />
            <stop offset="50%" stopColor="rgb(59 130 246 / 0.4)" />
            <stop offset="100%" stopColor="rgb(59 130 246 / 0.1)" />
          </linearGradient>
        </defs>
        <Connection x1="50%" y1="50%" x2="25%" y2="15%" />
        <Connection x1="50%" y1="50%" x2="75%" y2="15%" />
        <Connection x1="50%" y1="50%" x2="25%" y2="85%" />
        <Connection x1="50%" y1="50%" x2="75%" y2="85%" />
      </svg>
    </div>
  );
}

function Node({ icon: Icon, label, status, position, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={position}
      className="absolute z-20 flex flex-col items-center gap-2"
    >
      <div className="relative">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Icon className="w-5 h-5 text-slate-600" />
        </div>
        {status === 'active' && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </div>
      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

function Connection({ x1, y1, x2, y2 }: { x1: string; y1: string; x2: string; y2: string }) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#lineGradient)"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    />
  );
}
