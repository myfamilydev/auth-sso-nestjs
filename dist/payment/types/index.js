"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakePaymentResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class MakePaymentResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2b9e50d0' }),
    __metadata("design:type", String)
], MakePaymentResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pending' }),
    __metadata("design:type", String)
], MakePaymentResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: { value: '100', currency: 'RUB' } }),
    __metadata("design:type", Object)
], MakePaymentResponse.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Заказ №1' }),
    __metadata("design:type", String)
], MakePaymentResponse.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            type: 'redirect',
            confirmation_url: 'https://yoomoney.ru/checkout/payments/v2/contract?orderId=2b',
        },
    }),
    __metadata("design:type", Object)
], MakePaymentResponse.prototype, "confirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            account_id: '204971',
            gateway_id: '2057935',
        },
    }),
    __metadata("design:type", Object)
], MakePaymentResponse.prototype, "recipient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], MakePaymentResponse.prototype, "test", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], MakePaymentResponse.prototype, "paid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], MakePaymentResponse.prototype, "refundable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {} }),
    __metadata("design:type", Object)
], MakePaymentResponse.prototype, "metadata", void 0);
exports.MakePaymentResponse = MakePaymentResponse;
//# sourceMappingURL=index.js.map