import { MakePaymentDto } from './dto/make-paymen.dto';
import { CheckPaymentDto } from './dto/check-payment.dto';
export declare class PaymentService {
    makePayment(makePaymentDto: MakePaymentDto): Promise<any>;
    checkPayment(checkPaymentDto: CheckPaymentDto): Promise<any>;
}
