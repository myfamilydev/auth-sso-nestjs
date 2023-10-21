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
exports.SignupResponse = exports.LoginCheckResponse = exports.LogoutUserResponse = exports.LoginUserResponse = exports.LoginUserRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginUserRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ivan' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ivan123' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "password", void 0);
exports.LoginUserRequest = LoginUserRequest;
class LoginUserResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                userId: 1,
                username: 'Ivan',
                password: 'ivan123',
            },
        },
    }),
    __metadata("design:type", Object)
], LoginUserResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Logged in' }),
    __metadata("design:type", String)
], LoginUserResponse.prototype, "msg", void 0);
exports.LoginUserResponse = LoginUserResponse;
class LogoutUserResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'session has ended' }),
    __metadata("design:type", String)
], LogoutUserResponse.prototype, "msg", void 0);
exports.LogoutUserResponse = LogoutUserResponse;
class LoginCheckResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], LoginCheckResponse.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ivan' }),
    __metadata("design:type", String)
], LoginCheckResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ivan@gmail.com' }),
    __metadata("design:type", String)
], LoginCheckResponse.prototype, "email", void 0);
exports.LoginCheckResponse = LoginCheckResponse;
class SignupResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], SignupResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ivan' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '$2b$10$90H0Hn.6Nx0SbrHQCX2xeeYjq.02nS5VpkIIwFAtDtCHEqHK',
    }),
    __metadata("design:type", String)
], SignupResponse.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ivan@gmail.com' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-03-17T17:23:33.502Z' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-03-17T17:23:33.502Z' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "createdAt", void 0);
exports.SignupResponse = SignupResponse;
//# sourceMappingURL=index.js.map