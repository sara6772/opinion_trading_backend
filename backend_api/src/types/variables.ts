export const CREATE_ORDER = "Create_Order";
export const CANCEL_ORDER = "Cancel_Order";
export const ON_RAMP = "On_Ramp";
export const GET_OPEN_ORDERS = "Get_Open_Orders";
export const GET_INR_BALANCE = "Get_Inr_Balance";

export interface DepthMessage {
    type: "DEPTH",
    payload: {
        market: string,
        yes: [string, string][];
        no: [string, string][];
    }
}

export type OrderPlaced = {
    type: "ORDER_PLACED",
    payload: {
        orderId: string,
        executedQty: number,
        fills:[
            {
                price: string,
                qty: number,
                tradeId: number
            }
        ]
    }
}

export type BalanceUpdated = {
    type: "BALANCE_UPDATED",
    payload: {
        updatedBalance: number
    }
    
}

export type CurrentBalance = {
    type: "CURRENT_BALANCE",
    payload: {
        currentBalance: number
    }
}

export type MessageFromOrderbook = DepthMessage | OrderPlaced | BalanceUpdated;


export type MessageToEngine = {
    type: typeof CREATE_ORDER,
    data: {
        market: string,
        userId: string,
        stockType: 'yes' | 'no',
        side: 'buy' | 'sell',
        quantity: number,
        price: number
    }
} | {
    type: typeof CANCEL_ORDER,
    data: {
        market: string,
        userId: string
    }
} | {
    type: typeof GET_OPEN_ORDERS,
    data: {
        market: string
    }
} | {
    type: typeof GET_INR_BALANCE,
    data:{
        userId: string
    }
} | {
    type: typeof ON_RAMP,
    data: {
        userId: string,
        amount: number
    }
}
