const cds = require('@sap/cds');
 
const {
    readTravel
} = require('./lib/handlers');

module.exports = cds.service.impl(async function () {
    /*** SERVICE ENTITIES ***/
    const {
        Travel
    } = this.entities;
 
    /*** HANDLERS REGISTRATION ***/
    // ON events
   console.log('WarehouseTask service initialized');
    this.on('READ',Travel, readTravel);
    //this.on('UPDATE', ConfirmWarehouseTaskProduct, updateConfirmWarehouseTaskProduct);
    
    
});