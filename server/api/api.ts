import { Application } from "express";
import { apiCreateUser } from "./apiCreateUser";

export function initRestApi(app: Application) {
	app.route('/api/user').post(apiCreateUser);
}