import path from 'path';
import { Configuration } from 'webpack';
import buildLoaders from './buildLoader';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';

export default function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode } = options


  return {
    mode: mode,
    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),
  }
}