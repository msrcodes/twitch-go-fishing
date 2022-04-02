import {Client} from 'tmi.js';
import {onMessage} from './messages';

class TwitchClient {
  private client: Client;
  private isDev = true;

  constructor() {
    this.client = new Client({
      options: {debug: true},
      //   identity: {
      //     username: 'bot_name',
      //     password: 'oauth:bot_token',
      //   },
      channels: ['msrcodes'],
    });
  }

  init() {
    if (this.isDev) console.log('Connecting...');
    this.connect();
    if (this.isDev) console.log('Connected!\nListening...');
    this.listen();
  }

  private connect() {
    this.client.connect().catch(console.error);
  }

  private listen() {
    this.client.on('message', onMessage);
  }
}

export default TwitchClient;
