let ws: WebSocket | null;

let subsribers:Array<Function> = [];

const onMessageHandler = (e: MessageEvent<any>) => {
    subsribers.forEach(callback => callback(JSON.parse( e.data)));
}

export const apiChat = {
    start(){
        if(!ws){
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
        }
    },
    subscribe(callback: Function){
        subsribers.push(callback);
        ws?.addEventListener('message', onMessageHandler);
    },
    send(text: string){
        ws?.send(text);
    },
    clearMessageSubsriber(){
        ws?.removeEventListener('message', onMessageHandler);
        subsribers= [];
    }
}