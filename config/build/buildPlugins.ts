import HTMLWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

export default function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin()
  ]
}