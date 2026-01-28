import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './portfolio.html',
        './assets/**/*.html',
        './assets/**/*.js'
      ],
      safelist: [
        'active',
        'is-open',
        'hidden',
        /^graph-/,
        /^portfolio-/,
        /^nav-/,
        /^role-/,
        /^accordion-/
      ],
      defaultExtractor: content =>
        content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
