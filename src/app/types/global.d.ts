// declare module "*.module.scss";
// declare module "*.module.css";

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}