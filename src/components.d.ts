/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NnSideDrawer {
        "header": string;
        "open": () => Promise<void>;
        "opened": boolean;
    }
}
declare global {
    interface HTMLNnSideDrawerElement extends Components.NnSideDrawer, HTMLStencilElement {
    }
    var HTMLNnSideDrawerElement: {
        prototype: HTMLNnSideDrawerElement;
        new (): HTMLNnSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "nn-side-drawer": HTMLNnSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface NnSideDrawer {
        "header"?: string;
        "opened"?: boolean;
    }
    interface IntrinsicElements {
        "nn-side-drawer": NnSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nn-side-drawer": LocalJSX.NnSideDrawer & JSXBase.HTMLAttributes<HTMLNnSideDrawerElement>;
        }
    }
}