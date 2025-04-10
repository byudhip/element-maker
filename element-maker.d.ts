declare module "element-maker" {
  /**
   * Optional configuration for the ElementMaker function
   */
  interface ElementMakerOptions {
    /**
     * The ID to assign to the element
     */
    id?: string | null;

    /**
     * A class name to add to the element
     */
    className?: string | null;

    /**
     * Text content to insert into the element
     */
    textContent?: string | null;

    /**
     * An object of attributes. Keys are attribute names.
     * Boolean or null values are handled specially:
     * - `true` or `null` → renders as `attribute=""`
     * - `false` or `undefined` → ignored
     */
    attributes?: {
      [key: string]: string | number | boolean | null | undefined;
    };
  }

  /**
   * Creates a DOM element with optional ID, class, textContent, and attributes.
   *
   * Example usage:
   * ```ts
   * ElementMaker('input', {
   *   id: 'email',
   *   className: 'form-control',
   *   attributes: {
   *     type: 'email',
   *     required: true,
   *     maxlength: 50
   *   }
   * });
   * ```
   */
  export default function ElementMaker(
    tag: string,
    options?: ElementMakerOptions
  ): HTMLElement;
}
