define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
], function (Component, renderList) {
    'use strict';
    renderList.push(
        {
            type: 'virementmaitrise',
            component: 'Virementmaitrise_Payment/js/view/payment/method-renderer/fintecture-payment',
        },
        {
            type: 'virementmaitrise_bnpl',
            component: 'Virementmaitrise_Payment/js/view/payment/method-renderer/fintecture-bnpl',
        }
    );
    return Component.extend({});
});
