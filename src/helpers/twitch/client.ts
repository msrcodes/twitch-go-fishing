import {Client} from 'tmi.js';

class TwitchClient {
  private client: Client;
  private isDev = true;

  private rodX: number;
  private rodY: number;

  private setX: React.Dispatch<React.SetStateAction<number>>;
  private setY: React.Dispatch<React.SetStateAction<number>>;

  private MODIFIER = 10;

  constructor(
    rodX: number,
    rodY: number,
    setX: React.Dispatch<React.SetStateAction<number>>,
    setY: React.Dispatch<React.SetStateAction<number>>
  ) {
    this.rodX = rodX;
    this.rodY = rodY;
    this.setX = setX;
    this.setY = setY;
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
    this.client.on('message', (channel, userstate, message, self) => {
      // Prevent infinite loops
      if (self) return;

      // Convert message to lowercase, and trim any whitespace
      const msg = message.toLowerCase().trim();

      if (msg === 'left') {
        const newPos = this.rodX - this.MODIFIER;
        this.setX(newPos);
        this.rodX = newPos;
      } else if (msg === 'right') {
        const newPos = this.rodX + this.MODIFIER;
        this.setX(newPos);
        this.rodX = newPos;
      } else if (msg === 'up') {
        const newPos = this.rodY - this.MODIFIER;
        this.setY(newPos);
        this.rodY = newPos;
      } else if (msg === 'down') {
        const newPos = this.rodY + this.MODIFIER;
        this.setY(newPos);
        this.rodY = newPos;
      }
    });
  }
}

export default TwitchClient;
