import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { BehaviorSubject } from "rxjs";
import ButtonCustom from "./components/Button/button";
import ToastCustom from "./components/Toast/toast";
import ModalCustom from "./components/Modal/modal";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export function publicApiFunction(string: any) {
  return string;
}

export const commonState = new BehaviorSubject({});

export { ButtonCustom, ToastCustom, ModalCustom };
