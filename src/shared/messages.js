const onWebMessage = (listener) => {
  window.addEventListener('message', (event) => {
    let sender = event.source;
    let message = null;
    try {
      message = JSON.parse(event.data);
    } catch (e) {
      // ignore unexpected message
      return;
    }
    listener(message, sender);
  });
};

const onBackgroundMessage = (listener) => {
  browser.runtime.onMessage.addListener(listener);
};

const onMessage = (listener) => {
  onWebMessage(listener);
  onBackgroundMessage(listener);
};

export default {
  BACKGROUND_OPERATION: 'background.operation',

  CONSOLE_BLURRED: 'console.blured',
  CONSOLE_ENTERED: 'console.entered',
  CONSOLE_QUERY_COMPLETIONS: 'console.query.completions',
  CONSOLE_SHOW_COMMAND: 'console.show.command',
  CONSOLE_SHOW_ERROR: 'console.show.error',
  CONSOLE_SHOW_INFO: 'console.show.info',
  CONSOLE_HIDE_COMMAND: 'console.hide.command',

  FOLLOW_START: 'follow.start',
  FOLLOW_REQUEST_COUNT_TARGETS: 'follow.request.count.targets',
  FOLLOW_RESPONSE_COUNT_TARGETS: 'follow.response.count.targets',
  FOLLOW_CREATE_HINTS: 'follow.create.hints',
  FOLLOW_SHOW_HINTS: 'follow.update.hints',
  FOLLOW_REMOVE_HINTS: 'follow.remove.hints',
  FOLLOW_ACTIVATE: 'follow.activate',
  FOLLOW_KEY_PRESS: 'follow.key.press',

  OPEN_URL: 'open.url',

  SETTINGS_RELOAD: 'settings.reload',
  SETTINGS_CHANGED: 'settings.changed',
  SETTINGS_QUERY: 'settings.query',

  onWebMessage,
  onBackgroundMessage,
  onMessage,
};
