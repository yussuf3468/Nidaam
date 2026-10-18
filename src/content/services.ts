import { AppWindow, BrainCircuit, CodeXml, Smartphone, type LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  /** Short examples shown under the dashed tear. */
  examples: string;
  icon: LucideIcon;
  /** Category tile colour (white icon on top). */
  tile: string;
}

export const services: Service[] = [
  {
    title: 'Custom Software',
    description: 'Tailored solutions designed around your business needs.',
    examples: 'ERP · CRM · Internal tools',
    icon: CodeXml,
    tile: 'bg-neutral-900 dark:bg-neutral-700',
  },
  {
    title: 'Web Applications',
    description: 'Modern, scalable web experiences.',
    examples: 'Portals · Dashboards · SaaS',
    icon: AppWindow,
    tile: 'bg-blue-500',
  },
  {
    title: 'Mobile Applications',
    description: "Powerful apps built for today's users.",
    examples: 'iOS · Android · PWA',
    icon: Smartphone,
    tile: 'bg-violet-500',
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent systems that improve productivity.',
    examples: 'Assistants · Workflows · Insights',
    icon: BrainCircuit,
    tile: 'bg-emerald-500',
  },
];
