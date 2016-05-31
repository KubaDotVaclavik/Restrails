import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from './routes/index';

let router = express.Router()

router.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(<Index />)}`);
})

export default router;