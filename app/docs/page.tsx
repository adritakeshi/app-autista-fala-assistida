import { readFileSync } from 'node:fs';
import path from 'node:path';

export default function DocsPage() {
  const docPath = path.join(process.cwd(), 'docs', 'DOCUMENTATION.md');
  const content = readFileSync(docPath, 'utf8');

  return (
    <div className="card p-6">
      <h1 className="section-title">Documentação</h1>
      <pre className="mt-6 whitespace-pre-wrap text-sm leading-7 text-slate-700">{content}</pre>
    </div>
  );
}
