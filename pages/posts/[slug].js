import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head'
import Image from "next/image";
import Tag from "../../components/Tag";

const md = require('markdown-it')()
  .use(require('markdown-it-highlightjs')
)


export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    }
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDesc} />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 viewport-fit=cover" />
      </Head>
      <div className={`mt-10 sm:mt-10 md:mt-14 lg:mt-20 mx-auto max-w-md sm:max-w-xl px-4 sm:px-4 md:px-2 lg:px-0`}>
        <main className={'prose prose-md sm:prose-sm lg:prose-lg prose-a:text-highlight prose-pre:bg-platinum prose-pre:border-laurel prose-pre:border prose-pre:shadow-md'}>
          <Image
            className={'rounded-xl'}
            width={650}
            height={340}
            alt={frontmatter.title}
            src={`/${frontmatter.socialImage}`} />
          {(frontmatter.tags).map((tag) =>
            <Tag key={tag}>{tag}</Tag>
          )}
          <h1 className={`pt-8 sm:pt-8 lg:pt-10`}>{frontmatter.title}</h1>

          <article className={`prose prose-md prose-code:text-sm sm:prose-code:text-md lg:prose-lg`} dangerouslySetInnerHTML={{ __html: md.render(content) }} />
        </main>
      </div>
    </div>
  );
}