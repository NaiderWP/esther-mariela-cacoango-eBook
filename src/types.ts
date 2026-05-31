export interface Topic {
  id: string;
  number: number;
  title: string;
  bullets: string[];
  reflection: string; // Lessons learned / callout
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  topics: Topic[];
  mindMapData: {
    root: string;
    branches: {
      title: string;
      subtopics: string[];
    }[];
  };
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface ReferenceItem {
  author: string;
  year: string;
  title: string;
  source: string;
}
