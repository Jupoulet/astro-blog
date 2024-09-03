import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

export const fetchArticles = async () => {
  console.log('ENV', process.env);
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });

  // Extract necessary information from the response
  const articles = response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.article.title[0].text.content,
    slug: page.properties.slug.rich_text[0].text.content,
    created: page.properties.created.date.start,
    status: page.properties.Status.status.name,
    url: page.url,
  }));

  return articles;
};

export const fetchPageContent = async (pageId: string) => {
  // Convert Notion blocks to Markdown
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const markdown = n2m.toMarkdownString(mdBlocks);

  return markdown.parent;
};
