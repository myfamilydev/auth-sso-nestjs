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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const make_paymen_dto_1 = require("./dto/make-paymen.dto");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("./types");
const check_payment_dto_1 = require("./dto/check-payment.dto");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    makePayment(makePaymentDto) {
        return this.paymentService.makePayment(makePaymentDto);
    }
    checkPayment(checkPaymentDto) {
        return this.paymentService.checkPayment(checkPaymentDto);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.MakePaymentResponse }),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [make_paymen_dto_1.MakePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "makePayment", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('/info'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_payment_dto_1.CheckPaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "checkPayment", null);
PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map