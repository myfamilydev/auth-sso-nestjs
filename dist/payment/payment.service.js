"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let PaymentService = class PaymentService {
    async makePayment(makePaymentDto) {
        try {
            const { data } = await (0, axios_1.default)({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    'Content-Type': 'application/json',
                    'Idempotence-Key': Date.now(),
                },
                auth: {
                    username: '204971',
                    password: 'test_dgisbcPctB1RjjKeSBzdIuXJR0IRTFKm6Rdi9eNGZxE',
                },
                data: {
                    amount: {
                        value: makePaymentDto.amount,
                        currency: 'RUB',
                    },
                    capture: true,
                    confirmation: {
                        type: 'redirect',
                        return_url: 'http://localhost:3001/order',
                    },
                    description: makePaymentDto.description,
                },
            });
            return data;
        }
        catch (error) {
            throw new common_1.ForbiddenException(error);
        }
    }
    async checkPayment(checkPaymentDto) {
        try {
            const { data } = await (0, axios_1.default)({
                method: 'GET',
                url: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,
                auth: {
                    username: '204971',
                    password: 'test_dgisbcPctB1RjjKeSBzdIuXJR0IRTFKm6Rdi9eNGZxE',
                },
            });
            return data;
        }
        catch (error) {
            throw new common_1.ForbiddenException(error);
        }
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map