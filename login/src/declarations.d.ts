declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "@loiNguyen/common" {
  const publicApiFunction: Function;
  const commonState: any;
  const ButtonCustom: any;
  const ToastCustom: any;
  const ModalCustom: any;
  export {
    publicApiFunction,
    commonState,
    ButtonCustom,
    ToastCustom,
    ModalCustom,
  };
}

declare module "@loiNguyen/utility" {
  const GET: Function;
  const POST: Function;
  const PUT: Function;
  export { GET, POST, PUT };
}
