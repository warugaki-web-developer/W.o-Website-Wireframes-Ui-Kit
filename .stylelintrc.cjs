module.exports = {
  extends: [
    'stylelint-config-html/html',
    'stylelint-config-html/astro',
    // "stylelint-config-html/php"
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['*.astro', '**/*.astro'],
      rules: {
        // 次の擬似クラスの使用を許可
        // :global()
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
};
