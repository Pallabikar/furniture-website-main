import postcssPlugin from '@tailwindcss/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [tailwindcss, postcssPlugin, autoprefixer],
};

export default config;
