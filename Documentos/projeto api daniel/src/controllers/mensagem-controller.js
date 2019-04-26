'use strict';

const repository = require('../repositories/customer-repository');
// const md5 = require('md5');
// const authService = require('../services/auth-service');

// const emailService = require('../services/email-service');


exports.post = async(req, res, next) => {
    try {
        // const token = req.body.token || req.query.token || req.headers['x-access-token'];
        // const data = await authService.decodeToken(token);
        let mensagem  = new mensagem(req.body);
        await repository.create(mensagem);
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};