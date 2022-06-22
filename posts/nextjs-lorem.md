---
title: 'Lorem ipsum dolor sit amet.'
metaTitle: 'Vestibulum ante ipsum primis.'
metaDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
socialImage: images/nextjs.png
date: 'June 21, 2022'
tags:
- tag1
- tag2
---

Aliquam enim risus, condimentum ut sagittis id, [commodo vitae ligula](https://next.js). Donec ipsum est, egestas at diam eu, iaculis accumsan sem. Ut a diam sed massa pharetra dictum ut nec libero. Vivamus blandit convallis magna ac tincidunt. Nullam in orci faucibus, lacinia quam non, venenatis quam. Nunc ultrices dolor in elit aliquam ultricies. Nulla dolor neque, malesuada id lacinia vel, blandit a odio. Duis convallis iaculis purus nec pretium. Sed ac libero velit. Donec sapien arcu, cursus non auctor non, consequat at tortor.

```
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={'text-highlight text-5xl font-chandramaya'}>
      <div className={'container flex flex-wrap justify-between items-center mx-auto p-3'}>
        <Link href="/">
          <a className={'shadow-amber-200'}>Meow</a>
        </Link>
        <Link href="/">Homepage</Link>
        <Link href="/">Meow</Link>
      </div>
      <div className={'border-t-2 border-laurel'} />
    </nav>
  );
}

export default Navbar;
```
```
<Head>
    <title>{frontmatter.metaTitle}</title>
    <desc>{frontmatter.description}</desc>
</Head>
```