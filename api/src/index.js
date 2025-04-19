const { app } = require('@azure/functions');
import EmailsForFITS from './functions/EmailsForFITS.js';

app.http('EmailsForFITS', EmailsForFITS);