export interface App {
    message : Function,
    action : Function,
    event : Function,
    client : {
        users : {
            list : Function
        }
    }
}

export interface AppMessage {
    message : {
        user : string,
        text : string
    },
    say : Function
}

export interface AppMention {
    event : {
        text : string
    },
    say : Function
}

export interface PriorityQueue {
    add : Function,
    peek : Function,
    remove : Function
}