declare module "element-maker" {
  interface ElementMakerOptions {
    id?: string | null;
    className?: string | null;
    textContent?: string | null;
    attributes?: {
      [key: string]: string | number | boolean | null | undefined;
    };
  }

  export default function ElementMaker(
    tag: string,
    options?: ElementMakerOptions
  ): HTMLElement;
}
