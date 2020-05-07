import remark from 'remark';
import hljs from 'remark-highlight.js';
import html from 'remark-html';

const processor = remark()
    .use(hljs)
    .use(html);

export class MarkdownParser {
    async parse(raw: string): Promise<string> {
        return processor.processSync(raw).toString();
    }
}
