/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLAppHomeElement extends HTMLStencilElement {

  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAppProfileElement extends HTMLStencilElement {
    'match': MatchResults;
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {
  interface HTMLMyAppElement extends HTMLStencilElement {

  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTaskCreatorElement extends HTMLStencilElement {

  }
  var HTMLTaskCreatorElement: {
    prototype: HTMLTaskCreatorElement;
    new (): HTMLTaskCreatorElement;
  };
  interface HTMLElementTagNameMap {
    'task-creator': HTMLTaskCreatorElement;
  }
  interface ElementTagNameMap {
    'task-creator': HTMLTaskCreatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'task-creator': JSXElements.TaskCreatorAttributes;
    }
  }
  namespace JSXElements {
    export interface TaskCreatorAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLTaskInputElement extends HTMLStencilElement {

  }
  var HTMLTaskInputElement: {
    prototype: HTMLTaskInputElement;
    new (): HTMLTaskInputElement;
  };
  interface HTMLElementTagNameMap {
    'task-input': HTMLTaskInputElement;
  }
  interface ElementTagNameMap {
    'task-input': HTMLTaskInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'task-input': JSXElements.TaskInputAttributes;
    }
  }
  namespace JSXElements {
    export interface TaskInputAttributes extends HTMLAttributes {
      'onTasksSubmitted'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLTaskListElement extends HTMLStencilElement {
    'tasks': string[];
  }
  var HTMLTaskListElement: {
    prototype: HTMLTaskListElement;
    new (): HTMLTaskListElement;
  };
  interface HTMLElementTagNameMap {
    'task-list': HTMLTaskListElement;
  }
  interface ElementTagNameMap {
    'task-list': HTMLTaskListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'task-list': JSXElements.TaskListAttributes;
    }
  }
  namespace JSXElements {
    export interface TaskListAttributes extends HTMLAttributes {
      'tasks'?: string[];
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
