export declare class MakePaymentResponse {
    id: string;
    status: string;
    amount: {
        value: string;
        currency: string;
    };
    description: string;
    confirmation: {
        type: string;
        confirmation_url: string;
    };
    recipient: {
        account_id: string;
        gateway_id: string;
    };
    test: boolean;
    paid: boolean;
    refundable: boolean;
    metadata: object;
}
