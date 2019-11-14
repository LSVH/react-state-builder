import * as React from "react";

interface createStateBuilderProps {
  /**
   * The function what initiates the state to build upon.
   */
  onInit(): any[],

  /**
   * This function is called every time new parts of the state are loaded.
   */
  onLoad(type: string, payload?: any): any
}

export const createStateBuilder = ({}: React.PropsWithChildren<createStateBuilderProps>) => null;

interface onLoadProps {
  /**
   * The type passed from a dispatch call, used to determine under which key the loaded data should be stored. Useful
   * to query the data what should be loaded.
   */
  type: string,

  /**
   * The payload passed from a dispatch call, usually used to query the data which should be loaded.
   */
  payload?: any
}

export const onLoad = ({}: React.PropsWithChildren<onLoadProps>) => null;
