import { Request, Response } from 'express';
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";

import * as _ from 'lodash';

import * as admin from "firebase-admin";

export function apiCreateUser(req: Request, res: Response) {
    createUser(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Could not create user`));
}

function createUser(props: any): Promise<any> {
    
    return admin.auth().createUser({
        email: props.email,
        emailVerified: true,
        password: props.password,
        disabled: false
    })
}