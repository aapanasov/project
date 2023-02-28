import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function buildPlugins(
  { paths, isDev }: BuildOptions,
): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({ IS_DEV: JSON.stringify(isDev) }),
  ];

  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

  // TODO: fix analyzer
  // if (!isDev) {
  //   plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  // }

  return plugins;
}
