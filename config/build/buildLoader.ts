import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };

  const cssLoader = buildCssLoader(isDev);

  return [
    assetsLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
}
