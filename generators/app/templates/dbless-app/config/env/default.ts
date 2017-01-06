/*
==============================================================================================
These configuration settings get called no matter what Node's process.env.NODE_ENV is set to.
==============================================================================================
*/

export const defaultConfig = {
  // When building show the actual console prints of webpack and the server
  show_console_detail: false,
  port: process.env.PORT || 5000,
  host: process.env.HOST || '0.0.0.0',
};
