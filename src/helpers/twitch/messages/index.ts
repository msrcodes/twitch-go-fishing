import {ChatUserstate} from 'tmi.js';

import test from './test';

export type MessageHandler = () => void;

interface MessageHandlers {
  [message: string]: MessageHandler;
}

const handlers: MessageHandlers = {
  test,
};

function onMessage(
  _channel: string,
  _userstate: ChatUserstate,
  message: string,
  self: boolean
) {
  // Prevent infinite loops
  if (self) return;

  // Convert message to lowercase, and trim any whitespace
  const msg = message.toLowerCase().trim();

  // Check list of handlers, and then run accordingly
  if (Object.keys(handlers).includes(msg)) {
    handlers[msg]();
  }

  // If any other message is received, do nothing
}

export {onMessage};
