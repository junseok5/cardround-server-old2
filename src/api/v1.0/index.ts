import express from "express"
import auth from "./auth/auth"

const router = express.Router()

router.use("/auth", auth)

export default router

/*

API
[POST] /auth/login/:provider(naver|kakao|facebook|google)
[POST] /auth/login/admin
[POST] /auth/logout/admin
[POST] /auth/logout/user
[GET] /auth/check

[GET] /channels/
[GET] /channels/:id
[POST] /channels/
[PATCH] /channels/:id
[DELETE] /channels/:id

[GET] /boards/:id
[POST] /boards/
[PATCH] /boards/:id
[DELETE] /boards/:id

[POST] /notifications/
[DELETE] /notifications/:id

[GET] /users/:id
[PATCH] /users/:id
[DELETE] /users/:id
[GET] /users/:id/notifications
[GET] /users/:id/following-boards
[POST] /users/:id/follows/boards/:boardId
[DELETE] /users/:id/unfollows/boards/:boardId
[POST] /users/:id/request-notifications

*/