import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const assetsLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:8]'
          },
        }
      },
      "sass-loader",
    ],
  }

  return [
    assetsLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}